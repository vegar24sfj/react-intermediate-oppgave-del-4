import React, { useState } from "react";
import NavBar from "./NavBar"; // Import NavBar component
import HamburgerBar from "./HamburgerBar"; // Import HamburgerBar component

const Header = ({ scrollToSection }) => {
  // State to manage whether the mobile menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-[var(--text-primary)] shadow-[0_4px_24px_1px_rgba(0,0,0,0.1)] z-10">
      <div className="container mx-auto py-4 px-6 md:px-20 flex justify-between items-center">
        {/* Logo Container */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            {/* Logo Image (Scale the image only) */}

            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              className="h-10 w-auto transform scale-100"
            />

            {/* Text "vegarravndal" */}
            <h1 className="text-xl font-bold ml-4">vegarravndal</h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <NavBar scrollToSection={scrollToSection} />

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center ml-auto">
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
