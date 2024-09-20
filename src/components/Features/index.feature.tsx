"use client";

import { motion } from "framer-motion";
import { containerVariants, letterVariants } from "../Hero/home-hero";
import { TriggeredTitle } from "../bright-components/animate-title";
import FeatureCardCarousel from "./FeatureCardCarousel";

const LeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
  >
    <circle
      cx="32.5"
      cy="32.5"
      r="32.5"
      transform="rotate(180 32.5 32.5)"
      fill="url(#paint0_linear_3_126)"
    />
    <circle
      cx="32.5"
      cy="32.5"
      r="31.5"
      transform="rotate(180 32.5 32.5)"
      stroke="white"
      stroke-opacity="0.12"
      stroke-width="2"
    />
    <path
      d="M45 33.5C45.8284 33.5 46.5 32.8284 46.5 32C46.5 31.1716 45.8284 30.5 45 30.5L45 33.5ZM18.9393 30.9393C18.3536 31.5251 18.3536 32.4749 18.9393 33.0607L28.4853 42.6066C29.0711 43.1924 30.0208 43.1924 30.6066 42.6066C31.1924 42.0208 31.1924 41.0711 30.6066 40.4853L22.1213 32L30.6066 23.5147C31.1924 22.9289 31.1924 21.9792 30.6066 21.3934C30.0208 20.8076 29.0711 20.8076 28.4853 21.3934L18.9393 30.9393ZM45 30.5L20 30.5L20 33.5L45 33.5L45 30.5Z"
      fill="#5C5FE4"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3_126"
        x1="32.5"
        y1="3.8147e-06"
        x2="32.5"
        y2="65"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1E2135" />
        <stop offset="1" stop-color="#080A16" />
      </linearGradient>
    </defs>
  </svg>
);

const RightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
  >
    <circle cx="32.5" cy="32.5" r="32.5" fill="url(#paint0_linear_3_125)" />
    <circle
      cx="32.5"
      cy="32.5"
      r="31.5"
      stroke="white"
      stroke-opacity="0.12"
      stroke-width="2"
    />
    <path
      d="M20 31.5C19.1716 31.5 18.5 32.1716 18.5 33C18.5 33.8284 19.1716 34.5 20 34.5V31.5ZM46.0607 34.0607C46.6464 33.4749 46.6464 32.5251 46.0607 31.9393L36.5147 22.3934C35.9289 21.8076 34.9792 21.8076 34.3934 22.3934C33.8076 22.9792 33.8076 23.9289 34.3934 24.5147L42.8787 33L34.3934 41.4853C33.8076 42.0711 33.8076 43.0208 34.3934 43.6066C34.9792 44.1924 35.9289 44.1924 36.5147 43.6066L46.0607 34.0607ZM20 34.5H45V31.5H20V34.5Z"
      fill="#5C5FE4"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3_125"
        x1="32.5"
        y1="0"
        x2="32.5"
        y2="65"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1E2135" />
        <stop offset="1" stop-color="#080A16" />
      </linearGradient>
    </defs>
  </svg>
);

export const FeatureIndex = () => {
  const title = "Strategy with Digital Branding";

  return (
    <section
      style={{
        backgroundImage: `url('/gridline.svg')`,
      }}
      className="font-manrope mt-24 relative z-100 grid md:gap-[10%] items-center"
    >
      <div className="flex flex-row justify-between items-end">
        <TriggeredTitle>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[30px] text-center md:text-[45px] md:flex flex-row md:flex-col flex-wrap leading-[140%]"
          >
            <span className="text-[#F3F3F4] inline-flex items-center gap-2 flex-wrap">
              Beyond
              <span className="inline-block bg-[#D9D9D9] rounded-[30px] w-[175px] h-[30px] md:h-[48px]"></span>{" "}
              Compres Brand
            </span>
            <span className="hidden md:flex flex-row ml-0">
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

            <span className="md:hidden text-[#F3F3F4] flex text-left justify-start flex-wrap">
              {title}
            </span>
          </motion.h2>
        </TriggeredTitle>

        <div className="carousel_controller hidden md:flex flex-row gap-5 py-10">
          <span className="cursor-pointer">{LeftArrow}</span>

          <span className="cursor-pointer">{RightArrow}</span>
        </div>
      </div>

      {/* // cards */}

      <FeatureCardCarousel />
    </section>
  );
};
