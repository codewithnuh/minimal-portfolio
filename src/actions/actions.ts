"use server";

import { payloadClient } from "@/lib/getPaylod";

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

export const getAllProjects = async () => {
  const payload = await payloadClient();
  const projects = await payload.find({ collection: "projects" });
  return projects;
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
    where: { slug: { equals: "learn-javascript" } },
  });
  return project;
};
