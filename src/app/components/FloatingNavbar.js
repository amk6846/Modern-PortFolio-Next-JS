"use client";

import React, { useState, useEffect } from "react";

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else if (currentScrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <main>
      {/* Navbar container */}
      <div
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ width: "100%", overflowX: "hidden" }}
      >
        {/* Navbar */}
        <ul className="max-w-3xl rounded-full flex items-center justify-center bg-gray-900 text-white text-sm md:text-base px-4">
          <li
            className="p-2 md:p-4 cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick("about")}
          >
            About
          </li>
          <li
            className="p-2 md:p-4 cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick("projects")}
          >
            Projects
          </li>
          <li
            className="p-2 md:p-4 cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick("testimonials")}
          >
            Testimonials
          </li>
          <li
            className="p-2 md:p-4 cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick("work")}
          >
            Work
          </li>
          <li
            className="p-2 md:p-4 cursor-pointer hover:text-neutral-500"
            onClick={() => handleClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </main>
  );
};

export default FloatingNavbar;
