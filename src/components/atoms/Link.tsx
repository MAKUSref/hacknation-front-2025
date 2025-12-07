import clsx from "clsx";
import { useMemo, type AnchorHTMLAttributes } from "react";
import { useLocation, useNavigate } from "react-router";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  exact?: boolean;
};

export const Link = ({ exact = false, className, ...linkProps }: LinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useMemo(() => {
    if (!linkProps.href) return false;
    const currentPath = location.pathname;
    if (exact) {
      return currentPath === linkProps.href;
    } else {
      return currentPath.startsWith(linkProps.href);
    }
  }, [exact, linkProps.href, location]);

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
        isActive && "border-b-2 border-secondary",
        className
      )}
    >
      {linkProps.children}
    </a>
  );
};
