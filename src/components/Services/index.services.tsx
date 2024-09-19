"use client";

import { motion } from "framer-motion";
import { containerVariants, letterVariants } from "../Hero/home-hero";
import {
  PrimaryButton,
  SecondaryButton,
} from "../bright-components/primary-button";
import { RocketIcon } from "../navigations/navigation-bar";
import { EmptySection } from "../_helpers/empty-section";
import ServiceCardCarousel from "./service_card_carouse";

export const ServicesIndex = () => {
  const title = "Agencies Maintain Brand ";
  return (
    <>
      <section className="mt-[150px] relative -z-100">
        <EmptySection />
      </section>

      <section className="-mt-[50px] radial_bg w-full flex flex-col items-center justify-center">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[30px] text-center md:text-[45px] md:flex flex-row md:flex-col justify-center items-center flex-wrap leading-[140%]"
        >
          <span className="text-[#F3F3F4] inline-flex items-center gap-2 flex-wrap">
            The Power
            <span className="inline-block bg-[#D9D9D9] rounded-[30px] w-[175px] h-[48px]"></span>{" "}
            Branding Digital
          </span>
          <span className="flex flex-row">
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

          {/* <span className=""></span> */}
        </motion.h2>

        <p className="font-poppins text-[#787878] md:text-center my-5 md:my-12 md:px-[10%]">
          Consistency is key when it comes to branding. This article delves into
          the role of Digital Branding Agencies maintaining a cohesive brand
          identity across various digital platforms. Learn how these agencies
          ensure that your brand message
        </p>

        <div className="buttons w-full flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-10">
          <PrimaryButton className="border-[#1E2135]">
            {RocketIcon} Discover More
          </PrimaryButton>

          <SecondaryButton>Learn More</SecondaryButton>
        </div>



        {/* // service card */}

        <ServiceCardCarousel />
      </section>
    </>
  );
};


