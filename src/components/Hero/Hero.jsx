import React from "react";

const Hero = ({ scrollToSection }) => {
  const handleScrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center mt-[var(--header-height)] px-4"
      style={{
        background: "linear-gradient(to bottom, #f0f9ff, #e0e7ff)", // veldig lys blå
      }}
    >
      <div className="text-center sm:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-secondary)] mb-4 sm:mb-6 tracking-tight">
          Hi, I'm a Frontend Developer
        </h1>
        <p className="text-xl sm:text-2xl lg:text-2xl text-[var(--text-primary)] mb-6">
          Passionate about 3D design, web development, and creating interactive
          user experiences.
        </p>

        <button
          onClick={handleScrollToContact}
          className="
            relative inline-block px-6 sm:px-8 py-3 text-lg sm:text-2xl font-semibold 
            text-[var(--primary)] bg-transparent border-2 border-dashed border-[var(--primary)] 
            rounded-4xl transition-all duration-300
            hover:text-white hover:bg-[var(--primary)] hover:border-solid
            focus:outline-none
          "
        >
          Get in Touch
          {/* Optional hover effect underline */}
          <span className="absolute inset-0 rounded-4xl opacity-0 hover:opacity-10 bg-[var(--secondary)] transition-opacity duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
