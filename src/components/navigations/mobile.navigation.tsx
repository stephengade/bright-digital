"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AppDrawer } from "../bright-components/drawer";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./nav_links";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "../bright-components/primary-button";
import { RocketIcon } from "./navigation-bar";

export const MobileNavMenu = () => {
  const router = useRouter();

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <AppDrawer
      position="left"
      open={isOpen}
      onOpenChange={setIsOpen}
      triggerDrawer={
        <span className="flex items-center lg:hidden">
         {isOpen ? 
           <X className="text-white font-light w-10 h-10" /> :
          <Menu className="text-white font-light w-10 h-10" /> 
        } 
        </span>
      }
    >
      <div className="sidebar lg:hidden z-[100] flex-col justify-between w-full md:w-[200px]">
      
          <div className="sidebar_pages inline-flex flex-col gap-10 md:mt-[25px]">
            {NavLinks.map(({ name: title, url: link, id }) => (
              <button
              className={cn(
                "p-0 relative text-left inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-bprimary after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 text-[20px] text-[#8D8D8D] font-[500] transition-colors",
                pathname.includes(link) && "text-[#F3F3F4]"
              )}
                key={id}
                onClick={() => handleLinkClick(link)}
              >
                {title}
              </button>
            ))}
          </div>


          <PrimaryButton className="mt-10">{RocketIcon} Discover More</PrimaryButton>

      </div>
    </AppDrawer>
  );
};
