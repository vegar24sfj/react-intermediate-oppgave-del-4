import React from "react";
import SkillIcon from "./SkillIcon";
import skillsData from "../../data/Skills.json";

const SkillSection = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-12">
      <div className="container mx-auto text-center relative">
        <h2 className="text-2xl md:text-3xl font-medium mb-10 text-[var(--text-primary)] text-center relative font-helvetica">
          My Skills
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <p className="text-body font-helvetica mb-8 text-[var(--text-primary)] leading-[1.6]">
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
