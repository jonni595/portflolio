import { useEffect, useState } from "react";
import {
  IoIosMoon,
  IoIosSunny,
  IoIosHome,
  IoIosBriefcase,
  IoMdChatbubbles,
} from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 550) {
        navbar?.classList.add("fixed", "max-width");
      } else {
        navbar?.classList.remove("fixed", "max-width");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <span className="logo">
        <a href="#home" className="logo-link"></a>
      </span>
      <ul className="navbar-list">
        <li>
          <a
            href="#home"
            className={selectedIndex === 0 ? "active" : ""}
            onClick={() => setSelectedIndex(0)}
          >
            <IoIosHome />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={selectedIndex === 1 ? "active" : ""}
            onClick={() => setSelectedIndex(1)}
          >
            <IoIosBriefcase />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={selectedIndex === 2 ? "active" : ""}
            onClick={() => setSelectedIndex(2)}
          >
            <IoMdChatbubbles />
          </a>
        </li>
      </ul>
      {isDark ? (
        <IoIosSunny className="icon" onClick={() => setIsDark(false)} />
      ) : (
        <IoIosMoon className="icon" onClick={() => setIsDark(true)} />
      )}
    </nav>
  );
};

export default Navbar;
