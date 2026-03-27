import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "storytelling-portfolio",
    category: "3D Portfolio",
    title: "Storytelling Portfolio",
    src: "/assets/projects-screenshots/project-storytelling-portfolio.png",
    screenshots: ["project-storytelling-portfolio.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "https://my-storytelling-portfolio.vercel.app/",
    github: "https://github.com/vaibhav-buildz/Storytelling-Portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cinematic 3D Storytelling Experience
          </TypographyP>
          <TypographyP className="font-mono ">
            A cinematic, scroll-reactive 3D portfolio with a custom image
            sequence engine, immersive boot animations, and interactive
            particle systems — built entirely from scratch.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Immersive 3D</TypographyH3>
          <p className="font-mono mb-2">
            The project features a deep integration of Three.js and Framer
            Motion to create a seamless storytelling experience that reacts to
            the user's scroll.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/project-storytelling-portfolio.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "atrangi-portfolio",
    category: "3D Portfolio",
    title: "Atrangi Portfolio",
    src: "/assets/projects-screenshots/project-atrangi-portfolio.png",
    screenshots: ["project-atrangi-portfolio.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "https://atrangi-portfolio.vercel.app/",
    github: "https://github.com/vaibhav-buildz/atrangi-portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Pirate-Themed Interactive Journey
          </TypographyP>
          <TypographyP className="font-mono ">
            A cinematic interactive 3D portfolio featuring a pirate-themed
            journey map, immersive animations, and a simulated terminal
            interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Interactive Map</TypographyH3>
          <p className="font-mono mb-2">
            Users navigate through a stylized 3D map, uncovering different
            milestones and skills as they progress through the theme.
          </p>
          <SlideShow images={[`${BASE_PATH}/project-atrangi-portfolio.png`]} />
        </div>
      );
    },
  },
  {
    id: "3d-portfolio",
    category: "3D Portfolio",
    title: "Personal 3D Portfolio",
    src: "/assets/nav-link-previews/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "https://my-storytelling-portfolio.vercel.app/",
    github: "https://github.com/vaibhav-buildz/3D-Portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Next-Gen Interactive Resume
          </TypographyP>
          <TypographyP className="font-mono ">
            A stunning 3D-driven portfolio built leveraging React, Next.js, and framer-motion to deliver a buttery-smooth scrolling experience. 
            Features floating Spline 3D objects, advanced Glassmorphism UI, a dynamic storytelling timeline, and seamless routing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dynamic Next.js App</TypographyH3>
          <p className="font-mono mb-2">
            The site utilizes a customized Aceternity UI and Shadcn components set, integrated with a serverless Resend API route to handle direct dynamic 
            communications from the 3D rendered Contact form.
          </p>
          <SlideShow images={[`/assets/nav-link-previews/landing.png`]} />
        </div>
      );
    },
  },
];
export default projects;
