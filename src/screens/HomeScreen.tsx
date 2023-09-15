import { Avatar, Badge, Button, Card } from "../components";
import { imageUrl } from "../utils/ImageUrl";

const { url1, url2, url3 } = imageUrl;

const HomeScreen = () => {
  return (
    <div className="container">
      <section className="profile">
        <div className="profile__item">
          <Avatar />
          <h1 className="profile__title">Frontend Developer</h1>
          <span className="profile__subtitle">
            Freelancer passionate about development
          </span>
          <Button link="#project" text="View Projects" />
        </div>
      </section>
      <section id="project" className="projects">
        <div className="projects__title">
          <h2>Projects</h2>
        </div>
        <div className="projects__item">
          <Card
            url={url1}
            altImage="Project 1"
            title="Quiz App"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae"
          >
            <Badge lang1="React" lang2="Sass" lang3="TypeScript" />
          </Card>
        </div>
        <div className="projects__item">
          <Card
            url={url2}
            altImage="Project 2"
            title="Validation Form"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae"
          >
            <Badge lang1="HTML" lang2="CSS" lang3="Vanilla JS" />
          </Card>
        </div>
        <div className="projects__item">
          <Card
            url={url3}
            altImage="Project 3"
            title="YouTube Clone"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae"
          >
            <Badge lang1="HTML" lang2="Bootstrap" lang3="Sass" />
          </Card>
        </div>
      </section>
    </div>
  );
};

export { HomeScreen };
