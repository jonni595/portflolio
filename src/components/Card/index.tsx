import "./Card.css";

interface Props {
  title?: string;
  url: string;
  badge: string[];
  github?: string;
}

const Card: React.FC<Props> = ({ title, url, badge }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt={title} />
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
