"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Badge } from "./Badge";

export default function Partner() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="partner" className="max-w-5xl mx-auto flex flex-col">
      <div className="w-full py-12 border-b border-white">
        <h1 className="text-6xl font-bold">
          Partner with us to unleash business potential
        </h1>
      </div>
      <div className="flex flex-row w-full py-8">
        <div className="flex flex-col first w-[90%]">
          <p className="max-w-xl">
            At Consultant, we recognize the individuality of each business,
            rejecting generic fixes. Hence, we adopt a custom method to offer
            strategies that match your objectives, difficulties, and sectoral
            fluctuations.
          </p>
          <div className="flex flex-row items-center py-8 space-x-6 ">
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineDone className="w-6 h-6" />
              <p>Strategic Expertise</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineDone className="w-6 h-6" />
              <p>Strategic Expertise</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineDone className="w-6 h-6" />
              <p>Strategic Expertise</p>
            </div>
          </div>
        </div>
        <div className="h-full w-[10%] bg-slate-800 flex items-center justify-center">
          <LuArrowDownRight className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
