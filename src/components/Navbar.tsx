import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav role="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </nav>
  );
};

export { Navbar };
