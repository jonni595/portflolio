import { Navbar } from "./Navbar";
import { IoMenu, IoClose } from "react-icons/io5";
import useMenuState from "../hooks/useMenuState";

const Header = () => {
  const [hidden, toggleMenu] = useMenuState();

  return (
    <header className="header">
      <Navbar />
      {hidden ? (
        <div className="menu">
          <IoClose className="close-icon" onClick={toggleMenu} />
        </div>
      ) : (
        <IoMenu className="menu-icon" onClick={toggleMenu} />
      )}
    </header>
  );
};

export { Header };
