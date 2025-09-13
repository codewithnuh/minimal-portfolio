import { getAllProjects } from "@/actions/actions";
import ClientProjectsPage from "@/components/shared/ClientProjectsPage";

export const revalidate = 60;
export default async function Page() {
  const projectsData = await getAllProjects({ pageNo: 1, limit: 6 });

  return (
    <ClientProjectsPage
      initialProjects={projectsData.docs}
      totalPages={projectsData.totalPages}
    />
  );
}
