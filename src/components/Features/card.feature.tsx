import Image from "next/image";

interface ICard {
  title: string;
  image: string;
  description: string;
}

export const FeatureCard = ({ title, image, description }: ICard) => {
  return (
    <div className="">
      <div className="relative pl-0">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={500}
          className="w-[95%] ml-0 pl-0 md:w-2/2"
        />
        <svg
          className="absolute right-[4%] md:right-0 bottom-0 cursor-pointer  transition animate-spin hover:animate-none"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="25" fill="#5C5FE4" className="" />
          <path
            d="M33.0921 18C33.0921 17.4753 32.6668 17.05 32.1421 17.05L23.5921 17.05C23.0675 17.05 22.6421 17.4753 22.6421 18C22.6421 18.5246 23.0675 18.95 23.5921 18.95L31.1921 18.95L31.1921 26.55C31.1921 27.0746 31.6175 27.5 32.1421 27.5C32.6668 27.5 33.0921 27.0746 33.0921 26.55L33.0921 18ZM18.6718 32.8138L32.8139 18.6717L31.4704 17.3282L17.3282 31.4703L18.6718 32.8138Z"
            fill="#F3F3F4"
          />
        </svg>
      </div>

      <h3 className="title text-[#F3F3F4] font-[500] text-[22px] mt-7 mb-5 flex items-start">
        {title}
      </h3>

      <p className="text-sm font-poppins text-[#787878]">{description}</p>
    </div>
  );
};
