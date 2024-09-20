/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";

interface IHeroCard {
  icon?: any;
  title: string;
  description: string;
  downIcon?: any;
  className?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  downIcon,
  className,
}: IHeroCard) => {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, #1E2135 0%, #080A16 100%)`,
        border: `2px solid rgba(243, 243, 244, 0.15)`,
      }}
      className={cn(
        "hero-card rounded-[50px] cursor-pointer  px-6 py-10 flex flex-col flex-shrink-0 justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] hover:border-transparent",
        className
      )}
    >
      {icon && (
        <span className="mb-6 -ml-3 flex items-start">
          {" "}
          {icon}{" "}
          <svg
            className="-ml-3"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
          >
            <path
              d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5L10 4.5V3.5L0 3.5L0 4.5Z"
              fill="white"
            />
          </svg>
        </span>
      )}
      <h3 className="text-[#F3F3F4] font-[500] text-[22px] mb-7 flex items-start">
        {title}{" "}
        <svg
          className="inline"
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
        >
          <path
            d="M8.57107 0.999977C8.57107 0.723835 8.34721 0.499977 8.07107 0.499977L3.57107 0.499977C3.29493 0.499977 3.07107 0.723835 3.07107 0.999977C3.07107 1.27612 3.29493 1.49998 3.57107 1.49998L7.57107 1.49998L7.57107 5.49998C7.57107 5.77612 7.79493 5.99998 8.07107 5.99998C8.34721 5.99998 8.57107 5.77612 8.57107 5.49998L8.57107 0.999977ZM1.35355 8.4246L8.42462 1.35353L7.71751 0.646424L0.646447 7.71749L1.35355 8.4246Z"
            fill="white"
          />
        </svg>
      </h3>
      <p className="text-sm font-poppins text-[#787878]">{description}</p>
      {downIcon && (
        <span className="h-10 w-10 bg-[#2F334F] rounded-[15px] flex justify-center items-center mt-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
          >
            <path
              d="M5.43432 13.5657C5.74673 13.8781 6.25327 13.8781 6.56569 13.5657L11.6569 8.47452C11.9693 8.1621 11.9693 7.65557 11.6569 7.34315C11.3444 7.03073 10.8379 7.03073 10.5255 7.34315L6 11.8686L1.47452 7.34315C1.1621 7.03073 0.655566 7.03073 0.343146 7.34315C0.0307268 7.65557 0.0307268 8.1621 0.343146 8.47452L5.43432 13.5657ZM5.2 3.49691e-08L5.2 13L6.8 13L6.8 -3.49691e-08L5.2 3.49691e-08Z"
              fill="#5C5FE4"
            />
          </svg>
        </span>
      )}
    </div>
  );
};
