"use server";

import { payloadClient } from "@/lib/getPaylod";

export const getHeroContent = async () => {
  const payload = await payloadClient();
  const heroContent = await payload.findGlobal({ slug: "hero" });
  return heroContent;
};
