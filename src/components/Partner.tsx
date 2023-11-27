"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Badge } from "./Badge";
import { useInView } from "react-intersection-observer";

export default function Partner() {
  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
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
      id="about"
      className="flex items-center justify-center min-h-screen w-full"
    >
      <div
        className={`max-w-5xl flex flex-col py-20 self-center w-11/12 ${
          !animated
            ? "hidden"
            : "animate-fade-up animate-duration-1000 sm:animate-delay-500 animate-delay-200"
        }`}
      >
        <div className="w-full pb-12 border-b border-black dark:border-white">
          <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl">
            Tailored financial solutions with Carlos Albertazzi
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col w-11/12 text-sm xs:text-base xl:text-lg">
            <p className="max-w-xl pt-12 pb-4 lg:pb-12">
              With X years of experience in helping people through a highly
              individualized approach to their health and financial needs, I
              specialize in offering diverse strategies that align with your
              specific requirements while taking utmost care of your wallet.
            </p>
            <div className="flex flex-col text-base xl:text-lg lg:flex-row items-left lg:items-center gap-2 sm:gap-12 max-sm:mt-4">
              <div className="flex flex-row items-center space-x-2">
                <MdOutlineDone className="w-6 h-6" />
                <p className="font-medium">Personal & Business taxes</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <MdOutlineDone className="w-6 h-6" />
                <p className="font-medium">Health Insurances</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <MdOutlineDone className="w-6 h-6" />
                <p className="font-medium">Company Registration</p>
              </div>
            </div>
          </div>
          <Link
            href="#services"
            className="relative h-[45px] mt-6 lg:mt-0 w-full lg:h-[245px] lg:w-1/12 bg-slate-800 flex items-center justify-center hover:cursor-pointer group"
          >
            <div className=" absolute left-0 top-0 w-0 h-full transition-all duration-500 ease-in group-hover:w-full shadow-black/[0.03] backdrop-blur-[0.5rem] bg-gray-950 bg-opacity-75" />
            <LuArrowDownRight className="w-6 h-6 lg:w-10 lg:h-10 text-white z-10 rotate-45" />
          </Link>
        </div>
      </div>
    </section>
  );
}
