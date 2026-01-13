import React from "react";

const NavItem = ({ text, onClick, isPrimary = false }) => {
  return (
    <li className="list-none">
      <button
        onClick={onClick}
        aria-label={`Navigate to ${text}`}
        className={`text-menu font-helvetica transition-all duration-300 ${
          isPrimary
            ? "text-black bg-white border border-gray-500 px-6 py-2 rounded-4xl hover:bg-gray-100"
            : "text-[var(--text-secondary)] hover:underline px-0 py-2"
        }`}
      >
        {text}
      </button>
    </li>
  );
};

export default NavItem;
