// components/AboutSkeleton.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <section className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-5 w-72 mx-auto" />
        </div>

        {/* Profile + text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Skeleton className="h-48 w-48 rounded-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-16 rounded-full" />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
