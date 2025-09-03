"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const Heading = ({
  as: Tag = "h1",
  duration = 0.3,
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  duration?: number;
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = {
    h1: "text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl mx-auto",
    h2: "text-3xl font-semibold sm:text-4xl md:text-5xl max-w-3xl mx-auto",
    h3: "text-2xl font-semibold sm:text-3xl max-w-2xl mx-auto",
    h4: "text-xl font-semibold sm:text-2xl",
    h5: "text-lg font-medium sm:text-xl",
    h6: "text-base font-medium sm:text-lg",
  };

  const selectedClasses = variants[Tag] || variants.h1;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration, ease: "easeInOut" }}
    >
      <Tag className={cn(selectedClasses, className)}>{children}</Tag>
    </motion.div>
  );
};

export default Heading;
