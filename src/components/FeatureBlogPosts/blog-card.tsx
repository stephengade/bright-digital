import Image from "next/image";

export interface IBlog {
  title: string;
  image: string;
  description: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    image: string;
  };
  publishDate: string;
}

export const FeatureBlog = (props: IBlog) => {
  const { title, category, readTime, description } = props;
  return (
    <div className="flex flex-row gap-[15px] group hover:bg-white/15 hover:rounded-[5px] p-3 cursor-pointer">
      {/* ++++++++++++++++++++++++  content area */}
      <div className="flex flex-col justify-between">
        <div className="">
          <h3 className="text-[#F3F3F4] font-[500] text-[22px] mb-3 flex items-start">
            {title}
          </h3>
          <p className="text-sm group-hover:text-white font-poppins text-[#787878]">{description}</p>
        </div>

        <div className="mt-5 lg:mt-0">
          <p className="text-sm font-poppins text-[#787878] flex flex-row items-center gap-5">
            <span className="text-bprimary group-hover:text-white">{category}</span> |{" "}
            <span className="group-hover:text-white">{readTime} minute read</span>{" "}
          </p>
        </div>
      </div>

      {/* ++++++++++++++++++++++++  image area */}

      <div className="hidden md:inline-block relative">
        <Image
          src="/blog-featured-image.svg"
          alt={title}
          width={200}
          height={200}
        />
        <svg
          className="absolute right-0 top-0 cursor-pointer  hover:animate-spin group-hover:animate-spin"
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
    </div>
  );
};
