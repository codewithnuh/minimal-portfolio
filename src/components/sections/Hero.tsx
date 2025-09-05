"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { motion } from "motion/react";
import Heading from "@/components/shared/Heading";
import { Highlighter } from "@/components/shared/Highlighter";
import { useEffect, useState } from "react";
import { getHeroContent } from "@/actions/actions";

const HERO_CONTENT = {
  greeting: "Hello, I'm John Doe.",
  headline: "Turning Ideas Into Captivating Web Experiences",
  description:
    "Full-stack developer crafting elegant, high-performance applications that solve complex problems with intuitive design.",
  primaryButton: {
    text: "Explore My Projects",
    href: "#projects",
  },
  secondaryButton: {
    text: "Let's Talk",
    href: "#contact",
  },
};

// Variants for staggered animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Hero = () => {
  const [heroContent, setHeroContent] = useState(HERO_CONTENT);
  useEffect(() => {
    const fetchHeroContend = async () => {
      const data = await getHeroContent();
      if (data) setHeroContent(data);
    };
  }, [heroContent]);
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="z-10 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-8 text-center"
          >
            <div className="space-y-4">
              <Highlighter
                action="underline"
                color="orange"
                animationDuration={1500}
                iterations={3}
              >
                <Heading as="h3" className=" text-primary/80 ">
                  {heroContent.greeting}
                </Heading>
              </Highlighter>
              <Heading
                duration={0.5}
                className="text-4xl font-poppins font-bold  sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl mx-auto"
              >
                {heroContent.headline}
              </Heading>
              <motion.p
                initial={{ y: 10, opacity: 0, filter: "blur(10px" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className=" text-muted-foreground md:text-xl max-w-2xl  mx-auto"
              >
                {heroContent.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 10, opacity: 0, filter: "blur(10px" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="group px-6 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href={heroContent.primaryButton.href}>
                    {heroContent.primaryButton.text}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  asChild
                  className="px-6 py-4 rounded-full w-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href={heroContent.secondaryButton.href}>
                    {heroContent.secondaryButton.text}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
