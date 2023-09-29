import Quiz from "../assets/Img_Quiz-min.png";
import Todo from "../assets/Img_Todo-min.png";
import Movie from "../assets/Img_Movie-min.png";
import Calc from "../assets/Img_Calc-min.png";
import Form from "../assets/Img_Form-min.png";
import YouTube from "../assets/Img_YT-min.png";

interface Props {
  firstName: string;
  email: string;
  message: string;
}

export const initialState: Props = {
  firstName: "",
  email: "",
  message: "",
};

interface Card {
  id: number;
  title: string;
  imageUrl: string;
  altImg: string;
  paragraph: string;
  languages: string[];
  projectUrl: string;
}

export const projects: Card[] = [
  {
    id: 0,
    title: "Quiz App",
    imageUrl: `${Quiz}`,
    altImg: "Project 1",
    paragraph:
      "Challenge your knowledge and show how much you know about web development",
    languages: ["HTML", "CSS", "Vanilla JS"],
    projectUrl: "https://jonni595.github.io/quiz-app/",
  },
  {
    id: 1,
    title: "Todo List",
    imageUrl: `${Todo}`,
    altImg: "Project 2",
    paragraph:
      "A Todo list app made in React is a web application that allows users to create and manage a to-do list",
    languages: ["HTML", "CSS", "DOM/JS"],
    projectUrl: "https://jonni595.github.io/todo-list/",
  },
  {
    id: 2,
    title: "Movie App",
    imageUrl: `${Movie}`,
    altImg: "Project 3",
    paragraph:
      "An application for film lovers who want to find information about movies",
    languages: ["Vanilla JS", "API REST", "CSS"],
    projectUrl: "https://jonni595.github.io/movie-app/",
  },
  {
    id: 3,
    title: "Calculator",
    imageUrl: `${Calc}`,
    altImg: "Project 4",
    paragraph:
      "Web application that allows you to perform basic mathematical operations",
    languages: ["HTML", "SASS", "CSS"],
    projectUrl: "https://jonni595.github.io/calculator/",
  },
  {
    id: 4,
    title: "Form Validation",
    imageUrl: `${Form}`,
    altImg: "Project 5",
    paragraph:
      "It is a form that verifies that the data entered by the user is correct",
    languages: ["HTML", "React", "SASS"],
    projectUrl: "https://jonni595.github.io/validation-form/",
  },
  {
    id: 5,
    title: "YouTube Clone",
    imageUrl: `${YouTube}`,
    altImg: "Project 6",
    paragraph: "A replica of the most popular video platform on the Internet",
    languages: ["HTML", "SASS", "CSS"],
    projectUrl: "https://jonni595.github.io/youtube-clone/",
  },
];
