"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";

export default function Index() {
  const phrase =
    "Crafting spaces that inspire, transform, and endure through thoughtful architectural innovation.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="px-8 w-full lg:px-52 mt-20 flex justify-center"
    >
      <div className="max-w-screen-lg flex flex-col lg:flex-row gap-12 relative pb-8 ">
        {/* Animated Text */}
        <p className="text-xl lg:text-2xl font-bold leading-relaxed flex flex-wrap gap-2">
          {phrase.split(" ").map((word, index) => (
            <span key={index} className="overflow-hidden inline-block">
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>

        {/* Subtext */}
        <motion.p
          variants={slideUp}
          animate={isInView ? "open" : "closed"}
          className="text-sm lg:text-lg font-light w-full lg:w-3/4"
        >
          Specializing in residential and commercial projects, delivering
          exceptional design solutions that seamlessly blend aesthetics with
          functionality.
        </motion.p>

        {/* Rounded Button */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-0 lg:right-16"
          data-scroll
          data-scroll-speed={0.1}
        ></div>
      </div>
    </div>
  );
}
