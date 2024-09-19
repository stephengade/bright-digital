import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const PrimaryButton = ({ children, className, onClick }: IButton) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "flex flex-row items-center  gap-[12px] text-[#F3F3F4] text-[18px] font-[500] bg-[#1E2135] border-[1px] border-solid border-black rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full md:w-[203px] transition duration-300 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] hover:border-transparent",
        className
      )}
    >
      {children}
    </Button>
  );
};


export const SecondaryButton = ({ children, className, onClick }: IButton) => {
  return (
    <Button 
    onClick={onClick}
    variant="outline"
    className={cn(
      "flex flex-row items-center gap-[12px] text-[#F3F3F4] text-[18px] font-[500] bg-none border-[2px] border-solid border-[#F3F3F459] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full md:w-[203px] transition duration-300 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] hover:border-bprimary",
      className
    )}>
   {children}
    </Button>
  )
}