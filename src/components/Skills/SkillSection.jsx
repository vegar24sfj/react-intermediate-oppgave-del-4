import React from "react";
import skillsData from "../../data/Skills.json"; // Pass på at stien stemmer

const SkillSection = () => {
  return (
    <section id="skills" className="px-4 py-20 md:px-12 scroll-mt-[76px]">
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
          My Skills
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <p className="text-body font-helvetica mb-12 text-[var(--text-primary)] leading-[1.6]">
          Here are some of the technologies I use regularly:
        </p>

        {/* Grid of skill icons */}
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 justify-items-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-110"
              title={skill.tooltip || skill.skillName}
            >
              <img
                src={skill.icon}
                alt={skill.skillName}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm text-[var(--text-primary)]">
                {skill.skillName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
