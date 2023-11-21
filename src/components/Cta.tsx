import React from "react";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import { BoxesContainer } from "./BoxesContainer";
import { SpecialButton } from "./SpecialButton";

export default function Cta() {
  return (
    <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center">
      <h1 className="md:text-4xl text-xl text-white relative z-20 !p-0 !m-0">
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 mb-4">
        Framer motion is the best animation library ngl
      </p>
      <SpecialButton>Let's see</SpecialButton>
    </div>
  );
}
