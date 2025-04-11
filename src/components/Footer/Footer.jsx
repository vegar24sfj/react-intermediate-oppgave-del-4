import React from "react";
import { MENU_LIST } from "../../data/menu_data"; // Juster path om nødvendig

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-6 shadow-[0_-4px_24px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          {MENU_LIST.map((item, index) => (
            <a
              key={index}
              href={`#${item.text.toLowerCase()}`}
              className="hover:text-[var(--primary)] transition-colors duration-200"
            >
              {item.text}
            </a>
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
