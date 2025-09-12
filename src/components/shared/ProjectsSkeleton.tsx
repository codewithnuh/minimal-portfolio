
import { Container } from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import ProjectCardSkeleton from "@/components/shared/ProjectCardSkeleton";

const ProjectsSkeleton = () => {
  return (
    <section id="projects">
      <Container>
        <div className="text-center my-16 space-y-4">
          <Heading
            as="h2"
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            My Recent Work
          </Heading>
          <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
            A selection of projects that showcase my skills and passion for
            development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSkeleton;
