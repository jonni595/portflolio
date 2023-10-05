import { SkillButton } from ".";
import useShowState from "../hooks/useShowState";

type PropsCard = {
  title: string;
  description: string;
  url: string;
  alt: string;
};

const SkillsCard: React.FC<PropsCard> = ({ title, description, url, alt }) => {
  const {hidden, showMore} = useShowState();

  return (
    <div className="skill_card">
      <img src={url} alt={alt} />
      <h2 className="skill__title">{title}</h2>
      <SkillButton onClick={showMore}>
        {hidden ? "Hide" : "Show"} Details
      </SkillButton>
      {hidden && <p className="skill__description">{description}</p>}
    </div>
  );
};

export { SkillsCard };
