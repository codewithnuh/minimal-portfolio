import { Container } from "@/components/shared/Container";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-profile",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-background py-8 md:py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Copyright and Brand */}
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <Link href="/" className="text-xl font-bold">
            Your SaaS
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="group rounded-full p-2 transition-colors duration-300 hover:bg-primary-foreground hover:text-primary"
              >
                <IconComponent className="h-6 w-6 transition-transform group-hover:scale-110" />
              </Link>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};
