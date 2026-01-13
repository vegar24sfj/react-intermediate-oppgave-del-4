import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Dynamisk header height
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) setHeaderHeight(header.offsetHeight);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-[var(--text-primary)] shadow-[0_4px_24px_1px_rgba(0,0,0,0.1)] z-10">
      <div className="flex items-center justify-between w-full h-full px-4 py-4 mx-auto lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              className="w-auto h-10"
            />
            <h1 className="ml-4 text-xl font-bold md:block">vegarravndal</h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="justify-center flex-grow hidden my-2 md:flex">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center ml-auto md:hidden">
          <HamburgerBar
            scrollToSection={scrollToSection}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
            headerHeight={headerHeight}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
