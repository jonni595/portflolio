import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
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
      <Footer />
    </section>
  );
};

export default Layout;
