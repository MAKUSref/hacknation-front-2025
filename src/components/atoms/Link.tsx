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
        "pb-2 -mb-2",
        active && "border-b-2 border-secondary",
        className
      )}
    >
      {linkProps.children}
    </a>
  );
};
