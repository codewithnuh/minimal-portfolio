"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../shared/ThemeSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Menu, X } from "lucide-react";
function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string }[];
}) {
  const [mounted, setMounted] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    let el = document.getElementById("mobile-menu-root") as HTMLElement | null;
    if (!el) {
      el = document.createElement("div");
      el.id = "mobile-menu-root";
      document.body.appendChild(el);
    }
    setRoot(el);
  }, []);

  if (!mounted || !root) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop overlay */}
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-background/80"
            onClick={onClose}
            style={{
              backdropFilter: "blur(8px) saturate(120%)",
              WebkitBackdropFilter: "blur(8px) saturate(120%)",
            }}
            aria-hidden
          />

          {/* menu panel */}
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed left-1/2 top-[72px] z-50 w-[92%] -translate-x-1/2 md:hidden rounded-2xl border border-border shadow-lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(4px) saturate(120%)",
              WebkitBackdropFilter: "blur(4px) saturate(120%)",
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* header with close button */}
            <div className="flex items-center justify-end px-4 py-2 border-b border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* nav items */}
            <ul className="py-6 space-y-4 text-center">
              {navItems.map((item, idx) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 text-lg hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>,
    root
  );
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        animate={{
          width: scrolled ? "75%" : "85%",
          y: scrolled ? 10 : 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="fixed mx-auto inset-x-0 -top-4 z-40 max-w-2xl w-[85%] md:w-full 
                   flex items-center justify-between px-4 py-2 
                   bg-secondary/60 backdrop-blur-3xl rounded-full mt-10 
                   border-b border-border"
      >
        {/* Logo */}
        <Avatar>
          <AvatarImage src="https://placehold.co/40x40/png" alt="logo" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul
              onMouseLeave={() => setHovered(null)}
              className="hidden md:flex items-center space-x-3"
            >
              {navItems.map((item, idx) => (
                <li key={item.label + idx} onMouseEnter={() => setHovered(idx)}>
                  <Link href={item.href} className="relative px-4 py-2">
                    {hovered === idx && (
                      <motion.div
                        layoutId="hovered"
                        className="absolute inset-0 rounded-full bg-gray-200 dark:bg-neutral-800"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </motion.header>

      {/* Render the mobile menu through a portal so backdrop-filter works reliably */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};
