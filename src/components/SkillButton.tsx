type PropsButton = {
  children: string | string[];
  onClick: () => void;
};

const SkillButton: React.FC<PropsButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="skill_button">
      {children}
    </button>
  );
};

export { SkillButton };
