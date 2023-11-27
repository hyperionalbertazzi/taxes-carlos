import React from "react";
import logo from "../../public/images/Logo-C.png";
import Image from "next/image";
import { FaSquarePhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="flex justify-center items-center mb-4">
        <Image
          src={logo}
          alt="Carlos"
          width="800"
          height="800"
          quality="95"
          priority={true}
          className="left-0 h-32 w-auto rounded-full object-cover"
        />
      </div>
      <a
        href="tel:+17862084176"
        className="flex justify-center items-center gap-2 mb-1 hover:cursor-pointer transition transform hover:-translate-y-1"
      >
        <FaSquarePhone className="w-8 h-8 text-gray-400 dark:text-opacity-50" />
        <p>+1 786 208 4176</p>
      </a>
      <p className="text-xl mb-1 font-bold text-secondary dark:text-gray-500">
        Carlos Albertazzi
      </p>
      <small className="mb-1 block text-sm">
        2023 Carlos. &copy; All rights reserved.
      </small>
      <p className="text-sm">
        Design by <span className="font-semibold">Hyperion</span>
      </p>
    </footer>
  );
}
