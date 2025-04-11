import React from "react";
import { MENU_LIST } from "../../data/menu_data";
import NavItem from "./NavItem";

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="w-full">
      <ul className="flex md:flex-row flex-col space-x-8 md:space-x-8 space-y-4 md:space-y-0 w-full justify-end items-center h-full m-0 p-0 pr-12 md:pr-20">
        {/* Dynamically render NavItems using MENU_LIST */}
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
