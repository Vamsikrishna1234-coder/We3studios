// CTAButton.jsx
import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ to = "/ContactUs", text = "Get a Quote" }) => {
  return (
    <section className="mt-12 text-center">
      <Link
        to={to}
        className="inline-block bg-yellow-400 text-white font-semibold text-lg py-3 px-8 rounded-lg transition-all duration-300 !no-underline"
      >
        {text}
      </Link>
    </section>
  );
};

export default CTAButton;
