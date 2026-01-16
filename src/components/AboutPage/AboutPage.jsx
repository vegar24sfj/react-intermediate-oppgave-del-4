import React from "react";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="px-4 pt-20 pb-0 md:px-12 scroll-mt-[76px]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-14 text-center text-[var(--text-primary)] relative font-helvetica">
          About Me
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="text-body font-helvetica text-[var(--text-primary)] leading-[1.7]">
            <p className="mb-5">
              Hello! I’m a frontend developer with a strong interest in 3D design and interactive web experiences.
            </p>
            <p className="mb-5">
              I enjoy building visually engaging, user-friendly interfaces using technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p>
              I’m always exploring new tools and techniques to push the boundaries of modern web design.
            </p>
          </div>

          <div className="p-6 text-left border border-gray-200 bg-gray-50 rounded-xl font-helvetica">
            <ul className="space-y-4 text-[var(--text-primary)]">
              <li><span className="font-medium">Location:</span> Norway</li>
              <li><span className="font-medium">Focus:</span> Frontend & 3D</li>
              <li><span className="font-medium">Tech:</span> React, JavaScript, Three.js</li>
              <li><span className="font-medium">Interests:</span> UI, animation, 3D modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
