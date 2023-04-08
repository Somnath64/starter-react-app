import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  deloitte,
  threejs,
  todolist,
  portfolio,
  mapty,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern Analyst",
    company_name: "Deloitte.",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Sept 2021 - Sept 2022",
    points: [
      "Collaborated with senior developer to design and develop a website using HTML5 and JavaScript UI control library SAPUI5.",
      "Utilized SAP Gateway with REST and OData to develop a web application that interacted with SAP data and functionality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Successfully worked with SAP Gateway REST APIs to retrieve and display data from the database S/4 HANA.",
    ],
  },
];

const projects = [
  {
    name: "TODO List",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/Somnath64/todolist",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with three.js, React.js, and Tailwind CSS would be a visually stunning platform to showcase an individual's skills and projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mapty App",
    description:
      "Mapty provides an easy and interactive way for users to track their workouts and visualize their progress on a map.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://somnath64.github.io/mapty-app/",
  },
];

export { services, technologies, experiences, projects };
