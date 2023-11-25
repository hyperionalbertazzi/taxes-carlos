"use client";
import React from "react";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";
import logo from "../../public/images/Logo-C.png";

export default function Cta() {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      id="contact"
      className=" relative w-full overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto py-16 dark:bg-transparent"
    >
      <div className="w-3/5">
        <div>
          <Badge text="Contact me" />
        </div>
        <h1 className="md:text-6xl tracking-wide font-bold text-xl py-4 dark:text-white text-center md:text-left relative z-20">
          Lets start saving <br /> money today!
        </h1>
        <p className="text-center md:text-left dark:text-neutral-300 max-w-sm relative z-20 mt-2">
          Compare your options for free. As an independent agent, I guide you
          through, making sure you are not spending a penny more than you should
          be.
        </p>
      </div>

      <div className="w-2/5">
        <ContactForm />
      </div>
      <Image
        src={logo}
        alt="Carlos"
        width="800"
        height="800"
        quality="95"
        priority={true}
        className="absolute bottom-0 left-0 h-32 w-auto rounded-full object-cover"
      />
    </section>
  );
}
