interface CardProps {
  title: string;
  description: string;
  children: JSX.Element;
  url: string;
  altImage: string;
  gitHubUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  url,
  altImage,
  gitHubUrl,
}) => {
  return (
    <div className="card">
      <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
        <img src={url} alt={altImage} className="card__image" />
      </a>
      <h3 className="card__card-title">{title}</h3>
      <p className="card__description">{description}</p>
      {children}
    </div>
  );
};

export { Card };
