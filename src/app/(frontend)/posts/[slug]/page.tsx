import { getSinglePost, getSingleProject } from "@/actions/actions";
import { Container } from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { LexicalRenderer } from "@/components/shared/LexicalRenderer";
import MarkdownRenderer from "@/components/shared/MarkdownRenderer";
import ProjectDetailsRenderer from "@/components/shared/MarkdownRenderer";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = (await getSinglePost(slug)).docs[0];
  if (!post) notFound();

  return (
    <Container className="px-8">
      <article className="mt-44 prose dark:prose-invert accent-primary">
        <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl/none max-w-4xl mx-auto text-center font-bold">
          {post.title}
        </h1>
        {/* <MarkdownRenderer content={project.markdown as string} /> */}
        <LexicalRenderer lexicalData={post.content} />
      </article>
    </Container>
  );
};

export default page;
