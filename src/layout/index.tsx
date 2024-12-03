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
      <div>4</div>
    </section>
  );
};

export default Layout;
