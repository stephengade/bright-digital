"use client";

import { MainLogo } from "@/app/assets/Logo/Logo";
import { PrimaryButton } from "../bright-components/primary-button";
import { NavLinks } from "./nav_links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNavMenu } from "./mobile.navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const RocketIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <mask
      id="mask0_1_25"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="30"
    >
      <rect width="30" height="30" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1_25)">
      <path
        d="M3.0625 13.2188L8.3125 7.96875C8.60417 7.67708 8.94792 7.46875 9.34375 7.34375C9.73958 7.21875 10.1458 7.19792 10.5625 7.28125L12.1875 7.625C11.0625 8.95833 10.1771 10.1667 9.53125 11.25C8.88542 12.3333 8.26042 13.6458 7.65625 15.1875L3.0625 13.2188ZM9.46875 16.0625C9.94792 14.5625 10.599 13.1458 11.4219 11.8125C12.2448 10.4792 13.2396 9.22917 14.4062 8.0625C16.2396 6.22917 18.3333 4.85938 20.6875 3.95313C23.0417 3.04688 25.2396 2.77083 27.2812 3.125C27.6354 5.16667 27.3646 7.36458 26.4688 9.71875C25.5729 12.0729 24.2083 14.1667 22.375 16C21.2292 17.1458 19.9792 18.1406 18.625 18.9844C17.2708 19.8281 15.8438 20.4896 14.3438 20.9688L9.46875 16.0625ZM18.0938 12.3125C18.5729 12.7917 19.1615 13.0313 19.8594 13.0313C20.5573 13.0313 21.1458 12.7917 21.625 12.3125C22.1042 11.8333 22.3438 11.2448 22.3438 10.5469C22.3438 9.84896 22.1042 9.26042 21.625 8.78125C21.1458 8.30208 20.5573 8.0625 19.8594 8.0625C19.1615 8.0625 18.5729 8.30208 18.0938 8.78125C17.6146 9.26042 17.375 9.84896 17.375 10.5469C17.375 11.2448 17.6146 11.8333 18.0938 12.3125ZM17.2188 27.3438L15.2188 22.75C16.7604 22.1458 18.0781 21.5208 19.1719 20.875C20.2656 20.2292 21.4792 19.3438 22.8125 18.2188L23.125 19.8438C23.2083 20.2604 23.1875 20.6719 23.0625 21.0781C22.9375 21.4844 22.7292 21.8333 22.4375 22.125L17.2188 27.3438ZM5.0625 20.0625C5.79167 19.3333 6.67708 18.9635 7.71875 18.9531C8.76042 18.9427 9.64583 19.3021 10.375 20.0313C11.1042 20.7604 11.4688 21.6458 11.4688 22.6875C11.4688 23.7292 11.1042 24.6146 10.375 25.3438C9.85417 25.8646 8.98438 26.3125 7.76562 26.6875C6.54687 27.0625 4.86458 27.3958 2.71875 27.6875C3.01042 25.5417 3.34375 23.8646 3.71875 22.6563C4.09375 21.4479 4.54167 20.5833 5.0625 20.0625Z"
        fill="#5C5FE4"
      />
    </g>
  </svg>
);

export const NavigationBar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  
  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state if scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for the animation
  const navbarVariants = {
    transparent: { backgroundColor: "rgba(255, 255, 255, 0)", transition: { duration: 0.5 } },
    colored: { backgroundColor: "#1E2135", transition: { duration: 0.5 } },
  };


  return (
    <AnimatePresence>
    <motion.nav
    className="fixed w-screen z-[1000]"
    variants={navbarVariants}
    animate={isScrolled ? "colored" : "transparent"}
     >
      <div className="nav w-screen overflow-hidden max-w-[1520px] flex flex-row flex-shrink-0 items-center justify-between py-3 md:py-[20px] px-4 md:px-8 lg:px-12">
        <div className="brand__logo select-none">
          <MainLogo />
        </div>
        <div className="hidden nav__links lg:flex flex-row items-center gap-[40px]">
          {NavLinks.map(({ id, name, url }) => {
            return (
              <Link
                href={url}
                key={id}
                className={cn(
                  "relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-bprimary after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 text-[16px] text-[#8D8D8D] font-[500] transition-colors",
                  pathname.includes(url) && "text-[#F3F3F4]"
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="nav__cta hidden md:inline-block">
          <PrimaryButton>{RocketIcon} Discover More</PrimaryButton>
        </div>

        <div className="mobile__nav__bar__trigger lg:hidden">
          <MobileNavMenu />
        </div>
      </div>
    </motion.nav>
    </AnimatePresence>
  );
};
