import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../shared/Container";

// Define a constant object for the hero section content
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

export const Hero = () => {
  return (
    <section className="relative w-full py-24 md:py-32   overflow-hidden">
      <Container>
        <div className="z-10 relative">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary/80 tracking-wide">
                {HERO_CONTENT.greeting}
              </h2>
              <h1 className="text-4xl leading-2.5 font-poppins font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl mx-auto">
                {HERO_CONTENT.headline}
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                {HERO_CONTENT.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                className="group px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href={HERO_CONTENT.primaryButton.href}>
                  {HERO_CONTENT.primaryButton.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="px-6 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href={HERO_CONTENT.secondaryButton.href}>
                  {HERO_CONTENT.secondaryButton.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
