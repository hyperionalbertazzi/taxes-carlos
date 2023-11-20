import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  href?: string;
}
// shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
const buttonClassName =
  "p-4 my-4 font-bold text-black tracking-wide text-sm uppercase no-underline shadow-sm border-2 rounded-full bg-transparent border-primary transition-all duration-500 ease-in-out transform hover:shadow-[rgba(_216,_185,_154,_0.6)_0px_0px_32px] hover:bg-white";

export const Button: FC<ButtonProps> = ({
  className,
  title,
  href,
  ...props
}) => {
  if (href) {
    return (
      <Link href={href} className={twMerge(buttonClassName, className)}>
        {title}
      </Link>
    );
  }

  return (
    <button className={twMerge(buttonClassName, className)} {...props}>
      {title}
    </button>
  );
};
