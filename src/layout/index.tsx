import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Project from "../components/ProjectPage";
import "./layout.css";

const Layout = () => {
  return (
    <section className="layout">
      <HomePage />
      <Project />
      <Experience />
      <Contact />
    </section>
  );
};

export default Layout;
