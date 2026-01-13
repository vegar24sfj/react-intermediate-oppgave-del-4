import React from "react";
import { MENU_LIST } from "../../data/menu_data";
import NavItem from "./NavItem";

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col items-center justify-end w-full h-full space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        {MENU_LIST.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            isPrimary={item.text.toLowerCase() === "contact"}
            onClick={() => scrollToSection(item.text.toLowerCase())}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
