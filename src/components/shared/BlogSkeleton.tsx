
import { Container } from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import BlogCardSkeleton from "@/components/shared/BlogCardSkeleton";

const BlogSkeleton = () => {
  return (
    <section>
      <Container>
        <Heading as="h2" className="font-bold text-center">
          My Blog
        </Heading>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      </Container>
    </section>
  );
};

export default BlogSkeleton;
