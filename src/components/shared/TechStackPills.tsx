"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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
  SiSqlite,
} from "react-icons/si";
import { TechItem, TechProps } from "@/types";
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
export const TechStackPills = ({ techStack }: { techStack: TechProps[] }) => {
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
