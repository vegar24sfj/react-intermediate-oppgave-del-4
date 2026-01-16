import React, { useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MENU_LIST } from "./menu_data";
import NavItem from "./NavItem";

const HamburgerBar = ({ scrollToSection, toggleMenu, menuOpen }) => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuOpen) return;

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, toggleMenu]);

  const handleMenuItemClick = (section) => {
    toggleMenu();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(section);
      });
    });
  };

  return (
    <div className="relative flex items-center justify-center md:hidden">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex items-center justify-center"
      >
        <GiHamburgerMenu className="h-10 w-10 text-[var(--text-primary)]" />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed left-0 right-0 top-[64px] z-50 w-full p-6 bg-white shadow-lg md:hidden"
        >
          <button onClick={toggleMenu} className="absolute right-4 top-4">
            <IoCloseSharp className="h-10 w-10 text-[var(--text-primary)]" />
          </button>

          <nav className="flex flex-col gap-6 mt-12">
            {MENU_LIST.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                onClick={() =>
                  handleMenuItemClick(item.text.toLowerCase())
                }
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerBar;
