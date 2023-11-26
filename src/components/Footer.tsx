import React from "react";
import logo from "../../public/images/Logo-C.png";
import Image from "next/image";

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
      <small className="mb-1 block text-xs">
        2023 Carlos. &copy; All rights reserved.
      </small>
      <p className="text-xs">
        Design by <span className="font-semibold">Hyperion</span>
      </p>
    </footer>
  );
}
