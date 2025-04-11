import React from "react";
import SkillIcon from "./SkillIcon";
import skillsData from "../../data/Skills.json";

const SkillSection = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto text-center relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary)] relative">
          My Skills
          {/* Thick underline similar to Projects */}
          <span className="absolute bottom-[-10px] left-0 right-0 mx-auto w-24 h-[5px] bg-[var(--primary)]"></span>
        </h2>
        <p className="text-lg md:text-2xl mb-8 text-[var(--text-primary)]">
          Here is a list of the technologies and skills I master:
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((skill, index) => (
            <SkillIcon
              key={index}
              icon={skill.icon}
              skillName={skill.skillName}
              tooltip={skill.tooltip}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
