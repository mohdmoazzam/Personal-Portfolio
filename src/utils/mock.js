import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiNodejs, DiPostgresql } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiNestjs, SiReact, SiExpress } from "react-icons/si";

export const Techstacks = [
  {
    _id: 1,
    name: "HTML",
    icon: BsFiletypeHtml,
  },
  {
    _id: 2,
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    _id: 3,
    name: "JavaScript",
    icon: RiJavascriptFill,
  },
  {
    _id: 4,
    name: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    _id: 5,
    name: "Reactjs",
    icon: SiReact,
  },
  {
    _id: 6,
    name: "Nodejs",
    icon: DiNodejs,
  },
  {
    _id: 7,
    name: "Expressjs",
    icon: SiExpress,
  },
  {
    _id: 8,
    name: "Nestjs",
    icon: SiNestjs,
  },
  {
    _id: 9,
    name: "Mongodb",
    icon: SiMongodb,
  },
  {
    _id: 10,
    name: "SQL",
    icon: DiPostgresql,
  },
];

export const projectData = [
  {
    id: 1,
    title: "Studynotion- An edtech(WA)",
    description: "Full stack",
    image:
      "https://assets.devfolio.co/hackathons/633065500193427091033d2cfc2621e6/projects/8e80723867854f33939a9dd0170f0927/48ef94bc-b0af-4c7e-b7bb-8875aafd6ee5.jpeg",
    tags: ["Node", "React", "Redux", "Mongodb"],
    link: "#",
  },
  {
    id: 2,
    title: "BuzzChat- Messaging(WA)",
    description: "Full stack",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ221LJ-Di7lMTdlFfLd1XxbqxVY9qO59FJwCCu2wtwEQ&s",
    tags: ["Node", "Socket", "React", "Mongodb"],
    link: "https://google.com",
  },
  {
    id: 3,
    title: "Subtrix- Blogging(WA)",
    description: "Backend",
    image:
      "https://media.licdn.com/dms/image/D560BAQEIF_UR1SqzOA/company-logo_200_200/0/1703313495850/subtrix_logo?e=2147483647&v=beta&t=D99KllOlo_-yoCSFTzxSgRPIe8QsDCdT0sC7nuCvE3Q",
    tags: ["Node", "Express", "Postgres"],
    link: "https://google.com",
  },
];
