"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "@/app/i18n/client";

export default function Cta({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'contact');
  const { ref } = useSectionInView("Contact");
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
      id="contact"
      className="flex items-center justify-center min-h-screen w-full"
    >
      <div
        className={`relative overflow-hidden max-w-5xl flex flex-col md:flex-row mb-20 self-center w-11/12 gap-6 ${!animated
          ? "hidden"
          : "animate-fade-up animate-duration-1000 sm:animate-delay-500 animate-delay-200"
          }`}
      >
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="mb-4">
            <Badge text={t('badge')} />
          </div>
          <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl z-20">
            {t('title')}
          </h1>
          <p className="dark:text-neutral-300 max-w-sm relative z-20 mt-6 text-sm xs:text-base xl:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col mt-2 md:mt-0 md:justify-center w-full md:w-1/2 lg:w-2/5">
          {animated && <ContactForm lng={lng} t={t} />}
        </div>
      </div>
    </section>
  );
}
