"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNumbersProps {
  targetValue: number;
  duration?: number; // Optional duration in seconds
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({
  targetValue,
  duration = 1,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = performance.now();
    let end = start + duration * 1000; // Convert duration to milliseconds

    const frame = (time: number) => {
      if (time < end) {
        requestAnimationFrame(frame);
        const timeFraction = (time - start) / (duration * 1000);
        const animatedValue = Math.round(timeFraction * targetValue);
        setDisplayValue(animatedValue);
      } else {
        setDisplayValue(targetValue); // Ensure final value is set
      }
    };

    requestAnimationFrame(frame);

    // Optional: Clean up function if the component unmounts mid-animation
    return () => {
      end = 0; // Force the animation to stop by invalidating the end time
    };
  }, [targetValue, duration]);

  return <motion.span>{displayValue}</motion.span>;
};

export default AnimatedNumbers;
