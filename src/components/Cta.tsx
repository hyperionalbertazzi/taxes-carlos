"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";
import logo from "../../public/images/Logo-C.png";
import { useInView } from "react-intersection-observer";

export default function Cta() {
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
    if (inView && !animated) {
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
            <Badge text="Contact me" />
          </div>
          <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl z-20">
            Let&apos;s start saving money today!
          </h1>
          <p className="dark:text-neutral-300 max-w-sm relative z-20 mt-6 text-sm xs:text-base xl:text-lg">
            Compare your options for free. As an independent agent, I guide you
            through, making sure you are not spending a penny more than you
            should be.
          </p>
        </div>

        <div className="flex flex-col mt-2 md:mt-0 md:justify-center w-full md:w-1/2 lg:w-2/5">
          {animated && <ContactForm />}
        </div>
      </div>
    </section>
  );
}
