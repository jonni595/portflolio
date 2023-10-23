import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Badge, Button, Card, SkillsCard } from "../components";
import { getLimit } from "../utils/getLimit";
import { projects, technologies } from "../utils/model";
import Avatar from "../assets/Img_Avatar-min.png";

const HomeScreen = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "I 💛 JavaScript", "Freelancer"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  return (
    <>
      <section className="profile">
        <div className="profile__item">
          <img src={Avatar} alt="Avatar logo" className="profile__image" />
          <h1 className="profile__title">
            {text} <Cursor />
          </h1>
          <span className="profile__subtitle">
            Freelancer passionate about development
          </span>
          <Button link="#project" text="View Projects" />
        </div>
      </section>
      <section id="project" className="project">
        {projects.map(
          ({
            id,
            title,
            paragraph,
            imageUrl,
            altImg,
            projectUrl,
            languages,
          }) => (
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
          )
        )}
      </section>
      <section className="skills">
        {technologies.map((tech) => (
          <SkillsCard
            key={tech.id}
            title={tech.name}
            description={tech.description}
            Icon={tech.icon}
          />
        ))}
      </section>
    </>
  );
};

export { HomeScreen };
