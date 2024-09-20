import { MainLogo } from "@/app/assets/Logo/Logo";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Facebook } from "lucide-react";
import Link from "next/link";
import { FooterLinkHelper } from "./footer.links";
import { FooterSubscribe } from "./subscribe.footer";

export const FooterIndex = () => {
  return (
    <footer className=" pt-[200px] pb-[70px]">
      <div className="text-[#787878] h-[1px] bg-[#787878]" />
      <div className="w-full md:radial_bg py-12 lg:py-24 flex flex-col md:flex-row justify-between">
        <div className="w-4/4 md:w-2/4 lg:w-1/4">
          <MainLogo />
          <p className="about_brand mt-5 text-sm font-poppins text-[#787878] ">
            Digital branding involves creating a cohesi and consistent bra image
            acros all online platform including your website
          </p>

          <div className="mt-10 social_media flex flex-row items-center gap-x-3">
            <Link
              href="#"
              className="bg-[#1E2135] hover:bg-[#5C5FE4] p-2 rounded-full text-white  hover:text-[#080A16]"
            >
              <TwitterLogoIcon className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="bg-[#1E2135] hover:bg-[#5C5FE4] p-2 rounded-full text-white  hover:text-[#080A16]"
            >
              <Facebook className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="bg-[#1E2135] hover:bg-[#5C5FE4] p-2 rounded-full text-white  hover:text-[#080A16]"
            >
              <InstagramLogoIcon className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="bg-[#1E2135] hover:bg-[#5C5FE4] p-2 rounded-full text-white  hover:text-[#080A16]"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex  flex-row justify-between w-2/2 lg:w-1/4 pr-4 md:pr-0">
          <FooterLinkHelper
            title="company"
            data={["About", "Features", "Works", "Career"]}
          />

          <FooterLinkHelper
            title="help"
            data={[
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />
        </div>

        <FooterSubscribe />
      </div>
      <div className="text-[#787878] h-[1px] bg-[#787878]" />

      <p className="text-[12px] leading-[44px] py-3 text-[#fff] text-center font-poppins">
        © Copyright 2024, All Rights Reserved by Enative
      </p>
    </footer>
  );
};
