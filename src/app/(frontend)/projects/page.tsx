"use client";
import { getAllProjects } from "@/actions/actions";
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
import { Project } from "@/payload-types";
import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "@/components/shared/ProjectCard";
const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsPerPage = 1;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects.docs);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 100);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 100);
    }
  };

  return (
    <Container className="mt-28">
      <Heading as="h1" animateOnce className="text-center mb-12 font-mono ">
        My Projects
      </Heading>

      {loading ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: projectsPerPage }).map((_, index) => (
            <motion.div
              key={index}
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
          ))}
        </motion.div>
      ) : (
        <>
          {/* Projects Grid with smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <ProjectCard idx={index} project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Pagination className="mt-12">
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
                            currentPage === 1 || isTransitioning
                              ? "pointer-events-none opacity-50"
                              : "hover:bg-accent"
                          }
                        `}
                      />
                    </motion.div>
                  </PaginationItem>

                  {/* Page indicator */}
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
                            currentPage === totalPages || isTransitioning
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
        </>
      )}
    </Container>
  );
};

const Projects = () => {
  return (
    <Suspense
      fallback={
        <Container className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h1" className="text-center mb-12">
              My Projects
            </Heading>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
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
            ))}
          </motion.div>
        </Container>
      }
    >
      <ProjectsPage />
    </Suspense>
  );
};

export default Projects;
