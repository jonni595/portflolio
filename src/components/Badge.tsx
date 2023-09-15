interface ButtonProps {
  lang1: string;
  lang2: string;
  lang3: string;
}

const Badge: React.FC<ButtonProps> = ({ lang1, lang2, lang3 }) => {
  return (
    <>
      <span className="badge">{lang1}</span>
      <span className="badge">{lang2}</span>
      <span className="badge">{lang3}</span>
    </>
  );
};

export { Badge };
