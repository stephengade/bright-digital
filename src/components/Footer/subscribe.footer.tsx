import { PrimaryButton } from "../bright-components/primary-button"

export const FooterSubscribe = () => {
    return (
        <div className="mt-12 lg:mt-0">
             <h3 className="text-white uppercase font-[600] text-[13px] leading-[22px] tracking-[3px] font-manrope ">
        subscribe
      </h3>

        <input style={{
           backgroundImage: `linear-gradient(180deg,#1E2135 0%, #080A16 100%))`
        }} placeholder="Enter your email" className="mt-[25px] outline-none flex flex-row items-center caret-bprimary placeholder:text-[#71717A] text-[#71717A] border-2 border-solid border-white/15 bg-gradient-to-b from-[#1E2135] to-[#080A16] text-sm font-poppins py-[17px] px-[20px] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[55px] w-full md:w-[306px] transition duration-300 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] hover:border-transparent" />

         <PrimaryButton className="bg-[#5C5FE4] font-manrope text-[#F3F3F4] rounded-[5px] mt-3 text-sm md:w-[136px] h-[50px]">
            Subscribe
         </PrimaryButton>

        </div>
    )
}