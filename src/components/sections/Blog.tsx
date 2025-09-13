import React, { Suspense } from "react";
import { Container } from "../shared/Container";
import Heading from "../shared/Heading";
import { BlogCard } from "../shared/BlogCard";
import { Button } from "../ui/button";
import { Book } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/actions/actions";
import { Media, Post } from "@/payload-types";
import BlogSkeleton from "../shared/BlogSkeleton";

const Blog = async () => {
  // Fetch all blog posts
  const data = await getAllPosts();

  return (
    <section>
      <Container>
        <Heading as="h2" id="blog" className="font-bold text-center">
          My Blog
        </Heading>
        {/*
          Conditionally render content based on whether blog posts exist.
          If data is available and the array is not empty, render the blog list.
          Otherwise, display a "no content" message.
        */}
        {data && data.docs && data.docs.length > 0 ? (
          <>
            <Suspense fallback={<BlogSkeleton />}>
              <BlogList posts={data.docs} />
            </Suspense>
            {/* Conditionally render the "Read All" button only if there are more than 3 posts */}
            {data.docs.length > 3 && (
              <div className="flex items-center justify-center mt-10">
                <Button variant={"outline"} asChild>
                  <Link href={"/posts"}>
                    <span>Read All</span> <Book />
                  </Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p className="text-gray-600 mb-6">
              It seems like there are no blog posts to display. Add your first
              post in the CMS to get started.
            </p>
            <Button asChild>
              <Link href="/admin/collections/posts">Go to CMS</Link>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

// This component is now responsible for displaying the list of posts it receives as a prop.
const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mt-10 grid md:grid-cols-3 gap-4">
      {posts.slice(0, 3).map((post) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          featuredImage={"https://placehold.co/600x400/png" as unknown as Media}
          publishedDate={post.publishedDate}
          author={post.author}
          tags={post.tags}
          id={0}
          updatedAt={""}
          createdAt={""}
        />
      ))}
    </div>
  );
};

export default Blog;
