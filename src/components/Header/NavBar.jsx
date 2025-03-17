import React from "react";
import { MENU_LIST } from "../../data/menu_data";
import NavItem from "./NavItem";

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="hidden md:flex w-full">
      <ul className="flex space-x-8 w-full justify-center">
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
