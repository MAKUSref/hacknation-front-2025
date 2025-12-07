import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";
import { useNavigate } from "react-router";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

export const Link = ({ active, className, ...linkProps }: LinkProps) => {
  const navigate = useNavigate();

  return (
    <a
      {...linkProps}
      onClick={(e) => {
        e.preventDefault();
        if (linkProps.href) {
          navigate(linkProps.href);
        }
      }}
      className={clsx(
        "pb-2 -mb-2 cursor-pointer",
        active && "border-b-2 border-secondary",
        className
      )}
    >
      {linkProps.children}
    </a>
  );
};
