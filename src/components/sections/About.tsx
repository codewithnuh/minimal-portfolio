"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Heading from "@/components/shared/Heading";

import { getAboutContent } from "@/actions/actions";
import { About, Media } from "@/payload-types";
import Link from "next/link";

export function AboutSection({ aboutContent }: { aboutContent: About }) {
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
            {aboutContent.title}
          </Heading>
          <p className=" text-muted-foreground md:text-xl max-w-2xl  mx-auto">
            {aboutContent.subtitle}
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
                  src={
                    (aboutContent.profileImage as Media)?.url ||
                    "https://placehold.co/600x400/png"
                  }
                  alt={
                    (aboutContent.profileImage as Media)?.alt || "About Image"
                  }
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
              {aboutContent.aboutParagraphs?.map((para, index) => (
                <p
                  key={index}
                  className="text-foreground leading-relaxed text-lg"
                >
                  {para.text}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {aboutContent.skills?.map(
                (skill) =>
                  skill.skill && ( // Ensure skill.skill is not null or undefined
                    <span
                      key={skill.skill}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {skill.skill}
                    </span>
                  )
              )}
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
              asChild
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              <Link
                href={aboutContent.socialLinks?.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              <Link
                href={aboutContent.socialLinks?.linkedinUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              <a href={aboutContent.socialLinks?.mailToUrl || "#"}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {aboutContent.ctaButtons?.map((button) => (
              <Button
                asChild
                key={button.text}
                size="lg"
                variant={button.variant === "outline" ? "outline" : "default"}
                className="px-8 py-3 rounded-lg font-medium transition-colors group"
              >
                <a href={button.href || "#"}>
                  {button.text}
                  {button.variant === "default" && (
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
