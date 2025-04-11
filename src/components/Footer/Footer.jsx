import React from "react";
import { MENU_LIST } from "../../data/menu_data"; // Adjust path if necessary

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-6 shadow-[0_-4px_24px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          {MENU_LIST.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.text.toLowerCase())} // Using scrollToSection for smooth scrolling
              className="hover:text-[var(--primary)] transition-colors duration-200"
            >
              {item.text}
            </button>
          ))}
        </div>
        <p className="text-[var(--text-primary)] text-sm sm:text-base">
          &copy; 2025 Vegar Ravndal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
