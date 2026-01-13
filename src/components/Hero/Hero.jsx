import React from "react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      className="
        relative w-full
        h-[45vh] sm:h-[55vh] lg:h-[60vh]
        flex items-center justify-center
        mt-[var(--header-height)]
        px-4
      "
      style={{
        background: "linear-gradient(to bottom, #f0f9ff, #e0e7ff)",
      }}
    >
      <div className="max-w-3xl text-center">
        <h1 className="
          text-4xl sm:text-5xl lg:text-6xl
          font-extrabold
          text-[var(--text-secondary)]
          mb-3 sm:mb-4
          tracking-tight
          leading-tight
        ">
          Hi, I'm a Frontend Developer
        </h1>

        <p className="
          text-lg sm:text-xl
          text-[var(--text-primary)]
          mb-5
        ">
          Passionate about 3D design, web development, and creating interactive
          user experiences.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="
            relative inline-block
            px-6 py-2.5
            text-lg font-semibold
            text-[var(--primary)]
            border-2 border-[var(--primary)]
            rounded-4xl
            transition-all duration-300
            hover:bg-[var(--primary)] hover:text-white
          "
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

// Viktig! Eksporter komponenten
export default Hero;
