"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Badge } from "./Badge";
import AnimatedNumbers from "./AnimatedNumbers";
import Foto from "../../public/images/carlos-foto.jpg";
import SectionDivider from "./Section-divider";
import { useTranslation } from "@/app/i18n/client";
import ACA from "../../public/insurances/Aca-logo.png";
import obama from "../../public/insurances/obamacare3.png";
import obama2 from "../../public/insurances/obamacare2.png";

export default function Intro({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "home");
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
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
            <Badge text={t("badge")} />
          </motion.div>
          <motion.h1
            className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl py-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("title")}
          </motion.h1>

          <motion.p
            className="pt-0 pb-4 lg:py-4 text-sm xs:text-base xl:text-lg w-11/12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("subtitle")}
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
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>{t("free_quote")}</span>
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
                <span>{t("discover")}</span>
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <div className="hidden lg:flex max-lg:flex-col gap-3">
              {/* <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://linkedin.com"
                target="_blank"
              >
                <BsLinkedin />
              </a> */}

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.instagram.com/fltaxesandinsurance/?hl=en"
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
                <AnimatedNumbers targetValue={4} />+
              </div>
              <p className="text-white text-sm lg:text-base flex-wrap">
                {lng == "es" ? "Años de experiencia" : "Years of experience"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-14 lg:bottom-24 left-1/2 transform -translate-x-20 flex justify-center gap-10"
      >
        <Image
          src={obama}
          alt="Ricardo portrait"
          width="800"
          height="800"
          quality="95"
          className="w-16 md:w-20 opacity-50 h-auto"
        />
        <Image
          src={ACA}
          alt="Ricardo portrait"
          width="800"
          height="800"
          quality="95"
          className="w-16 md:w-20 h-auto"
        />
      </motion.div>
      <SectionDivider />
    </section>
  );
}
