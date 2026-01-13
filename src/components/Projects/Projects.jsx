import React from "react";

// Prosjekter-data med lokale bilder
const projectsData = [
  {
    title: "ArtStation Portfolio",
    url: "https://www.artstation.com/vegarravndal",
    image: "/assets/artstation-preview.png", // lokalt bilde i public/assets
    description: "3D art and interactive experiences.",
  },
  {
    title: "Web Store",
    url: "https://my-webstore-sigma.vercel.app",
    image: "/assets/webstore-preview.png", // lokalt bilde i public/assets
    description: "E-commerce store built with React and Tailwind.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20 bg-white md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="
          text-2xl md:text-3xl
          font-medium
          mb-10
          text-[var(--text-primary)]
          relative
          font-helvetica
        ">
          My Projects
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <p className="text-body font-helvetica mb-12 text-[var(--text-primary)] leading-[1.6]">
          Check out some of my work!
        </p>

        {/* Grid of projects */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden transition-shadow border group rounded-xl hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 text-left">
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-[var(--text-primary)]">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
