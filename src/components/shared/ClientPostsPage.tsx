"use client";

import { useState } from "react";
import { getAllPosts } from "@/actions/actions";
import { Container } from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/payload-types";
import { motion, AnimatePresence } from "motion/react";
import { BlogCard } from "@/components/shared/BlogCard";

interface ClientPostsPageProps {
  initialPosts: Post[];
  totalPages: number;
}

const ClientPostsPage: React.FC<ClientPostsPageProps> = ({
  initialPosts,
  totalPages,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 6;

  const handleNextPage = async () => {
    if (currentPage < totalPages && !loading) {
      setLoading(true);
      const nextPage = currentPage + 1;
      try {
        const nextPostsData = await getAllPosts({
          pageNo: nextPage,
          limit: postsPerPage,
        });
        setPosts(nextPostsData.docs);
        setCurrentPage(nextPage);
      } catch (error) {
        console.error("Failed to fetch next page:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1 && !loading) {
      setLoading(true);
      const prevPage = currentPage - 1;
      try {
        const prevPostsData = await getAllPosts({
          pageNo: prevPage,
          limit: postsPerPage,
        });
        setPosts(prevPostsData.docs);
        setCurrentPage(prevPage);
      } catch (error) {
        console.error("Failed to fetch previous page:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container className="mt-28">
      <Heading as="h1" animateOnce className="text-center mb-12 font-mono ">
        My Posts
      </Heading>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {loading
            ? Array.from({ length: postsPerPage }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  className="flex flex-col space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Skeleton className="h-[225px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </motion.div>
              ))
            : posts.map((post) => <BlogCard key={post.id} {...post} />)}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Pagination className="mt-12 mb-5">
            <PaginationContent>
              <PaginationItem>
                <motion.div
                  whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                  whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
                >
                  <PaginationPrevious
                    onClick={handlePreviousPage}
                    className={`
                      transition-all duration-200
                      ${
                        currentPage === 1 || loading
                          ? "pointer-events-none opacity-50"
                          : "hover:bg-accent"
                      }
                    `}
                  />
                </motion.div>
              </PaginationItem>
              <motion.div
                className="flex items-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
              </motion.div>
              <PaginationItem>
                <motion.div
                  whileHover={{
                    scale: currentPage === totalPages ? 1 : 1.05,
                  }}
                  whileTap={{
                    scale: currentPage === totalPages ? 1 : 0.95,
                  }}
                >
                  <PaginationNext
                    onClick={handleNextPage}
                    className={`
                      transition-all duration-200
                      ${
                        currentPage === totalPages || loading
                          ? "pointer-events-none opacity-50"
                          : "hover:bg-accent"
                      }
                    `}
                  />
                </motion.div>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </motion.div>
      )}
    </Container>
  );
};

export default ClientPostsPage;
