"use client";
import React from "react";
import { LuLanguages } from "react-icons/lu";
import { languages } from "../app/i18n/settings";
import Link from "next/link";

export default function LanguageSwitch({ lng }: { lng: string }) {
  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <Link
              key={l}
              href={`/${l}`}
              className="fixed bottom-5 right-[75px] bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            >
              <LuLanguages />
              {/* {theme === "light" ? <BsSun /> : <BsMoon />} */}
            </Link>
          );
        })}
    </>
  );
}
