import { getAllProjects } from "@/actions/actions";
import ClientProjectsPage from "@/components/shared/ClientProjectsPage";

export async function generateStaticParams() {
  const projectsData = await getAllProjects({ pageNo: 1, limit: 6 });
  return projectsData.docs.map((project) => ({
    id: String(project.id),
  }));
}
export default async function Page() {
  const projectsData = await getAllProjects({ pageNo: 1, limit: 6 });

  return (
    <ClientProjectsPage
      initialProjects={projectsData.docs}
      totalPages={projectsData.totalPages}
    />
  );
}
