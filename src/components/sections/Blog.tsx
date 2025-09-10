import React from "react";
import { Container } from "../shared/Container";
import Heading from "../shared/Heading";
import { BlogCard } from "../shared/BlogCard";
import { Button } from "../ui/button";
import { Book } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/actions/actions";
import { Media } from "@/payload-types";

const Blog = async () => {
  const data = await getAllPosts();

  return (
    <section>
      <Container>
        <Heading as="h2" className="font-bold text-center">
          My Blog
        </Heading>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {data.docs.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              featuredImage={
                "https://placehold.co/600x400/png" as unknown as Media
              }
              publishedDate={post.publishedDate}
              author={post.author}
              tags={post.tags}
              id={0}
              updatedAt={""}
              createdAt={""}
            />
          ))}
        </div>
        <div className="flex item-center justify-center mt-10">
          <Button variant={"outline"} asChild>
            <Link href={"/posts"}>
              <span>Read All</span> <Book />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
