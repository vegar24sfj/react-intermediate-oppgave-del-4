import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MENU_LIST } from "./menu_data"; // Samme data som NavBar
import NavItem from "./NavItem";

const HamburgerBar = ({ scrollToSection, toggleMenu, menuOpen }) => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggleMenu]);

  const handleMenuItemClick = (section) => {
    scrollToSection(section); // Scroll to section
    toggleMenu(); // Close menu
  };

  return (
    <div className="relative flex items-center justify-center md:hidden">
      {/* Hamburger icon */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex items-center justify-center"
      >
        <GiHamburgerMenu className="h-10 w-10 text-[var(--text-primary)]" />
      </button>

      {/* Menu when open */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 z-50 w-full p-6 bg-white shadow-lg top-full"
        >
          {/* Close icon */}
          <button onClick={toggleMenu} className="absolute right-4 top-4">
            <IoCloseSharp className="h-10 w-10 text-[var(--text-primary)]" />
          </button>

          {/* Menu items */}
          <nav className="flex flex-col gap-6 mt-12">
            {MENU_LIST.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                onClick={() => handleMenuItemClick(item.text.toLowerCase())}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerBar;
