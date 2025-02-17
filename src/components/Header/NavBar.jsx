import React from "react";
import { MENU_LIST } from "../../data/menu_data"; // Import MENU_LIST from data
import NavItem from "./NavItem"; // Import NavItem component

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-12">
        {/* Dynamically render NavItems using MENU_LIST */}
        {MENU_LIST.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            onClick={() => scrollToSection(item.text.toLowerCase())} // Scroll to the section
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
