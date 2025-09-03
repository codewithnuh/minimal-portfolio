"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Heading from "../shared/Heading";

export function AboutSection() {
  return (
    <section className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h2" className="font-extrabold mb-3">
            About Me
          </Heading>
          <p className=" text-muted-foreground md:text-xl max-w-2xl  mx-auto">
            Full-Stack Developer & Creative Problem Solver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-24 bg-card border-border">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-muted border-4 border-border overflow-hidden">
                <Image
                  width={192}
                  height={192}
                  src="https://placehold.co/600x400/png"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-lg">
                I'm a passionate full-stack developer with over 5 years of
                experience crafting digital experiences that blend functionality
                with elegant design. My expertise spans modern web technologies,
                from React and Next.js to Node.js and cloud architecture.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating
                user-centered solutions that make a real impact. When I'm not
                coding, you'll find me exploring new technologies, contributing
                to open source, or mentoring aspiring developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "AWS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors group"
            >
              Get In Touch
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-lg font-medium border-border hover:bg-muted transition-colors bg-transparent"
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
