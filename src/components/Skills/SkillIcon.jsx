import React from "react";

const SkillIcon = ({ icon, skillName, tooltip }) => {
  return (
    <div
      className="text-center flex flex-col items-center justify-center"
      title={tooltip}
    >
      <img src={icon} alt={skillName} className="w-8 h-8 mb-2" />
      <p className="text-lg md:text-2xl">{skillName}</p>
    </div>
  );
};

export default SkillIcon;
