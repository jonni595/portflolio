import { v4 as uuidv4 } from "uuid";
import { IconType } from "react-icons";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import { BiLogoGit, BiLogoTypescript } from "react-icons/bi";

import Quiz from "../assets/Img_Quiz-min.png";
import Todo from "../assets/Img_Todo-min.png";
import Movie from "../assets/Img_Movie-min.png";
import Calc from "../assets/Img_Calc-min.png";
import Form from "../assets/Img_Form-min.png";
import YouTube from "../assets/Img_YT-min.png";
import Netflix from "../assets/Img_Netflix.png";

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
    id: uuidv4(),
    title: "Quiz App",
    imageUrl: `${Quiz}`,
    altImg: "Project 1",
    paragraph:
      "Challenge your knowledge and show how much you know about web development",
    languages: ["HTML", "CSS", "Vanilla JS"],
    projectUrl: "https://jonni595.github.io/quiz-app/",
  },
  {
    id: uuidv4(),
    title: "Todo List",
    imageUrl: `${Todo}`,
    altImg: "Project 2",
    paragraph:
      "A Todo list app made in React is a web application that allows users to create and manage a to-do list",
    languages: ["HTML", "CSS", "DOM/JS"],
    projectUrl: "https://iridescent-macaron-a5e067.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Movie App",
    imageUrl: `${Movie}`,
    altImg: "Project 3",
    paragraph:
      "An application for film lovers who want to find information about movies",
    languages: ["Vanilla JS", "API REST", "CSS"],
    projectUrl: "https://jonni595.github.io/movie-app/",
  },
  {
    id: uuidv4(),
    title: "Calculator",
    imageUrl: `${Calc}`,
    altImg: "Project 4",
    paragraph:
      "Web application that allows you to perform basic mathematical operations",
    languages: ["HTML", "SASS", "CSS"],
    projectUrl: "https://jonni595.github.io/calculator/",
  },
  {
    id: uuidv4(),
    title: "Form Validation",
    imageUrl: `${Form}`,
    altImg: "Project 5",
    paragraph:
      "It is a form that verifies that the data entered by the user is correct",
    languages: ["HTML", "React", "SASS"],
    projectUrl: "https://jonni595.github.io/validation-form/",
  },
  {
    id: uuidv4(),
    title: "YouTube Clone",
    imageUrl: `${YouTube}`,
    altImg: "Project 6",
    paragraph: "A replica of the most popular video platform on the Internet",
    languages: ["HTML", "SASS", "CSS"],
    projectUrl: "https://jonni595.github.io/youtube-clone/",
  },
  {
    id: uuidv4(),
    title: "Netflix Clone",
    imageUrl: `${Netflix}`,
    altImg: "Project 7",
    paragraph: "A replica of the most popular streaming platform on the Internet",
    languages: ["HTML", "SASS", "CSS"],
    projectUrl: "https://jonni595.github.io/netflix-clone/",
  },
];

type PropsIcons = {
  id: number;
  name: string;
  icon: IconType;
  description: string;
  alt: string;
};

export const technologies: PropsIcons[] = [
  {
    id: uuidv4(),
    name: "HTML",
    icon: IoLogoHtml5,
    description: "+3 Experience",
    alt: "HTML image",
  },
  {
    id: uuidv4(),
    name: "CSS",
    icon: IoLogoCss3,
    description: "+3 Experience",
    alt: "CSS image",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    icon: IoLogoJavascript,
    description: "+2 Experience",
    alt: "JavaScript image",
  },
  {
    id: uuidv4(),
    name: "Rect",
    icon: IoLogoReact,
    description: "+1 Experience",
    alt: "React image",
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    icon: BiLogoTypescript,
    description: "+1 Experience",
    alt: "TypeScript image",
  },
  {
    id: uuidv4(),
    name: "Git",
    icon: BiLogoGit,
    description: "+1 Experience",
    alt: "Git image",
  },
  {
    id: uuidv4(),
    name: "Sass",
    icon: IoLogoSass,
    description: "+3 Experience",
    alt: "Sass image",
  },
];
