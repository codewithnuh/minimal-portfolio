import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { AboutSection } from "@/components/sections/About";
import { Container } from "@/components/shared/Container";
import { ContactSection } from "@/components/sections/Contact";
const page = () => {
  return (
    <>
      <Container>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </Container>
    </>
  );
};
export default page;
