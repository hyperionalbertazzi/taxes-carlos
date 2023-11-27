"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";
import logo from "../../public/images/Logo-C.png";

export default function Cta() {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      ref={ref}
      id="contact"
      className="flex items-center justify-center min-h-screen w-full"
    >
      <div className="relative overflow-hidden max-w-5xl flex flex-col md:flex-row mb-20 self-center w-11/12 gap-6">
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="mb-4">
            <Badge text="Contact me" />
          </div>
          <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl z-20">
            Let&apos;s start saving money today!
          </h1>
          <p className="dark:text-neutral-300 max-w-sm relative z-20 mt-6 text-sm xs:text-base xl:text-lg">
            Compare your options for free. As an independent agent, I guide you
            through, making sure you are not spending a penny more than you should
            be.
          </p>
          {/* <Image
          src={logo}
          alt="Carlos"
          width="800"
          height="800"
          quality="95"
          priority={true}
          className="h-32 w-auto rounded-full object-cover max-md:hidden mt-4"
        /> */}
        </div>

        <div className="flex flex-col md:justify-center w-full md:w-1/2 lg:w-2/5">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
