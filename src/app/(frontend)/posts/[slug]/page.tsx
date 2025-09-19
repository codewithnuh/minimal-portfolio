import { Container } from "@/components/shared/Container";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <Container className="flex flex-col items-center justify-center">
      <article className="mt-44 prose dark:prose-invert accent-primary">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl/none max-w-4xl mx-auto font-bold">
          Post {slug}
        </h1>
      </article>
    </Container>
  );
};

export default page;
