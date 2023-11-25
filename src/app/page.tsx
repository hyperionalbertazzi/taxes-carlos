import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-divider";
import Cta from "@/components/Cta";
import { Testimonials } from "@/components/Testimonials";
import Partner from "@/components/Partner";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Partner />
      <Projects />
      <Testimonials />
      <Cta />
    </main>
  );
}
