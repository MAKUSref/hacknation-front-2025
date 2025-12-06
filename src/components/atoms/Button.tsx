import type { ButtonHTMLAttributes } from "react";

export const Btn = (btnProps: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...btnProps}
      className="bg-purple-500 text-white text-sm rounded-full py-3 px-7 w-full cursor-pointer hover:bg-purple-600 active:bg-purple-700"
    >
      {btnProps.children}
    </button>
  );
};
