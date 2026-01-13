import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-6"
      style={{ boxShadow: "var(--box-shadow)" }}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">&copy; 2025 Vegar Ravndal</p>
      </div>
    </footer>
  );
};

export default Footer;
