import React from "react";

const NavItem = ({ text, onClick }) => {
  return (
    <li className="nav-item list-none">
      <button
        onClick={onClick} // Trigger scroll when clicked
        className={`text-xl ${
          text === "Contact"
            ? "bg-none md:bg-[var(--primary)] text-[var(text-primary)] md:text-white px-0 md:px-6 py-2 rounded-4xl hover:bg-[var(--accent)] transition ml-0 md:ml-10"
            : "text-[var(--text-secondary)] hover:underline py-2"
        }`}
      >
        {text}
      </button>
    </li>
  );
};

export default NavItem;
