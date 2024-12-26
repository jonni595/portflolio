import { IconType } from "react-icons";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
  IoLogoNodejs,
} from "react-icons/io5";
import Todo from "../assets/Todo-list-min.png";
import Movie from "../assets/Movie-app-min.png";
import Clock from "../assets/Clock-min.png";
import Game from "../assets/Game-hub-min.png";
import Form from "../assets/Validation-form-min.png";
import Weather from "../assets/Weather-app-min.png";

const skills = ["React", "API", "UX/UI", "Bootstrap", "Tailwind"] as const;

export default skills;

interface Projects {
  title: string;
  url: string;
  badge: string[];
  github: string;
  category?: string;
}

export const projects: Projects[] = [
  {
    title: "Game Hub",
    url: Game,
    badge: ["Axios", "Chakra UI", "Framer Motion"],
    github: "https://game-hub-jd.netlify.app/",
    category: "API",
  },
  {
    title: "Movie App",
    url: Movie,
    badge: ["React", "Styled Components", "TMDB API"],
    github: "https://movie-app-jd.netlify.app/",
    category: "React",
  },
  {
    title: "Form Validation",
    url: Form,
    badge: ["React", "TypeScript", "State Management"],
    github: "https://validation-form-jd.netlify.app/",
    category: "React",
  },
  {
    title: "Clock",
    url: Clock,
    badge: ["React", "TypeScript", "Context API"],
    github: "https://theme-clock-jd.netlify.app/",
    category: "React",
  },
  {
    title: "Weather App",
    url: Weather,
    badge: ["React", "TypeScript", "Open Weather API"],
    github: "https://app-weather-jd.netlify.app/",
    category: "API",
  },
  {
    title: "Todo List",
    url: Todo,
    badge: ["React", "TypeScript", "Context API"],
    github: "https://todo-list-app-jd.netlify.app/",
    category: "React",
  },
];

interface SkillsProps {
  title: string;
  icon: IconType;
}

export const skillsData: SkillsProps[] = [
  {
    title: "React",
    icon: IoLogoReact,
  },
  {
    title: "HTML",
    icon: IoLogoHtml5,
  },
  {
    title: "CSS",
    icon: IoLogoCss3,
  },
  {
    title: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    title: "Sass",
    icon: IoLogoSass,
  },
  {
    title: "Node",
    icon: IoLogoNodejs,
  },
];
