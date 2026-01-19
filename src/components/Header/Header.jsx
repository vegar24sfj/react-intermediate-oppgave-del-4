import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white text-[var(--text-primary)] z-[100] shadow-md"
    >
      <div className="flex items-center justify-between w-full h-16 px-4 lg:px-12">
        {/* Desktop menu */}
        <div className="justify-center flex-grow hidden md:flex">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center md:hidden">
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
