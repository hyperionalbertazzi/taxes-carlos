"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import logo from "../../public/images/Logo-C.png";
import { IoMenu } from "react-icons/io5";

const dropdownVariants = {
  open: {
    opacity: 1,
    height: "auto", // o puedes especificar una altura máxima
    transition: { type: "tween", duration: 0.3 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { type: "tween", duration: 0.3 },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4, // Este delay debería sincronizarse con la duración de la animación del contenedor
    },
  },
};

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <div className="hidden lg:block">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[36.8rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.8rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <motion.div
              className="h-full flex items-center ml-2"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Image
                src={logo}
                alt="Carlos"
                width="800"
                height="800"
                quality="95"
                priority={true}
                className="h-[44px] w-auto rounded-full object-cover"
              />
            </motion.div>
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center font-semibold px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:!text-gray-400":
                        activeSection === link.name,
                      "!text-gray-200 dark:text-gray-300 bg-secondary dark:bg-primary px-5 rounded-full hover:text-white":
                        link.name === "Contact",
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800 dark:text-gray-200"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className="lg:hidden flex flex-col">
        <div className="top-24 left-1/2 w-full h-[4.5rem] flex justify-between px-4 pt-4">
          <motion.div
            className=" h-full flex items-center ml-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Image
              src={logo}
              alt="Carlos"
              width="800"
              height="800"
              quality="95"
              priority={true}
              className="h-[64px] w-auto rounded-full object-cover"
            />
          </motion.div>
          <motion.div
            className=" h-full flex items-center mr-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <IoMenu className="w-7 h-7 text-gray-900 dark:text-gray-200" />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <div className="relative">
            {isActive && (
              <motion.div
                initial="closed"
                animate={isActive ? "open" : "closed"}
                className="absolute top-0 mt-4 p-4 h-fit w-full bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
                exit="closed"
                variants={dropdownVariants}
              >
                {links.map((link) => (
                  <motion.li
                    className="flex flex-col justify-left relative"
                    key={link.hash}
                    variants={itemVariants}
                  >
                    <Link
                      className={clsx(
                        "flex items-center font-semibold px-3 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                        {
                          "text-gray-950 dark:!text-gray-400":
                            activeSection === link.name,
                          "!text-gray-200 dark:text-gray-300 bg-secondary dark:bg-primary px-5 rounded-full hover:text-white w-fit":
                            link.name === "Contact",
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        setIsActive(!isActive);
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </nav>
    </header>
  );
}
