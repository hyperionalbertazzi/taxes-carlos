"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useEffect, useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "@/app/i18n/client";

export default function Projects({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "services");
  const { ref } = useSectionInView("#services", 0.5);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const {
    ref: viewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.07,
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  return (
    <section
      ref={(el) => {
        ref(el);
        viewRef(el);
      }}
      id="services"
      className="flex items-center justify-center min-h-screen w-full"
    >
      <div
        className={`max-w-5xl flex flex-col mb-20 self-center w-11/12 ${
          !animated
            ? "hidden"
            : "animate-fade-up animate-duration-1000 sm:animate-delay-500 animate-delay-200"
        }`}
      >
        <div className="mb-4">
          <Badge text="Services" />
        </div>
        <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl dark:text-white">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 pt-4 w-full -mx-2">
          {[...Array(6)].map((value, idx: any) => (
            <div
              key={idx}
              className="relative group block p-2 w-full"
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
                      {t(`service_${idx + 1}_title`)}
                    </h4>
                    <p className="mt-8 dark:text-zinc-400 tracking-wide leading-relaxed text-sm">
                      {t(`service_${idx + 1}_description`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
