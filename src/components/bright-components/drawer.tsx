"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface iDrawer {
  closeDrawer?: string | React.ReactNode;
  triggerDrawer?: string | React.ReactNode;
  children: React.ReactNode;
  title?: string;
  description?: string;
  position?: "top" | "right" | "bottom" | "left";
  open?: boolean;
  setIsOpen?: unknown;
  onOpenChange?: (open: boolean) => void;
}

export const AppDrawer = ({
  closeDrawer,
  triggerDrawer,
  children,
  title,
  description,
  position = "right",
  open,
  onOpenChange,
}: iDrawer) => {
  return (
    <div className="relative z-[1500]">
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger asChild className="cursor-pointer">
          {triggerDrawer}
        </SheetTrigger>

        <SheetContent
          side={position}
          className={
            cn(position === "bottom"
              ? "h-screen bg-[#080A16] z-[200] rounded-t-[32px] overflow-x-hidden"
              : "overflow-y-auto bg-[#080A16]", position === "top" && "h-screen"
        )}
        >
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>

          {children}

          <SheetFooter className="bg">
            {closeDrawer && <SheetClose asChild>{closeDrawer}</SheetClose>}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
