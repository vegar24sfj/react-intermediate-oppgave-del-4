import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-32 bg-[var(--bg-primary)]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary)] text-center">
        About Me
      </h2>

      <div className="text-left max-w-2xl mx-auto text-lg md:text-2xl mb-0 text-[var(--text-primary)]">
        <p className="mb-8">
          Hello! I’m a frontend developer with a passion for 3D design and web
          development. I specialize in creating visually stunning, user-friendly
          websites and immersive 3D experiences.
        </p>

        <p className="mb-8">
          My skills include HTML, CSS, JavaScript, and working with libraries
          such as React. I’m always learning and experimenting with new
          techniques to push the boundaries of web design and interactive
          experiences.
        </p>

        <p>In my free time, I enjoy exploring 3D modeling and animation.</p>
      </div>
    </section>
  );
};

export default AboutPage;
