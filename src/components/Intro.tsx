"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import Foto from "../../public/images/carlos-foto.jpg";
import { useInView } from "react-intersection-observer";
import SectionDivider from "./Section-divider";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const {
    ref: viewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.01,
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
      id="home"
      className="relative flex items-center justify-center h-screen w-full"
    >
      <div className="mb-28 max-w-5xl mx-auto self-center flex flex-col md:flex-row w-full xs:w-11/12">
        <div className="flex flex-col w-full md:w-3/5 max-md:mb-5">
          <motion.div
            className="w-fit flex items-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Badge text="Taxes & Insurance" />
          </motion.div>
          <motion.h1
            className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl py-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Cultivate your <br />
            brand and expand <br /> your business */}
            Easy Tax & Insurance in Florida
          </motion.h1>

          <motion.p
            className="pt-0 pb-4 lg:py-4 text-sm xs:text-base xl:text-lg w-11/12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Say goodbye to financial worries. I&apos;ll handle your taxes and
            insurance, giving you peace of mind and more free time.
          </motion.p>

          <motion.div
            className="flex justify-left gap-3 text-lg mt-4 font-medium w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <div className="flex gap-3">
              <Link
                href="#contact"
                className="group bg-secondary dark:bg-gray-900 text-white px-7 py-3 flex items-center justify-between gap-2 text-base rounded-full outline-none focus:scale-110 hover:scale-105  active:scale-105 transition lg:w-fit"
                onClick={() => {
                  // setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>Free Quote</span>
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="#about"
                className="group bg-white px-7 py-3 flex items-center text-base justify-between gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 lg:w-fit"
                onClick={() => {
                  // setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>Discover </span>
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <div className="hidden lg:flex max-lg:flex-col gap-3">
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
        <div className="flex items-center justify-center w-full md:w-2/5">
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
                src={Foto}
                alt="Ricardo portrait"
                width="800"
                height="800"
                quality="95"
                priority={true}
                className="h-60 xs:h-[17rem] md:h-64 lg:h-96 w-auto rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 md:max-lg:-right-10 lg:max-xl:-right-4 -right-20 text-4xl flex flex-col px-2 lg:px-5 py-3 bg-slate-500 rounded-2xl border-[0.25rem] border-white shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              <div className="font-bold text-white text-left md:max-lg:text-2xl text-4xl">
                <AnimatedNumbers targetValue={12} />+
              </div>
              <p className="text-white text-sm lg:text-base flex-wrap">
                Years of experience
              </p>
            </motion.div>
          </div>
        </div>
        {/* <div className="flex flex-col md:hidden justify-center items-center mt-12 px-8">
          <div className="text-gray-400 text-lg font-semibold">
            Days till Taxes
          </div>
          <div className="text-gray-400 font-semibold">18:34:45</div>
        </div> */}
        {/* <div className="flex md:hidden justify-center items-center gap-6 px-8">
          <img
            src="/insurances/cigna.svg"
            alt="aetnea"
            className="w-24 h-auto opacity-30"
          />
          <img
            src="/insurances/aetna.svg"
            alt="aetnea"
            className="w-24 h-auto opacity-30"
          />
        </div>

        <div className="flex md:hidden justify-center items-center space-x-6">
          <img
            src="/insurances/unitedhealthcare.svg"
            alt="aetnea"
            className=" w-36 h-auto opacity-30"
          />
        </div> */}
      </div>
      <SectionDivider />
    </section>
  );
}
