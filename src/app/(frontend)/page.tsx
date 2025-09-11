import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { AboutSection } from "@/components/sections/About";
import { Container } from "@/components/shared/Container";
import { ContactSection } from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";
import { AboutSkeleton } from "@/components/shared/AboutSkeleton";
import { Suspense } from "react";
import { getAboutContent } from "@/actions/actions";
const page = async () => {
  const aboutContent = await getAboutContent();
  console.log(aboutContent);
  return (
    <>
      <Container>
        <Hero />
        <ProjectsSection />
        <Suspense fallback={<AboutSkeleton />}>
          <AboutSection aboutContent={aboutContent} />
        </Suspense>
        <Blog />
        <ContactSection />
      </Container>
    </>
  );
};
export default page;
