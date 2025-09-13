import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading from "@/components/shared/Heading";
import { getAllProjects } from "@/actions/actions";
import { Project } from "@/payload-types";
import ProjectCard from "../shared/ProjectCard";
import { Suspense } from "react";
import ProjectsSkeleton from "../shared/ProjectsSkeleton";

const PROJECTS_CONTENT = {
  title: "My Recent Work",
  description:
    "A selection of projects that showcase my skills and passion for development.",
};
export const revalidate = 60;
export const ProjectsSection = async () => {
  const projects = await getAllProjects({ limit: 3, pageNo: 1 });

  return (
    <section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <Heading
            as="h2"
            id="projects"
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            {PROJECTS_CONTENT.title}
          </Heading>
          <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
            {PROJECTS_CONTENT.description}
          </p>
        </div>
        {projects && projects.docs && projects.docs.length > 0 ? (
          <>
            <Suspense fallback={<ProjectsSkeleton />}>
              <ProjectsList projects={projects.docs} />
            </Suspense>
            {/* Conditionally render the "View All" button if there are more than 3 projects */}
            {projects.docs.length > 3 && (
              <div className="w-full flex item-center mt-10 justify-center">
                <Button variant={"outline"} asChild>
                  <Link href={"/projects"}> View All</Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">
              No Projects Added Yet
            </h2>
            <p className="text-gray-600 mb-6">
              It seems like there are no projects to display. Add your first
              project in the CMS to get started.
            </p>
            <Button asChild>
              <Link href="/admin/collections/projects">Go to CMS</Link>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

const ProjectsList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} idx={idx} project={project as Project} />
      ))}
    </div>
  );
};
