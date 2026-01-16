import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white text-[var(--text-primary)] z-10"
      style={{ boxShadow: "var(--box-shadow)" }}
    >
      <div className="flex items-center justify-between w-full h-full p-0 px-4 py-4 m-0 mx-auto lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              className="w-auto h-10 transform scale-100"
            />
            <h1 className="ml-4 text-xl font-bold md:block">vegarravndal</h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="justify-center flex-grow hidden my-2 md:flex">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center ml-auto md:hidden">
          <HamburgerBar
            scrollToSection={scrollToSection}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        </div>
      </div>

    </header>
  );
};

export default Header;
