import React from "react";

const SkillIcon = ({ icon, skillName, tooltip }) => {
  return (
    <div
      className="inline-flex items-center justify-center"
      title={tooltip || skillName}
    >
      <img
        src={icon}
        alt={skillName}
        className="w-12 h-12" // 🔹 Større ikoner
      />
    </div>
  );
};

export default SkillIcon;
