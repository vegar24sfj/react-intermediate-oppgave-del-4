import React, { useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MENU_LIST } from "../../data/menu_data";
import NavItem from "./NavItem";

const HamburgerBar = ({ scrollToSection, toggleMenu, menuOpen, headerHeight }) => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, toggleMenu]);

  const handleMenuItemClick = (section) => {
    scrollToSection(section);
    toggleMenu();
  };

  return (
    <div className="flex items-center md:hidden">
      <button ref={buttonRef} onClick={toggleMenu} className="flex items-center">
        <GiHamburgerMenu className="h-10 w-10 text-[var(--text-primary)]" />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 z-50 w-full transition-transform duration-300 bg-white"
          style={{ top: `${headerHeight}px` }}
        >
          <button onClick={toggleMenu}>
            <IoCloseSharp className="h-10 w-10 absolute right-4 top-6 text-[var(--text-primary)]" />
          </button>

          <nav className="flex flex-col gap-6 p-6 pt-16">
            {MENU_LIST.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                isPrimary={item.text.toLowerCase() === "contact"}
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
