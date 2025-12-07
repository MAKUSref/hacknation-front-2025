import clsx from "clsx";
import { type PropsWithChildren } from "react";
import { Link } from "../atoms/Link";

interface NavbarItemProps {
  href: string;
  underline?: boolean;
  onClick?: () => void;
}

export const NavbarItem = ({
  href,
  underline = true,
  onClick,
  children,
}: PropsWithChildren<NavbarItemProps>) => {
  return (
    <Link
      className={clsx(
        "text-lg capitalize hover:text-primary transition-all -mb-0.5 border-b-2 border-transparent ",
        underline && "hover:border-primary"
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
