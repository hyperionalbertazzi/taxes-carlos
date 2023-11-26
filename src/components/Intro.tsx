"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Badge } from "./Badge";
import AnimatedNumbers from "./AnimatedNumbers";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-5xl mx-auto sm:mb-0 scroll-mt-[100rem] self-center flex flex-col md:flex-row mt-4 w-full xs:w-11/12"
    >
      <div className="flex flex-col w-full md:w-3/5 max-md:mb-5">
        <div className="w-fit flex items-center">
          <Badge text="We are launching soon" />
        </div>
        <motion.h1
          className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl py-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cultivate your <br />
          brand and expand <br /> your business
        </motion.h1>

        <motion.p
          className="py-4 text-sm xs:text-base xl:text-lg w-11/12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our expertise lies in fostering business expansion through strategic
          marketing consultancy.
        </motion.p>

        <motion.div
          className="flex justify-left gap-3 text-lg mt-4 font-medium w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <div className="flex max-lg:flex-col gap-3">
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-between gap-2 text-base rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition lg:w-fit"
              onClick={() => {
                // setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span>Contact me here{" "}</span>
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="#about"
              className="group bg-white px-7 py-3 flex items-center text-base justify-between gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 lg:w-fit"
              onClick={() => {
                // setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span>Discover{" "}</span>
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="flex max-lg:flex-col gap-3">
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://linkedin.com"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center xs:justify-center w-full md:w-2/5">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="800"
              height="800"
              quality="95"
              priority={true}
              className="h-60 xs:h-72 md:h-64 lg:h-72 w-auto rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-14 md:-right-10 lg:-right-20 text-4xl flex flex-col px-5 py-3 bg-slate-500 rounded-2xl border-[0.25rem] border-white shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <div className="font-bold text-white text-left text-2xl md:text-3xl lg:text-4xl">
              <AnimatedNumbers targetValue={12} />+
            </div>
            <p className="text-white text-sm sm:text-base">Years of experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
