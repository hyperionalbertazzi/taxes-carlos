"use client";

import React, { useEffect, useState } from "react";

import { Outfit } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "./Badge";
import Image from "next/image";

// import { LeftGradient } from "@/components/LeftGradient";
// import { RightGradient } from "@/components/RightGradient";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Testimonials = () => {
  const { ref } = useSectionInView("Testimonials", 0.5);
  return (
    <section
      ref={ref}
      id="testimonials"
      className="flex items-center justify-center min-h-screen w-full"
    >
      <div className="flex flex-col antialiased relative overflow-hidden max-w-5xl mb-20 self-center w-11/12">
        <div className="">
          <Badge text="Testimonials" />
        </div>
        <h1 className="text-4xl xs:text-6xl md:text-5xl font-bold lg:text-6xl dark:text-white py-4">
          What some clients got to say
        </h1>
        <InfiniteMovingCards direction="left" speed="slow" />

      </div>
    </section>
  );
};

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if ((speed = "normal")) {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={twMerge(
        outfit.className,
        "scroller relative z-20 group max-w-7xl overflow-hidden"
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((testimonial, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={testimonial.name}
          >
            <blockquote className="flex flex-col justify-between h-full">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-black dark:text-gray-100 font-normal">
                &ldquo;{testimonial.quote} &rdquo;
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="flex items-center mr-4">
                  {/* <TestimonialTooltip
                    people={[
                      {
                        id: idx, // You can use the index or any unique value
                        name: testimonial.name,
                        designation: testimonial.title,
                        image: testimonial.image,
                      },
                    ]}
                  /> */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width="800"
                    height="800"
                    quality="60"
                    className=" h-12 w-12 rounded-full object-cover"
                  />
                </div>

                <span className="flex flex-col gap-1">
                  <span className=" text-base leading-[1.6]  text-black dark:text-gray-400 font-semibold">
                    {testimonial.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-black dark:text-gray-400 font-normal">
                    {testimonial.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
