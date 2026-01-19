import React from "react";

// Prosjekter-data med tech-tags
const projectsData = [
  {
    title: "ArtStation Portfolio",
    url: "https://www.artstation.com/vegarravndal",
    description: "3D art and interactive experiences.",
    tech: ["3D", "ArtStation", "Blender"],
  },
  {
    title: "Web Store",
    url: "https://my-webstore-sigma.vercel.app",
    description: "E-commerce store built with React and Tailwind.",
    tech: ["React", "Tailwind", "Vercel"],
  },
];

const Projects = ({ headerHeight = 64 }) => {
  return (
    <section
      id="projects"
      className="px-4 pt-20 pb-0 md:px-12"
      style={{
        scrollMarginTop: headerHeight, // Viktig: scroll stopper under header
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="
            text-2xl md:text-3xl
            font-medium
            mb-10
            text-[var(--text-primary)]
            relative
            font-helvetica
          "
        >
          My Projects
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <p className="text-body font-helvetica mb-12 text-[var(--text-primary)] leading-[1.6]">
          Check out some of my work!
        </p>

        {/* Grid of projects */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="
                group
                border rounded-xl p-6 text-left
                bg-gradient-to-br from-[var(--primary)/10] to-transparent
                hover:from-[var(--primary)/20]
                transition
                hover:shadow-lg
                flex flex-col justify-between
                h-full
              "
            >
              <div className="flex-grow">
                <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-[var(--text-primary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2 py-1 text-xs rounded
                        bg-[var(--primary)/15]
                        text-[var(--text-primary)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 w-full inline-block text-center text-sm font-semibold
                  px-4 py-2 rounded-full border-2 border-[var(--primary)]
                  text-[var(--primary)]
                  transition-colors duration-300
                  hover:bg-[var(--primary)] hover:text-white
                "
              >
                View →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
