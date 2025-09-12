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
    <footer className="w-full border-t border-border bg-background py-6">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Your SaaS. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
};
