interface ButtonProps {
  langs: string[];
}

const Badge: React.FC<ButtonProps> = ({ langs }) => {
  return (
    <>
      {langs.map((lang, i) => (
        <span key={i} className="badge">
          {lang}
        </span>
      ))}
    </>
  );
};

export { Badge };
