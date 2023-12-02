import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";
import { Testimonials } from "@/components/Testimonials";
import Partner from "@/components/Partner";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main className="flex flex-col items-center px-4 w-full">
      <Intro lng={lng} />
      <Partner lng={lng} />
      <Projects lng={lng} />
      <Testimonials lng={lng} />
      <Cta lng={lng} />
    </main>
  );
}
