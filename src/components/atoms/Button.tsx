import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type BtnVariants = "primary" | "secondary" | "outline" | "text";

const BTN_VARIANT_CLASSES: Record<BtnVariants, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  text: "bg-transparent text-black hover:bg-[#f3f3f3]",
  outline: "bg-white border-2 border-black text-black",
};

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BtnVariants;
};

export const Btn = ({ variant = "primary", className, ...btnProps }: BtnProps) => {
  return (
    <button
      {...btnProps}
      className={clsx(
        "text-base rounded-full py-3 px-6 cursor-pointer h-12 flex items-center justify-center",
        BTN_VARIANT_CLASSES[variant],
        className
      )}
    >
      {btnProps.children}
    </button>
  );
};
