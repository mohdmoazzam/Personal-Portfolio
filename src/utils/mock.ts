import { MdOutlineWork, MdSchool } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { IconType } from "react-icons";
import pitchnhireImage from "../assets/images/projects/pitchnhire.webp";
import palifyImage from "../assets/images/projects/palify.webp";
import studynotionImage from "../assets/images/projects/studynotion.webp";
import appsierraLogo from "../assets/images/appsierra.png";
import amrapaliLogo from "../assets/images/amrapali.png";
import gpkashipurLogo from "../assets/images/gpkashipur.png";
import codehelpLogo from "../assets/images/codehelp.png";
import namastedevLogo from "../assets/images/namastedev.webp";
import nodejsLogo from "../assets/tech/nodejs-original.svg";
import nestjsLogo from "../assets/tech/nestjs-original.svg";
import expressLogo from "../assets/tech/express-original.svg";
import socketioLogo from "../assets/tech/socketio-original.svg";
import reactLogo from "../assets/tech/react-original.svg";
import tailwindLogo from "../assets/tech/tailwindcss-original.svg";
import htmlLogo from "../assets/tech/html5-original.svg";
import cssLogo from "../assets/tech/css3-original.svg";
import typescriptLogo from "../assets/tech/typescript-original.svg";
import javascriptLogo from "../assets/tech/javascript-original.svg";
import postgresqlLogo from "../assets/tech/postgresql-original.svg";
import mongodbLogo from "../assets/tech/mongodb-original.svg";
import redisLogo from "../assets/tech/redis-original.svg";
import elasticsearchLogo from "../assets/tech/elasticsearch-original.svg";
import awsLogo from "../assets/tech/amazonwebservices-original-wordmark.svg";
import dockerLogo from "../assets/tech/docker-original.svg";
import gitLogo from "../assets/tech/git-original.svg";
import openaiLogo from "../assets/tech/openai.svg";
import grokLogo from "../assets/tech/grok.svg";
import claudeLogo from "../assets/tech/claude.svg";
import reduxLogo from "../assets/tech/redux.svg";
import razorpayLogo from "../assets/tech/razorpay.svg";

export const techLogos: Record<string, string> = {
  "Node.js": nodejsLogo,
  NestJS: nestjsLogo,
  "React.js": reactLogo,
  TypeScript: typescriptLogo,
  PostgreSQL: postgresqlLogo,
  Elasticsearch: elasticsearchLogo,
  Redis: redisLogo,
  WebSocket: socketioLogo,
  "Socket.IO": socketioLogo,
  "OpenAI API": openaiLogo,
  "Grok API": grokLogo,
  "Express.js": expressLogo,
  MongoDB: mongodbLogo,
  Redux: reduxLogo,
  Razorpay: razorpayLogo,
};

export interface TimelineProject {
  name: string;
  url?: string;
  stack: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  org: string;
  period: string;
  location?: string;
  description?: string;
  projects?: TimelineProject[];
  icon: IconType;
  logo?: string;
}

export const experienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Associate Developer",
    org: "Appsierra",
    period: "Nov 2022 - Present",
    location: "Noida, Uttar Pradesh, India",
    icon: MdOutlineWork,
    logo: appsierraLogo,
  },
];

export interface EducationItem {
  id: number;
  degree: string;
  level: string;
  institution: string;
  location: string;
  start: number;
  end: number;
  icon: IconType;
  logo?: string;
  url?: string;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Diploma in Computer Science Engineering",
    level: "Diploma",
    institution: "Govt. Polytechnic College",
    location: "Kashipur, Uttarakhand",
    start: 2015,
    end: 2018,
    icon: GiDiploma,
    logo: gpkashipurLogo,
    url: "https://gpkashipur.in",
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science",
    level: "Bachelor's Degree",
    institution: "Amrapali Institute of Technology",
    location: "Haldwani, Uttarakhand",
    start: 2019,
    end: 2022,
    icon: MdSchool,
    logo: amrapaliLogo,
    url: "https://amrapali.ac.in",
  },
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  points: string[];
  logo?: string;
  url?: string;
}

export const certificationData: Certification[] = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    issuer: "Code Help",
    logo: codehelpLogo,
    url: "https://www.codehelp.in",
    points: [
      "Built and deployed full-stack MERN applications with authentication, RESTful APIs and responsive UIs.",
      "Used Git-based version control and collaborative workflows across team projects.",
    ],
  },
  {
    id: 2,
    title: "JavaScript",
    issuer: "NamasteDev",
    logo: namastedevLogo,
    url: "https://namastedev.com",
    points: [
      "Mastered core JavaScript internals, including closures, scope, hoisting and asynchronous programming.",
      "Applied them to writing clean, efficient JavaScript for both browser and Node.js environments.",
    ],
  },
];

export interface Techstack {
  _id: number;
  name: string;
  category: string;
  logo: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  category: string;
  metrics: ProjectMetric[];
  tags: string[];
  link: string;
  image?: string;
}

export const Techstacks: Techstack[] = [
  { _id: 1, name: "Node.js", category: "Backend", logo: nodejsLogo },
  { _id: 2, name: "NestJS", category: "Backend", logo: nestjsLogo },
  { _id: 3, name: "Express.js", category: "Backend", logo: expressLogo },
  { _id: 4, name: "WebSocket", category: "Backend", logo: socketioLogo },
  { _id: 5, name: "React.js", category: "Frontend", logo: reactLogo },
  { _id: 6, name: "Tailwind CSS", category: "Frontend", logo: tailwindLogo },
  { _id: 7, name: "HTML", category: "Frontend", logo: htmlLogo },
  { _id: 8, name: "CSS", category: "Frontend", logo: cssLogo },
  { _id: 9, name: "TypeScript", category: "Language", logo: typescriptLogo },
  { _id: 10, name: "JavaScript", category: "Language", logo: javascriptLogo },
  { _id: 11, name: "PostgreSQL", category: "Database", logo: postgresqlLogo },
  { _id: 12, name: "MongoDB", category: "Database", logo: mongodbLogo },
  { _id: 13, name: "Redis", category: "Database", logo: redisLogo },
  { _id: 14, name: "Elasticsearch", category: "Search", logo: elasticsearchLogo },
  { _id: 15, name: "AWS (EC2, S3)", category: "Cloud", logo: awsLogo },
  { _id: 16, name: "Docker", category: "DevOps", logo: dockerLogo },
  { _id: 17, name: "Git", category: "DevOps", logo: gitLogo },
  { _id: 18, name: "OpenAI / Grok API", category: "AI", logo: openaiLogo },
  { _id: 19, name: "Claude", category: "AI", logo: claudeLogo },
];

export const projectData: Project[] = [
  {
    id: 1,
    title: "PitchNHire",
    tagline: "Applicant Tracking System",
    description:
      "Recruiting SaaS covering candidate management, job posting, recruiter pipelines and interview scheduling.",
    category: "Backend",
    metrics: [
      { value: "40%", label: "Faster API responses" },
      { value: "45%", label: "Faster search" },
    ],
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Elasticsearch", "Redis"],
    link: "https://app.pitchnhire.com",
    image: pitchnhireImage,
  },
  {
    id: 2,
    title: "Palify",
    tagline: "Gamified Professional Networking",
    description:
      "Networking, content creation, job applications and creator monetization in a single profile, with real-time chat and notifications.",
    category: "Full stack",
    metrics: [
      { value: "100K+", label: "Active users" },
      { value: "Real-time", label: "Chat & notifications" },
    ],
    tags: ["Node.js", "React.js", "WebSocket"],
    link: "https://palify.io",
    image: palifyImage,
  },
  {
    id: 3,
    title: "Intuvos",
    tagline: "Online Assessment & Proctoring",
    description:
      "MCQ tests, AI-driven (agentic) assessments and technical screenings, with LLM-based answer scoring and automated proctoring reports.",
    category: "Full stack · AI",
    metrics: [
      { value: "LLM", label: "Automated answer scoring" },
      { value: "AI", label: "Proctoring & integrity reports" },
    ],
    tags: ["NestJS", "React.js", "OpenAI API", "Grok API"],
    link: "https://intuvos.com",
  },
  {
    id: 4,
    title: "StudyNotion",
    tagline: "E-learning Platform",
    description:
      "Students buy video courses, learn at their own pace and track progress; instructors create, publish and sell their own courses.",
    category: "Full stack",
    metrics: [
      { value: "2 roles", label: "Student & instructor dashboards" },
      { value: "Razorpay", label: "Course checkout & payments" },
    ],
    tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    link: "https://studynotion-hub.vercel.app",
    image: studynotionImage,
  },
  {
    id: 5,
    title: "BuzzChat",
    tagline: "Real-time Chat App",
    description:
      "One-on-one and group chats with friend requests, file attachments, online presence and live notifications, plus an admin dashboard for users, chats and messages.",
    category: "Full stack",
    metrics: [
      { value: "Real-time", label: "Messaging & presence" },
      { value: "Admin", label: "Analytics & moderation dashboard" },
    ],
    tags: ["NestJS", "React.js", "Socket.IO", "PostgreSQL", "Redis"],
    link: "https://buzzchat-web.vercel.app",
  },
];
