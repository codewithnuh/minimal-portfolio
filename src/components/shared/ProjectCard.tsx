"use client";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Media, Project } from "@/payload-types";
import Image from "next/image";
import { TechStackPills } from "@/components/shared/TechStackPills";
import { TechProps } from "@/types";
const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  return (
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
            src={(project.image as Media).url as string}
            alt={project.title}
            width={600}
            className=" border-black rounded-md border-2 dark:border-white aspect-[4/3]"
            height={400}
          />
        </CardHeader>
        <Link href={`/projects/${project.slug}`}>
          <CardTitle>{project.title.slice(0, 30) + "..."}</CardTitle>
        </Link>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex justify-between items-center ">
          <TechStackPills techStack={project.techStack as TechProps[]} />
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
