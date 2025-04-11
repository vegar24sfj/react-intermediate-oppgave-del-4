import React from "react";

const Hero = ({ scrollToSection }) => {
  const handleScrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center mt-[var(--header-height)] px-4"
      style={{
        backgroundImage: "url('/assets/hero-bg.jpg')",
      }}
    >
      <div className="text-center sm:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(text--secondary)] mb-4 sm:mb-6 tracking-tight">
          Hi, I'm a Frontend Developer
        </h1>
        <p className="text-xl sm:text-2xl lg:text-2xl text-[var(text--primary)] mb-4 sm:mb-6">
          Passionate about 3D design, web development, and creating interactive
          user experiences.
        </p>
        <button
          onClick={handleScrollToContact}
          className="inline-block bg-[var(--primary)] text-white text-lg sm:text-2xl font-semibold py-3 px-6 sm:px-8 rounded-4xl hover:bg-[var(--secondary)] focus:outline-none transition duration-300"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
