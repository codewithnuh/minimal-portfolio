import { getAllPosts } from "@/actions/actions";
import ClientPostsPage from "@/components/shared/ClientPostsPage";
import { Post } from "@/payload-types";
export const revalidate = 60;

export async function generateStaticParams() {
  const postsData = await getAllPosts({ pageNo: 1, limit: 6 });
  return postsData.docs.map((post) => ({
    id: String(post.id),
  }));
}
export default async function Page() {
  const postsData = await getAllPosts({ pageNo: 1, limit: 6 });
  return (
    <ClientPostsPage
      initialPosts={postsData.docs}
      totalPages={postsData.totalPages}
    />
  );
}
