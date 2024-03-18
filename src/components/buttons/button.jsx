import React from "react";
import clsx from "clsx";
export const Button = ({ children, variant, onClick, type }) => {
  return (
    <button
      className={clsx("bg-aswadBlack text-white", {
        "px-4 py-2 rounded-lg": variant === "primary",
        "py-[19px] w-[343px] rounded-2xl": variant === "login",
        "py-[15px] px-[50px] rounded-lg ": variant === "search",
      })}
    >
      {children}
    </button>
  );
};
