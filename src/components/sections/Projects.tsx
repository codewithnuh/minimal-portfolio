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
} from "react-icons/si";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Heading from "../shared/Heading";
const TECHNOLOGIES = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "A React framework for building full-stack web applications. Optimized for performance and SEO.",
    color: "#000000",
  },
  {
    name: "React",
    icon: SiReact,
    description:
      "A JavaScript library for building user interfaces. I use it to create interactive and stateful components.",
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces. I use it for fast, responsive styling.",
    color: "#38B2AC",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description:
      "A JavaScript runtime for building scalable server-side applications. I use it for my back-end services and APIs.",
    color: "#68A063",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description:
      "A NoSQL database for flexible data storage. I use it to handle large volumes of unstructured data.",
    color: "#47A248",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    description:
      "A production-ready motion library for React. I use it to bring my UIs to life with smooth animations.",
    color: "#C2410C",
  },
];
// Define a constant object for the projects section content
const PROJECTS_CONTENT = {
  title: "My Recent Work",
  description:
    "A selection of projects that showcase my skills and passion for development.",
  projects: [
    {
      title: "Project Alpha",
      description:
        "A full-stack web application for task management with real-time updates and user authentication.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      image: "https://placehold.co/600x400/png",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Project Beta",
      description:
        "A responsive e-commerce storefront built with a modern front-end framework and a headless CMS.",
      techStack: ["React", "Next.js", "MongoDB"],
      image: "https://placehold.co/600x400/png",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Project Gamma",
      description:
        "A data visualization dashboard that processes and displays complex data sets in a user-friendly format.",
      techStack: ["React", "Next.js", "Framer Motion"],
      image: "https://placehold.co/600x400/png",
      demoLink: "#",
      githubLink: "#",
    },
  ],
};

const TechStackPills = ({ techStack }: { techStack: string[] }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  interface Tech {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    color: string;
  }

  interface Project {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    demoLink: string;
    githubLink: string;
  }

  const handleExpand = (techName: string): void => {
    setExpanded(expanded === techName ? null : techName);
  };

  return (
    <div className="flex -space-x-2">
      <AnimatePresence>
        {techStack.map((techName) => {
          const tech = TECHNOLOGIES.find((t) => t.name === techName);
          if (!tech) return null;
          const isExpanded = expanded === techName;
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              onClick={() => handleExpand(tech.name)}
              initial={false} // Prevents initial animation flash
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
                {/* Icon with consistent size */}
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Animated text container */}
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
                    {tech.name}
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
          {PROJECTS_CONTENT.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.2, // This is the key part for staggering!
              }}
            >
              <Card className="p-2! border-none bg-transparent">
                <CardHeader className="p-0! bg-transparent">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    className="rounded-md"
                    height={400}
                  />
                </CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <TechStackPills techStack={project.techStack} />
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
