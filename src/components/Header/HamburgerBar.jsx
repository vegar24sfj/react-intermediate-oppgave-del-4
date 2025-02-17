import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MENU_LIST } from "../../data/menu_data"; // Import MENU_LIST from data
import NavItem from "./NavItem"; // Import NavItem component

const HamburgerBar = ({ scrollToSection, toggleMenu, menuOpen }) => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Update header height dynamically
  useEffect(() => {
    const header = document.querySelector("header"); // Assuming your header has the <header> tag
    if (header) {
      setHeaderHeight(header.offsetHeight); // Set header height dynamically
    }
  }, []);

  // Close the menu if clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleMenu(); // Close the menu if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);

  const handleMenuItemClick = (section) => {
    scrollToSection(section); // Scroll to the section
    toggleMenu(); // Close the hamburger menu
  };

  return (
    <div className="md:hidden flex justify-center items-center">
      {/* Hamburger icon to open menu */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex justify-center items-center"
      >
        <GiHamburgerMenu className="h-10 w-10 text-[var(--text-primary)]" />
      </button>

      {/* Mobile menu content when menu is open */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 bg-white p-6 w-full z-50"
          style={{ top: "90px" }}
        >
          {/* Close icon for the menu */}
          <button onClick={toggleMenu}>
            <IoCloseSharp className="h-10 w-10 absolute right-4 top-6 text-[var(--text-primary)]" />
          </button>

          {/* Nav items list */}
          <nav className="flex flex-col gap-8 justify-center items-start h-full">
            {MENU_LIST.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                onClick={() => handleMenuItemClick(item.text.toLowerCase())} // Scroll and close the menu
                className={
                  item.text.toLowerCase() === "contact"
                    ? "text-[var(--primary-blue)]"
                    : "text-[var(--text-primary)]"
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
