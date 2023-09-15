interface CardProps {
  title: string;
  description: string;
  children: JSX.Element;
  url: string;
  altImage: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  url,
  altImage,
}) => {
  return (
    <div className="card">
      <img src={url} alt={altImage} className="card__image" />
      <h3 className="card__card-title">{title}</h3>
      <p className="card__description">{description}</p>
      {children}
    </div>
  );
};

export { Card };
