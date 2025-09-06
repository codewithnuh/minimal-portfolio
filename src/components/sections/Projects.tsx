"use client";
import { Container } from "../shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
  SiTypescript,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiFirebase,
  SiDocker,
  SiPython,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiSqlite, // Assuming you use SQLite for a generic 'SQL' icon
} from "react-icons/si";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Heading from "../shared/Heading";
import { getAllProjects } from "@/actions/actions";

// Define the shape of a technology item, with an optional icon
interface TechItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  color: string;
}

// Define the shape of a project, based on the Payload CMS schema
interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image: {
    url: string;
  };
  slug?: string;
  techStack: {
    id: string;
    tech: string;
  }[];
}

// Map technology names to their corresponding icons and colors
const TECHNOLOGIES: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Framer Motion", icon: SiFramer, color: "#C2410C" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "SQL", icon: SiSqlite, color: "#003B57" },
];

const PROJECTS_CONTENT = {
  title: "My Recent Work",
  description:
    "A selection of projects that showcase my skills and passion for development.",
  projects: [
    {
      title: "Project Alpha",
      description:
        "A full-stack web application for task management with real-time updates and user authentication.",
      techStack: [
        { id: "1", tech: "React" },
        { id: "2", tech: "Next.js" },
        { id: "3", tech: "Tailwind CSS" },
      ],
      image: { url: "https://placehold.co/600x400/png" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Beta",
      description:
        "A responsive e-commerce storefront built with a modern front-end framework and a headless CMS.",
      techStack: [
        { id: "1", tech: "React" },
        { id: "2", tech: "Next.js" },
        { id: "3", tech: "MongoDB" },
      ],
      image: { url: "https://placehold.co/600x400/png" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Gamma",
      description:
        "A data visualization dashboard that processes and displays complex data sets in a user-friendly format.",
      techStack: [
        { id: "1", tech: "React" },
        { id: "2", tech: "Next.js" },
        { id: "3", tech: "Framer Motion" },
      ],
      image: { url: "https://placehold.co/600x400/png" },
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
};

const TechStackPills = ({
  techStack,
}: {
  techStack: {
    id: string;
    tech: string;
  }[];
}) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (techName: string): void => {
    setExpanded(expanded === techName ? null : techName);
  };

  return (
    <div className="flex -space-x-2">
      <AnimatePresence>
        {techStack.map((tech) => {
          const techDetails = TECHNOLOGIES.find((t) => t.name === tech.tech);
          if (!techDetails) return null;
          const isExpanded = expanded === tech.tech;
          const Icon = techDetails.icon;

          return (
            <motion.div
              key={tech.id}
              onClick={() => handleExpand(tech.tech)}
              initial={false}
              animate={{
                width: isExpanded ? "auto" : "36px",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 0.8,
              }}
              className="h-9 border bg-zinc-800 border-zinc-700 rounded-full cursor-pointer overflow-hidden"
              style={{
                minWidth: "36px",
              }}
            >
              <div className="flex items-center h-full">
                {Icon && (
                  <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                )}
                <motion.div
                  initial={false}
                  animate={{
                    width: isExpanded ? "auto" : "0px",
                    paddingRight: isExpanded ? "12px" : "0px",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 0.8,
                  }}
                  className="overflow-hidden"
                >
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.15,
                      delay: isExpanded ? 0.1 : 0,
                    }}
                    className="text-white text-sm font-medium whitespace-nowrap"
                  >
                    {tech.tech}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(
    PROJECTS_CONTENT.projects as Project[]
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const fetchedProjects = await getAllProjects();

        if (fetchedProjects && fetchedProjects.docs.length > 0) {
          setProjects(fetchedProjects.docs as unknown as Project[]);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <section id="projects" className="py-6 md:py-9 lg:py-16">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <Heading
              as="h2"
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
              Loading Projects...
            </Heading>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="py-6 md:py-9 lg:py-16 ">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <Heading
            as="h2"
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            {PROJECTS_CONTENT.title}
          </Heading>
          <motion.p
            initial={{ y: 10, opacity: 0, filter: "blur(10px" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-[700px] text-muted-foreground md:text-xl mx-auto"
          >
            {PROJECTS_CONTENT.description}
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title} // Using title as a key since slug isn't guaranteed in the fallback data
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.2,
              }}
            >
              <Card className="p-2! border-none  bg-transparent">
                <CardHeader className="p-0! bg-transparent  ">
                  <Image
                    src={project.image.url}
                    alt={project.title}
                    width={600}
                    className=" border-black rounded-md border-2 dark:border-white aspect-[4/3]"
                    height={400}
                  />
                </CardHeader>
                <Link href={`/projects/${project.slug as string}`}>
                  <CardTitle>{project.title}</CardTitle>
                </Link>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex justify-between items-center ">
                  <TechStackPills techStack={project.techStack} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
