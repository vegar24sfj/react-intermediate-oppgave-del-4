import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-12">
      <div className="container mx-auto text-center relative">
        <h2 className="text-2xl md:text-3xl font-medium mb-10 text-[var(--text-primary)] relative font-helvetica">
          About Me
          {/* Thin underline like My Skills */}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <div className="text-left max-w-2xl mx-auto text-body font-helvetica text-[var(--text-primary)] leading-[1.7]">
          <p className="mb-6">
            Hello! I’m a frontend developer with a passion for 3D design and web
            development. I specialize in creating visually stunning, user-friendly
            websites and immersive 3D experiences.
          </p>

          <p className="mb-6">
            My skills include HTML, CSS, JavaScript, and working with libraries
            such as React. I’m always learning and experimenting with new
            techniques to push the boundaries of web design and interactive
            experiences.
          </p>

          <p>
            In my free time, I enjoy exploring 3D modeling and animation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
