import { Avatar, Badge, Button, Card } from "../components";
import { projects } from "../utils/model";

const HomeScreen = () => {
  return (
    <>
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
      <section id="project" className="project">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.paragraph}
            url={project.imageUrl}
            altImage={project.altImg}
          >
            <Badge langs={project.languages} />
          </Card>
        ))}
      </section>
    </>
  );
};

export { HomeScreen };
