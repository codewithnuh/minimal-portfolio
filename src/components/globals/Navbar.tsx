"use client"; // This is needed if you are using Next.js App Router for client-side state
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../shared/ThemeSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <motion.header
      animate={{
        width: scrolled ? "75%" : "85%",
        y: scrolled ? 10 : 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="fixed mx-auto inset-x-0 -top-4 z-40  max-w-2xl w-[85%] md:w-full flex items-center justify-between px-4 py-2 bg-secondary/60 backdrop-blur-3xl rounded-full mt-10 border-b border-border"
    >
      {/* Title or Logo */}
      <Avatar>
        <AvatarImage src="https://placehold.co/40x40/png" alt="logo" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex items-center md:justify-between  space-x-4  ">
        {/* Desktop Navigation */}
        <div className="h-3 bg-transparent"></div>
        <nav className="hidden md:block">
          <ul
            onMouseLeave={() => setHovered(null)}
            className="hidden md:flex w-full items-center justify-center space-x-3"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/", label: "About" },
              { href: "/", label: "Blog" },
              { href: "/", label: "Contact" },
            ].map((item, idx) => (
              <li key={item.label + idx} onMouseEnter={() => setHovered(idx)}>
                <Link href={item.href} className="relative px-4 py-2 ">
                  {hovered === idx && (
                    <motion.div
                      layoutId="hovered"
                      className="absolute inset-0 h-full w-full rounded-full bg-gray-200 dark:bg-neutral-800"
                    />
                  )}
                  <span className="relative"> {item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <ModeToggle />

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-[65px] left-0 w-full md:hidden bg-background border-b border-border shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="w-full text-center">
              <Link
                href="/"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/about"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/contact"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};
