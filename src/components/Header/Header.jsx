import React, { useState, forwardRef } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = forwardRef(({ scrollToSection }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 w-full bg-white text-[var(--text-primary)] shadow-md z-50"
    >
      <div className="flex items-center justify-between w-full h-full p-4 mx-auto lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center">
            <img src="/assets/logo.jpg" alt="Logo" className="w-auto h-10" />
            <h1 className="ml-2 text-xl font-bold md:block">vegarravndal</h1>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="justify-center flex-grow hidden my-2 md:flex">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        {/* Mobile menu */}
        <div className="flex items-center md:hidden">
          <HamburgerBar
            scrollToSection={scrollToSection}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center py-4 bg-white shadow-lg md:hidden">
          <NavBar scrollToSection={scrollToSection} />
        </div>
      )}
    </header>
  );
});

export default Header;
