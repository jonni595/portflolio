import logo from "../../assets/avatar.png";
import "./Avatar.css";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="avatar-image">
        <img src={logo} alt="avatar" />
      </div>
      <div className="avatar-profile">
        <h1>Jonathan Dajome</h1>
        <p>Frontend Developer</p>
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
