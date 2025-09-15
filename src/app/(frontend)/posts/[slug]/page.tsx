import { getAllPosts, getSinglePost } from "@/actions/actions";
import { Container } from "@/components/shared/Container";
import { LexicalRenderer } from "@/components/shared/LexicalRenderer";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 60;
export async function generateStaticParams() {
  const postsData = await getAllPosts({ pageNo: 1, limit: 1000 });
  if (!postsData?.docs?.length) {
    return []; // no static params generated
  }
  return postsData.docs.map((post) => ({
    slug: String(post.slug),
  }));
}
const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = (await getSinglePost(slug)).docs[0];
  if (!post) notFound();

  return (
    <Container className="flex flex-col items-center justify-center">
      <article className="mt-44 prose dark:prose-invert accent-primary">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl/none max-w-4xl mx-auto font-bold">
          {post.title}
        </h1>
        <LexicalRenderer lexicalData={post.content as SerializedEditorState} />
      </article>
    </Container>
  );
};

export default page;
