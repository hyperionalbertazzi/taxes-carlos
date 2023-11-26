"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";

export const projectss = [
  {
    title: "Taxes Corporativos Personales",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    id: 1,
  },
  {
    title: "Taxes Corporativos",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    id: 2,
  },
  {
    title: "Reembolsos Rápidos",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    id: 3,
  },
  {
    title: "Registro de Empresas",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    id: 4,
  },
  {
    title: "Bookkeping",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    id: 5,
  },
  {
    title: "Seguros de Salud",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    id: 6,
  },
  // ...rest of the projects
];

export default function Projects() {
  const { ref } = useSectionInView("Services", 0.5);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="services" className="max-w-5xl flex flex-col mb-20 self-center w-11/12">
      <div className="mb-4">
        <Badge text="Services" />
      </div>
      <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl dark:text-white">
        An Agent You <br /> Can Count On
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 pt-4 w-full -mx-2">
        {projectss.map((project, idx) => (
          <div
            key={project?.id}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-200/[0.8] dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-200/[0.2] dark:from-slate-800 dark:to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="dark:text-zinc-100 font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 dark:text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
