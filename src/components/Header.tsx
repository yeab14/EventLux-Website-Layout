import React, { useState } from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-4xl font-extrabold text-green-500 mb-4">
          EventLux
        </h3>

        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div
            className={`w-6 h-0.5 bg-green-500 mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-green-500 mb-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-green-500 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex space-x-6 text-lg transition-all duration-300 ease-in-out`}
        >
          {[
            "Home",
            "About Us",
            "Services",
            "Packages",
            "Gallery",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              to={`${item.toLowerCase().replace(/\s+/g, "")}Section`}
              smooth={true}
              duration={700}
              offset={-80}
              className="cursor-pointer hover:text-green-500 active:text-green-600 transition-all duration-300 ease-in-out relative"
              onClick={() => setMenuOpen(false)}
            >
              {item}

              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 opacity-0 transition-all duration-300 transform scale-x-0 hover:opacity-100 hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        <button className="hidden lg:block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-transform transform hover:scale-105">
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
