import { SiNetlify } from "react-icons/si";
import "./Card.css";

interface Props {
  title: string;
  url: string;
  badge: string[];
  github: string;
}

const Card: React.FC<Props> = ({ title, url, badge, github }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt={title} />
        <div className="card-overview">
          <a href={github} target="_blank" rel="noreferrer">
            <SiNetlify />
          </a>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-info">
        {badge.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
