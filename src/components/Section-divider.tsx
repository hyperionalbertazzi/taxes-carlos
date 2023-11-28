"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function SectionDivider() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <Link href="#about" className="absolute left-1/2 bottom-0 ">
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block" // Esta clase asegura que el div se comporte como un elemento en línea
        >
          <FaArrowDownLong className="w-7 h-7 lg:h-12 lg:w-12 text-secondary dark:text-gray-200 dark:text-opacity-20" />
        </motion.div>
      </Link>
    </>
  );
}
