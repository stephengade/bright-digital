import Image from "next/image";
import { BenefitCard } from "./card.benefit";

const benefits = [
  {
    id: 0,
    title: "Brand Strategy Development",
    description:
      "We work with you to define your brand's mission,vision value and unique selling propositions. Our team creates a comprehensive ",
  },
  {
    id: 1,
    title: "Logo and Visual Identity Design",
    description:
      "We work with you to define your brand's mission,vision value and unique selling propositions. Our team creates a comprehensive ",
  },
  {
    id: 2,
    title: "Website Design and Development",
    description:
      "We work with you to define your brand's mission,vision value and unique selling propositions. Our team creates a comprehensive ",
  },
];

export const MainBenefitSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:w-full gap-[5%]">
      <div className="">
        <Image
          src="/feature-left.png"
          width={1000}
          height={1000}
          className="w-full lg:h-[576px]"
          alt="Benefits of Bright Digital"
        />
      </div>

      <div className="mt-6 md:mt-0  md:w-1/2 lg:w-2/3 flex flex-col justify-between">
        <h3 className="text-[#787878] my-6 font-poppins">
          <span className="text-[#F3F3F4]">
            Whether you&#39;re a startup or a global corporation you branding
            needs
          </span>{" "}
          are unique This artice explore Digital Branding Agencies tailor their
          strategies to suit businesses of all sizes
        </h3>

        <div className="benefit-cards flex flex-col gap-[50px]">
          {benefits.map(({ description, id, title }, index) => {
            return (
              <BenefitCard
                key={id + "" + title}
                description={description}
                index={index}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
