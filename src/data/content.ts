// TODO: fill in real URLs when ready
export const links = {
  email: "amanda@techgirltechworld.com",
  github: "", // e.g. "https://github.com/yourusername"
  linkedin: "https://www.linkedin.com/in/amandajh12/", // e.g. "https://linkedin.com/in/yourusername"
  substack: "https://amandabytes.substack.com/", // e.g. "https://yourname.substack.com"
  resumePdf: "", // e.g. "/resume.pdf" (drop the file in /public)
};

export const profile = {
  name: "Amanda Hernandez",
  title: "Full Stack Software Engineer",
  location: "Los Angeles, CA",
  status: "Open to opportunities",
  summary:
    "I'm a full-stack engineer specializing in web technologies. I love bringing people's ideas to life.",
  // TODO: drop your headshot file in /public (e.g. public/headshot.jpg) and set the path here
  photo: "/profile.jpeg", // e.g. "/headshot.jpg"
};

export type Experience = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
  note?: string;
};

export const experience: Experience[] = [
  {
    company: "WellSaid",
    title: "Senior Fullstack Engineer",
    dates: "Jan 2022 — Present",
    bullets: [
      "Led the modernization of the frontend component system, migrating from legacy component libraries to a tokenized design system built on a headless UI library and CSS Modules, using AI-assisted tooling throughout the migration.",
      "Partnered closely with design to evolve UX, styling, and accessibility across the component library as the brand evolved.",
      "Shipped an AI-powered voice recommendation feature to help customers find the right voice for their use case.",
      "Currently expanding skills in AI engineering - particularly building MCP tools and evaluations",
    ],
  },
  {
    company: "Mitchell International",
    title: "Software Engineer II",
    dates: "May 2019 — Dec 2021",
    note: "Started as an intern in Jun 2018, continued part-time through the school year, then joined full-time in May 2019.",
    bullets: [
      "Owned a document-viewing microservice (vanilla JavaScript + Knockout.js, C#, .NET core) supporting multiple file types and access patterns across several internal company services.",
      "Integrated the service into a shared microfrontend architecture used by multiple teams.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  role: string;
  stack: string[];
  status?: string;
  link?: string;
  images?: string[];
  // Self-hosted video (only for small clips, roughly under 20-30MB —
  // GitHub hard-blocks any file over 100MB). Path into /public, e.g. "/goodhost/demo.mp4".
  video?: string;
  // Embedded video (YouTube/Vimeo, etc.) — use this for anything larger.
  // YouTube: upload as Unlisted, then use the embed URL, e.g.
  // "https://www.youtube.com/embed/VIDEO_ID"
  // Vimeo: "https://player.vimeo.com/video/VIDEO_ID"
  videoEmbed?: string;
  // "portrait" for phone-shot/Shorts-style vertical video (9:16).
  // Defaults to landscape (16:9) if omitted.
  videoOrientation?: "landscape" | "portrait";
};

export const projects: Project[] = [
  {
    name: "GoodHost",
    description:
      "An in-person, location-based social networking app connecting job seekers at events in real time. Built as my grad school capstone project. Identifies people with nametags without using facial recognition, but rather using ios location based features.",
    role: "Technical Lead & Engineer",
    stack: ["Swift", "iOS", "AR"],
    status: "Capstone project",
    // TODO: drop screenshots in public/goodhost/ (e.g. public/goodhost/01.jpg)
    // and list the paths here in the order you want them to appear.
    images: [
      // "/goodhost/01.jpg",
      // "/goodhost/02.jpg",
    ],
    videoEmbed: "https://www.youtube.com/embed/h85k37xR3ks",
    videoOrientation: "portrait",
  },
];

export const skills = {
  "Languages & Frameworks": ["TypeScript", "JavaScript", "React", "Node.js"],
  "Data & Infra": ["PostgreSQL", "Docker"],
  "AI / Evaluations": ["LangChain", "LangSmith"],
};

export const education = [
  {
    degree: "M.S. Integrated Design, Business and Technology (2025)",
    school: "University of Southern California",
  },
  {
    degree: "B.S. Informatics (2019)",
    school: "University of California, Irvine",
  },
];
