import { Avatar, Badge, Button, Card } from "../components";
import { imageUrl } from "../utils/ImageUrl";

const { url1, url2, url3 } = imageUrl;

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
        <Card
          url={url1}
          altImage="Project 1"
          title="Quiz App"
          description="Challenge your knowledge and show how much you know about web development"
        >
          <Badge lang1="HTML" lang2="CSS" lang3="Vanilla JS" />
        </Card>
        <Card
          url={url2}
          altImage="Project 2"
          title="Todo List"
          description="A Todo list app made in React is a web application that allows users to create and manage a to-do list"
        >
          <Badge lang1="HTML" lang2="CSS" lang3="JavaScript" />
        </Card>

        <Card
          url={url3}
          altImage="Project 3"
          title="Movie App"
          description="An application for film lovers who want to find information about movies"
        >
          <Badge lang1="Vanilla JS" lang2="API REST" lang3="CSS" />
        </Card>
        <Card
          url={url3}
          altImage="Project 4"
          title="Calculator"
          description="Web application that allows you to perform basic mathematical operations"
        >
          <Badge lang1="HTML" lang2="SASS" lang3="CSS" />
        </Card>
        <Card
          url={url3}
          altImage="Project 5"
          title="Validation Form"
          description="It is a form that verifies that the data entered by the user is correct"
        >
          <Badge lang1="HTML" lang2="Vanilla JS" lang3="SASS" />
        </Card>
        <Card
          url={url3}
          altImage="Project 6"
          title="YouTube Clone"
          description="A replica of the most popular video platform on the Internet"
        >
          <Badge lang1="HTML" lang2="SASS" lang3="CSS" />
        </Card>
      </section>
    </>
  );
};

export { HomeScreen };
