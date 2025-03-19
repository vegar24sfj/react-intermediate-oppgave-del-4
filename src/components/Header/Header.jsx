import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-[var(--text-primary)] shadow-[0_4px_24px_1px_rgba(0,0,0,0.1)] z-10">
      <div className="w-full mx-auto py-4 px-4 lg:px-12 flex justify-between items-center h-full m-0 p-0"> {/* Ensure this div stretches full width */}
        {/* Logo Container */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              className="h-10 w-auto transform scale-100"
            />
            {/* Keep the text visible on mobile */}
            <h1 className="text-xl font-bold ml-4 md:block">vegarravndal</h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center mt-4">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center ml-auto">
          <HamburgerBar
            scrollToSection={scrollToSection}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        </div>
      </div>

      {/* Mobile menu (conditionally rendered based on `menuOpen`) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg py-4">
          <NavBar scrollToSection={scrollToSection} />
        </div>
      )}
    </header>
  );
};

export default Header;
