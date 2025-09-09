"use client";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Heading from "@/components/shared/Heading";
import { getAllProjects } from "@/actions/actions";
import { Project } from "@/payload-types";
import ProjectCard from "../shared/ProjectCard";

// Define the shape of a technology item, with an optional icon

// Define the shape of a project, based on the Payload CMS schema

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
      <section id="projects">
        <Container>
          <div className="flex items-center justify-center mb-16 space-y-4">
            <div className="border-2 border-primary rounded-full w-10 h-10 border-l-0 animate-spin "></div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects">
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
          {projects.slice(0, 3).map((project, idx) => (
            <ProjectCard idx={idx} project={project} />
          ))}
        </div>
        <div className="w-full flex item-center mt-10  justify-center ">
          <Button variant={"outline"} asChild>
            <Link href={"/projects"}> View All</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};
