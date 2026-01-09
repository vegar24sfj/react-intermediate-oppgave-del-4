import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-12">
      <div className="container mx-auto text-center relative">
        <h2 className="text-2xl md:text-3xl font-medium mb-10 text-[var(--text-primary)] text-center relative font-helvetica">
          My Projects
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <p className="text-body font-helvetica mb-8 text-[var(--text-primary)] leading-[1.6]">
          Check out some of my work on my ArtStation portfolio and Web Store!
        </p>

        {/* Button container with flex layout */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* ArtStation */}
          <a
            href="https://www.artstation.com/vegarravndal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--primary)] text-white text-body py-3 px-8 rounded-4xl hover:bg-[var(--secondary)] focus:outline-none transition duration-300 font-helvetica">
              View My ArtStation Portfolio
            </button>
          </a>

          {/* Web Store */}
          <a
            href="https://my-webstore-sigma.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--primary)] text-white text-body py-3 px-8 rounded-4xl hover:bg-[var(--secondary)] focus:outline-none transition duration-300 font-helvetica">
              Visit My Web Store
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
