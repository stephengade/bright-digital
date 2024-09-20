import Link from "next/link";

export const FooterLinkHelper = ({
  data,
  title,
}: {
  data: string[];
  title: string;
}) => {
  return (
    <div className="footer-link-helper mt-12 lg:mt-0">
      <h3 className="text-white uppercase font-[600] text-[13px] leading-[22px] tracking-[3px] font-manrope ">
        {title}
      </h3>
      <div className="inline-flex flex-col mt-[20px]">
        {data.map((item) => {
          return (
            <Link
              key={item}
              href="#"
              target="_blank"
              className="block text-sm leading-[44px] text-[#787878] hover:text-bprimary font-poppins"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
