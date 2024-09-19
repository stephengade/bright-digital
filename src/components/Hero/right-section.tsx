import { Hero_Brand, Hero_Content } from "./cards/data.hero-card"
import { HeroCard } from "./cards/hero.card"

export const HomeRightSection = () => {
    return (
 <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-[25px] radial_bg ">
      <div className="flex flex-col gap-[25px]">
        <div className="rounded-[25px] bg-[#D9D9D9] h-[350px] w-full"></div>
        
         <HeroCard
          title={Hero_Brand.title}
          description={Hero_Brand.description}
          downIcon={Hero_Brand.downIcon}
          className="text-center items-center"
        />
        </div>


        <div className="flex flex-col gap-[25px]">
        <HeroCard
          icon={Hero_Content.icon}
          title={Hero_Content.title}
          description={Hero_Content.description}
        />
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 299 387"
            fill="none"
            className="block"
          >
            <path
              d="M0 25C0 11.1929 11.1929 0 25 0H274C287.807 0 299 11.1929 299 25V193.5V290.25V292C299 305.807 287.807 317 274 317H255.5C241.693 317 230.5 328.193 230.5 342V362C230.5 375.807 219.307 387 205.5 387H149.5H25C11.1929 387 0 375.807 0 362V25Z"
              fill="#D9D9D9"
            />
          </svg>
          <svg
            className="absolute right-0 bottom-0 cursor-pointer animate-spin hover:animate-none"
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
      </div>
    )
}