import React from "react";
import { MENU_LIST } from "./menu_data"; // For eksempel: Header/menu_data.js
import NavItem from "./NavItem";

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col items-center justify-end w-full h-full p-0 pr-12 m-0 space-x-8 space-y-4 md:flex-row md:space-x-8 md:space-y-0 md:pr-20">
        {MENU_LIST.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            onClick={() => scrollToSection(item.text.toLowerCase())}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
