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
import { ProjectCard } from "@/components/shared/ProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

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
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container className="mt-20">
      <Heading as="h1" className="text-center mb-12">
        My Projects
      </Heading>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: projectsPerPage }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[225px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={handlePreviousPage}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={handleNextPage}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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
          <Heading as="h1" className="text-center mb-12">
            My Projects
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[225px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      }
    >
      <ProjectsPage />
    </Suspense>
  );
};

export default Projects;