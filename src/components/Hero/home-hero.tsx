/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../bright-components/primary-button";
import { RocketIcon } from "../navigations/navigation-bar";
import { HomeRightSection } from "./right-section";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation for each letter
    },
  },
};

export const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const HomeHero = () => {
  const title = "Building Brands";

  return (
    <>
      <section
        style={{
          backgroundImage: `url('/gridline.svg')`,
        }}
        className="font-manrope relative z-[50] grid grid-cols-1 md:grid-cols-2 md:gap-[5%] items-center"
      >
        <div className="radial_bg">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[45px] md:text-[60px] lg:text-[72px] font-[400] md:font-[500] md:flex flex-row md:flex-col flex-wrap leading-[140%]"
          >
            <span className="flex flex-row">
              {title.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-[#2F334F]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
            <span className="text-[#F3F3F4] inline-flex items-center gap-2 flex-wrap">
              Digital{" "}
              <span className="inline-block bg-[#D9D9D9] rounded-[30px] w-[175px] h-[50px] md:h-[68px]"></span>{" "}
              Age <span className="md:hidden text-[#F3F3F4]">Strategies</span>
            </span>

            <span className="flex flex-row">
              {"Strategies".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className=" text-[#F3F3F4] hidden md:inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
            {/* <span className=""></span> */}
          </motion.h2>

          <p className="font-poppins text-[16px] font-normal text-[#787878] mt-6 md:mt-[100px] mb-12">
            today's rapidly evolving digital landscape establishing a strong
            online presenci crucial for businesses of all sizes. This article
            explores key strategies{" "}
          </p>

          <div className="buttons w-full flex flex-col md:flex-row gap-6 md:gap-10">
          <PrimaryButton className="border-[#1E2135]">
            {RocketIcon} Discover More
          </PrimaryButton>

          <SecondaryButton>Learn More</SecondaryButton>
        </div>
        </div>

        <HomeRightSection />
      </section>
    </>
  );
};
