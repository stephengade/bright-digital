"use client";

import { motion } from "framer-motion";
import { containerVariants, letterVariants } from "../Hero/home-hero";
import { TriggeredTitle } from "../bright-components/animate-title";


export const FeatureIndex = () => {
  const title = "The Human Touch in Digital Branding";

  return (
    <section
      style={{
        backgroundImage: `url('/gridline.svg')`,
      }}
      className="font-manrope mt-24 relative z-100 grid md:gap-[10%] items-center"
    >
      <TriggeredTitle>
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[30px] text-center md:text-[45px] font-[500] leading-[140%]"
        >
          <span className="hidden md:flex flex-row justify-center flex-wrap">
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-[#F3F3F4]"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>

          <span className="text-[#F3F3F4] md:hidden">
            {title}
          </span>
        </motion.h2>
      </TriggeredTitle>


      {/* // cards */}

    
    </section>
  );
};
