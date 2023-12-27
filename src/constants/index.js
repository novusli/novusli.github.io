import { ImFolderOpen } from "react-icons/im";
import {
  carrent,
  tripguide,
  jobit,
  starbucks,
  shopify,
  meta,
  tesla,
  html,
  css,
  git,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  python,
  cpp,
  django,
  postgresql
} from "../assets";

export const sidebarList = [
  { name: "Project-1", link: "/", icon: ImFolderOpen, margin: true },
  { name: "Project-2", link: "/", icon: ImFolderOpen },
  { name: "Project-3", link: "/", icon: ImFolderOpen }
];

const projects = [
  {
    name: "Face Recognition",
    image: carrent,
    sourceCodeLink: "https://github.com",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Job IT",
    image: jobit,
    sourceCodeLink: "https://github.com",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Trip Guide",
    image: tripguide,
    sourceCodeLink: "https://github.com",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
];

const skills = [
  {
    name: "HTML 5",
    description: "4 years of web development",
    icon: html,
  },
  {
    name: "CSS 3",
    description: "3 years of web development",
    icon: css,
  },
  {
    name: "Javascript",
    description: "5 years of web development",
    icon: javascript,
  },
  {
    name: "Python",
    description: "4 years of web development",
    icon: python,
  },
  {
    name: "C++",
    description: "2 years of web development",
    icon: cpp,
  },
  {
    name: "React.js",
    description: "2 years of web development",
    icon: reactjs,
  },
  {
    name: "Node.js",
    description: "2 years of web development",
    icon: nodejs,
  },
  {
    name: "Django",
    description: "2 years of web development",
    icon: django,
  },
  {
    name: "PostgreSQL",
    description: "2 years of web development",
    icon: postgresql,
  },
  {
    name: "Git",
    description: "2 years of web development",
    icon: git,
  },
  {
    name: "Tailwind",
    description: "2 years of web development",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Web Developer",
    companyName: "AE&E",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Developer",
    companyName: "Uber",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export { projects, skills, experiences }