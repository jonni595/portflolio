import { v4 as uuidv4 } from "uuid";

interface ButtonProps {
  langs: string[];
}

const Badge: React.FC<ButtonProps> = ({ langs }) => {
  return (
    <>
      {langs.map((lang) => (
        <span key={uuidv4()} className="badge">
          {lang}
        </span>
      ))}
    </>
  );
};

export { Badge };
