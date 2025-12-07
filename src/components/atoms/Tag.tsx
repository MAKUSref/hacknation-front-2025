import clsx from "clsx";
import type { PropsWithChildren } from "react";

export function Tag({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        "bg-gray-200 text-gray-700 py-[3px] px-2 text-[12px] font-normal rounded-md whitespace-nowrap inline",
        className
      )}
    >
      {children}
    </div>
  );
}
