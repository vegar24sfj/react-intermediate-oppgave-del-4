import React from "react";

const NavItem = ({ text, onClick }) => {
  return (
    <li className="nav-item list-none">
      <button
        onClick={onClick}
        className={`text-xl px-0 py-2 transition-all duration-300 
          ${text === "Contact"
            ? "text-black bg-white border border-black px-6 py-2 rounded-4xl hover:bg-gray-100 ml-0 md:ml-10"
            : "text-[var(--text-secondary)] hover:underline"}
        `}
        aria-label={`Navigate to ${text}`}
      >
        {text}
      </button>
    </li>
  );
};

export default NavItem;
