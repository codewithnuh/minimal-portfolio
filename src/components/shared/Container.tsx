import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`max-w-3xl mx-auto w-[90%] md:px-4 ${className}`)}>
      {children}
    </div>
  );
};
