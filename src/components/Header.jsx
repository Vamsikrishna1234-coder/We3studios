import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const location = useLocation();

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AboutUs", path: "/AboutUs" },
    {
      name: "Services",
      path: "/Services",
      dropdown: [
        { name: "Interior Designs", path: "/services/interior-design" },
        { name: "Exterior Design", path: "/services/exterior-design" },
        {
          name: "3D Visualization & Rendering",
          path: "/services/visualization-rendering",
        },
        {
          name: "Motion Graphics & Animations",
          path: "/services/motion-graphics",
        },
        { name: "2D Plans & Working Drawings", path: "/services/working-drawings" },
      ],
    },
    { name: "Portfolio", path: "/Portfolio" },
    { name: "ContactUs", path: "/ContactUs" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black text-white py-4 sm:py-5">
       <div className="w-full">
         <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-8">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-xl sm:text-2xl font-bold !no-underline"
            >
              WE3STUDIOS
            </Link>
          </div>

          {/* Center - Navbar (Desktop Only) */}
          {/* ✅ Changed from md:flex → lg:flex so tablet uses mobile view */}
          <div className="hidden lg:flex justify-center flex-1">
            <div className="flex items-center gap-6 md:gap-8 border border-gray-100 rounded-2xl bg-gray-800/20 px-6 py-2">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center text-white text-base sm:text-lg px-3 sm:px-4 py-2 rounded transition-colors duration-200 !no-underline border-4 ${
                        isServicesOpen
                          ? "bg-yellow-400 bg-opacity-80 border-yellow-400"
                          : "border-transparent hover:bg-yellow-300 hover:bg-opacity-80 hover:border-yellow-300"
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon
                        className="h-5 w-5 ml-1"
                        aria-hidden="true"
                      />
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-200 ${
                        isServicesOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {item.dropdown.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-3 text-sm text-gray-900 font-semibold hover:text-yellow-400 hover:bg-yellow-400 transition-colors duration-200 !no-underline"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-white text-base sm:text-lg px-3 sm:px-4 py-2 rounded hover:bg-yellow-400 hover:bg-opacity-80 transition-colors duration-200 !no-underline"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right - Reach Us Button (Desktop Only) */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              to="/ContactUs"
              className="bg-yellow-400 bg-opacity-80 hover:bg-yellow-400 text-black font-semibold text-sm sm:text-base py-2 sm:py-2.5 px-5 rounded-lg transition-transform duration-300 hover:scale-105 inline-block !no-underline"
            >
              Reach Us
            </Link>
          </div>

          {/* ✅ Mobile + Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-yellow-400 hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* ✅ Mobile + Tablet Dropdown */}
        {isOpen && (
          <div
            className="lg:hidden bg-gray-900 px-2 sm:px-4 pt-2 pb-4 border-t border-gray-700 
            transition-all duration-300 ease-in-out"
          >
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="mb-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between w-full text-left text-white 
                      text-base sm:text-lg px-3 sm:px-4 py-2 rounded transition-all duration-200 
                      border-2 ${
                        isServicesOpen
                          ? "bg-yellow-400 bg-opacity-80 border-yellow-400"
                          : "border-transparent hover:bg-yellow-400 hover:bg-opacity-80"
                      }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 ml-1 transform transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 bg-white text-black rounded-lg shadow-lg border border-gray-200 !no-underline">
                      {item.dropdown.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-white transition-all duration-200 !no-underline"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-white text-base sm:text-lg px-3 sm:px-4 py-2 rounded 
                  transition-all duration-200 hover:bg-yellow-400 hover:bg-opacity-80 !no-underline 
                  ${
                    location.pathname === item.path
                      ? "bg-yellow-400 bg-opacity-80"
                      : "border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        
        )}
        </div>
      </header>

      {/* Spacer to prevent overlap */}
        <div className="h-[70px] sm:h-[84px] md:h-[88px] lg:h-[92px]"></div>
    </>
  );
}

export default Header;
