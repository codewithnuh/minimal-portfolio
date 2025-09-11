"use server";

import { payloadClient } from "@/lib/getPaylod";
import { About } from "@/payload-types";

export const getHeroContent = async () => {
  const payload = await payloadClient();
  const heroContent = await payload.findGlobal({ slug: "hero" });
  return heroContent;
};

export const getAboutContent = async () => {
  const payload = await payloadClient();
  const aboutContent = await payload.findGlobal({ slug: "about" });
  return aboutContent;
};

export const getAllProjects = async ({
  pageNo = 1,
  limit = 6,
}: {
  pageNo?: number;
  limit: number;
}) => {
  const payload = await payloadClient();
  const projects = await payload.find({
    collection: "projects",
    limit,
    page: pageNo,
  });
  return projects;
};
export const getAllPosts = async ({
  pageNo = 1,
  limit = 6,
}: {
  pageNo?: number;
  limit?: number;
} = {}) => {
  const payload = await payloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: limit,
    page: pageNo,
  });
  return posts;
};

export const getSingleProject = async (slug: string) => {
  const payload = await payloadClient();
  const project = await payload.find({
    collection: "projects",
    where: { slug: { equals: slug } },
  });
  return project;
};
export const getSinglePost = async (slug: string) => {
  const payload = await payloadClient();
  const project = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
  });
  return project;
};
