import React from "react";
import { Container } from "../shared/Container";
import Heading from "../shared/Heading";
import { BlogCard } from "../shared/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      slug: "the-future-of-saas",
      title: "The Future of AI in SaaS",
      description:
        "Discover how artificial intelligence is revolutionizing the SaaS industry, from personalized user experiences to automated workflows.",
      date: "2024-09-01",
      image: "https://placehold.co/600x400/png",
    },
    {
      slug: "navigating-b2b-marketing",
      title: "Navigating the World of B2B Marketing",
      description:
        "A comprehensive guide to developing a winning B2B marketing strategy, covering everything from content creation to lead generation.",
      date: "2024-08-20",
      image: "https://placehold.co/600x400/png",
    },
    {
      slug: "low-code-development",
      title: "The Rise of Low-Code Development",
      description:
        "Explore how low-code platforms are empowering developers and non-technical users to build applications faster than ever before.",
      date: "2024-07-15",
      image: "https://placehold.co/600x800/png",
    },
  ];
  return (
    <section>
      <Container>
        <Heading as="h2" className="font-bold text-center">
          My Blog
        </Heading>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
