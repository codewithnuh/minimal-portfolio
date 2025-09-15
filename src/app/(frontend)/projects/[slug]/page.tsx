import { getAllProjects, getSingleProject } from "@/actions/actions";
import { Container } from "@/components/shared/Container";
import { LexicalRenderer } from "@/components/shared/LexicalRenderer";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 60;
export async function generateStaticParams() {
  const projectsData = await getAllProjects({ pageNo: 1, limit: 1000 });
  if (!projectsData?.docs?.length) {
    return [];
  }
  return projectsData.docs.map((project) => ({
    slug: String(project.slug),
  }));
}
const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = (await getSingleProject(slug)).docs[0];
  if (!project) notFound();

  return (
    <Container className="px-8">
      <article className="mt-44 prose dark:prose-invert ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl/none max-w-4xl mx-auto font-bold">
          {project.title}
        </h1>
        {/* <MarkdownRenderer content={project.markdown as string} /> */}
        <LexicalRenderer lexicalData={project.details} />
      </article>
    </Container>
  );
};

export default page;
