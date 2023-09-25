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
            <span className='tooltip-box2'>JonathanDajomeRodriguez</span>
          </a>
          <a
            className="tooltip"
            href="https://github.com/jonni595"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="icon-styles" />
            <span className='tooltip-box3'>jonni595</span>
          </a>
        </div>
        <div className="footer__creator">
          <p>
            Made with 💜 by Jonathan Dajome R.
          </p>
          <span> © 2023 All Rights Reserved. </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
