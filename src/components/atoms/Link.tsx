import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

export const Link = ({ active, className, ...linkProps }: LinkProps) => {
  return (
    <a
      {...linkProps}
      className={clsx(
        "pb-2",
        active && "border-b-2 border-[#F54D58]",
        className
      )}
    >
      {linkProps.children}
    </a>
  );
};
