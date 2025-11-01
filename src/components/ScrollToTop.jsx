import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname, hash } = useLocation();

  const updateHeaderHeight = () => {
    const header = document.querySelector("header");
    if (!header) return;

    const pos = getComputedStyle(header).position;
    const isOverlay = ["fixed", "sticky", "absolute"].includes(pos);
    const height = header.offsetHeight;

    document.documentElement.style.setProperty(
      "--header-height",
      isOverlay ? `${height}px` : "0px"
    );
  };

  useEffect(() => {
    // Update on mount, route change, and resize
    updateHeaderHeight();

    const handleResize = () => {
      // Use rAF to batch DOM reads
      requestAnimationFrame(updateHeaderHeight);
    };

    window.addEventListener("resize", handleResize);

    // Also update after images/fonts load (common cause of height change)
    const observer = new MutationObserver(() => {
      requestAnimationFrame(updateHeaderHeight);
    });
    observer.observe(document.querySelector("header"), {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [pathname]); // Re-run on route change

  // Scroll logic (same as before, but simplified)
  useEffect(() => {
    const scrollNow = () => {
      const header = document.querySelector("header");
      const isOverlay = header && ["fixed", "sticky", "absolute"].includes(
        getComputedStyle(header).position
      );
      const headerHeight = header?.offsetHeight || 0;

      const scrollTo = (y) => {
        window.scrollTo({ top: Math.max(0, y), behavior });
      };

      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        let attempts = 0;
        const maxAttempts = 30;

        const tryScroll = () => {
          const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
          if (el) {
            const rect = el.getBoundingClientRect();
            scrollTo(window.scrollY + rect.top - (isOverlay ? headerHeight : 0));
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryScroll, 50);
          } else {
            scrollTo(0);
          }
        };
        setTimeout(tryScroll, 0);
      } else {
        // Scroll to top immediately
        scrollTo(isOverlay ? headerHeight : 0);
      }
    };

    requestAnimationFrame(scrollNow);
  }, [pathname, hash, behavior]);

  return null;
}