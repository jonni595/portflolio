import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__container-icons">
          <a
            className="tooltip"
            href="https://twitter.com/JonathanDajome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon-styles" />
            <span className="tooltip-box1">
              @JonathanDajome
            </span>
          </a>
          <a
            className="tooltip"
            href="https://www.linkedin.com/in/jonathan-dajome-rodriguez-7801b21b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon-styles" />
            {/* <span className='tooltip-box2' >https://www.linkedin.com/in/jonathan-dajome-rodriguez-7801b21b0/</span> */}
          </a>
          <a
            className="tooltip"
            href="https://github.com/jonni595"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="icon-styles" />
            {/* <span className='tooltip-box3' >https://github.com/jonni595</span> */}
          </a>
        </div>
        <div className="footer__creator">
          <p>
            Made with 💜 by <span className="creator">@jonathandajome</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
