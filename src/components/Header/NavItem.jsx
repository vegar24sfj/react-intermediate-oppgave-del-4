import React from "react";

const NavItem = ({ text, onClick }) => {
  return (
    <li className="nav-item list-none">
      <button
        onClick={onClick} // Trigger scroll when clicked
        className={`text-xl px-0 py-2 transition-all duration-300 
          ${text === "Contact"
            ? "bg-none md:bg-[var(--primary)] text-[var(--text-primary)] md:text-white md:px-6 rounded-4xl hover:bg-[var(--accent)] ml-0 md:ml-10"
            : "text-[var(--text-secondary)] hover:underline"}
        `}
        aria-label={`Navigate to ${text}`} // Adding an aria-label for accessibility
      >
        {text}
      </button>
    </li>
  );
};

export default NavItem;
