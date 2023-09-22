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
}

export const projects: Card[] = [
  {
    id: 0,
    title: "Quiz App",
    imageUrl: "https://picsum.photos/200",
    altImg: "Project 1",
    paragraph:
      "Challenge your knowledge and show how much you know about web development",
  },
  {
    id: 1,
    title: "Todo List",
    imageUrl: "https://picsum.photos/200",
    altImg: "Project 2",
    paragraph:
      "A Todo list app made in React is a web application that allows users to create and manage a to-do list",
  },
  {
    id: 2,
    title: "Movie App",
    imageUrl: "https://picsum.photos/200",
    altImg: "Project 3",
    paragraph:
      "An application for film lovers who want to find information about movies",
  },
  {
    id: 3,
    title: "Calculator",
    imageUrl: "https://picsum.photos/200",
    altImg: "Project 4",
    paragraph:
      "Web application that allows you to perform basic mathematical operations",
  },
  {
    id: 4,
    title: "Validation Form",
    imageUrl: "https://picsum.photos/200",
    altImg: "Project 5",
    paragraph:
      "It is a form that verifies that the data entered by the user is correct",
  },
  {
    id: 5,
    title: "YouTube Clone",
    imageUrl: "https://picsum.photos/200",
    altImg: "Project 6",
    paragraph: "A replica of the most popular video platform on the Internet",
  },
];

interface BadgeProps {
  id: number;
  langs: string[];
}

export const badges: BadgeProps[] = [
  { id: 1, langs: ["HTML", "CSS", "Vanilla JS"] },
  { id: 2, langs: ["HTML", "CSS", "JavaScript"] },
  { id: 3, langs: ["Vanilla JS", "API REST", "CSS"] },
  { id: 4, langs: ["HTML", "SASS", "CSS"] },
  { id: 5, langs: ["HTML", "Vanilla JS", "SASS"] },
  { id: 6, langs: ["HTML", "SASS", "CSS"] },
];

// export const USER_EMAIL = "jonathandajome@gmail.com"
