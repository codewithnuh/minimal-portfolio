import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { AboutSection } from "@/components/sections/About";
import { Container } from "@/components/shared/Container";
import { ContactSection } from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";
const page = () => {
  return (
    <>
      <Container>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <Blog />
        <ContactSection />
      </Container>
    </>
  );
};
export default page;
