import { getSingleProject } from "@/actions/actions";
import { Container } from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import MarkdownRenderer from "@/components/shared/MarkdownRenderer";
import ProjectDetailsRenderer from "@/components/shared/MarkdownRenderer";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = (await getSingleProject(slug)).docs[0];
  if (!project) notFound();

  return (
    <Container>
      <article className="mt-44 prose ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl/none max-w-4xl mx-auto text-center font-bold">
          {project.title}
        </h1>
        <MarkdownRenderer content={project.markdown as string} />
      </article>
    </Container>
  );
};

export default page;
