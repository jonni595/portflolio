import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../../assets/avatar.png";
import "./Avatar.css";

const Avatar = () => {
  const [text] = useTypewriter({
    words: ["Frontend", "Freelancer", "Developer"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  return (
    <div className="avatar">
      <div className="avatar-image">
        <img src={logo} alt="avatar" />
      </div>
      <div className="avatar-profile">
        <h1 className="avatar-name">Jonathan D.</h1>
        <p className="avatar-job">
          I'm <span className="avatar-job-text">{text}</span> <Cursor />
        </p>
        <div className="avatar-social">
          <a className="button" href="#">
            Github
          </a>
          <a className="button" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
