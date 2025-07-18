import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-yellow-50 text-center py-16 px-4 md:px-32"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary)] relative">
          My Projects
          {/* Thick underline */}
          <span className="absolute bottom-[-10px] left-0 right-0 mx-auto w-24 h-[5px] bg-[var(--primary)]"></span>
        </h2>
        <p className="text-lg md:text-2xl mb-8 text-[var(--text-primary)]">
          Check out some of my work on my ArtStation portfolio and Web Store!
        </p>

        {/* Button container with flex layout for horizontal space */}
        <div className="flex justify-center gap-6">
          {/* Link to ArtStation */}
          <a
            href="https://www.artstation.com/vegarravndal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--primary)] text-white text-lg md:text-2xl py-3 px-8 rounded-4xl hover:bg-[var(--secondary)] focus:outline-none transition duration-300">
              View My ArtStation Portfolio
            </button>
          </a>

          {/* Link to Web Store */}
          <a
            href="https://my-webstore-sigma.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--primary)] text-white text-lg md:text-2xl py-3 px-8 rounded-4xl hover:bg-[var(--secondary)] focus:outline-none transition duration-300">
              Visit My Web Store
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
