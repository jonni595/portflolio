import { Avatar, Badge, Button, Card } from "../components";
import { getLimit } from "../utils/getLimit";
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
        {projects.map(({id, title, paragraph, imageUrl, altImg, projectUrl, languages}) => (
          <Card
            key={id}
            title={title}
            description={`${getLimit(paragraph)}`}
            url={imageUrl}
            altImage={altImg}
            gitHubUrl={projectUrl}
          >
            <Badge langs={languages} />
          </Card>
        ))}
      </section>
    </>
  );
};

export { HomeScreen };
