import React from "react";
import { MovingBorder } from "./MovingBorder";

export function SpecialButton({
  borderRadius = "1rem",
  children,
  ...otherProps
}: any) {
  return (
    <button
      className="bg-transparent relative text-xl h-12 w-full p-[1px] overflow-hidden "
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={3500} rx="30%" ry="30%">
          <div className="h-20 w-20 opacity-[0.8] bg-gradient-radial from-sky-500 to-transparent" />
        </MovingBorder>
      </div>

      <div
        className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-lg antialiased"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </button>
  );
}
