import React from "react";
import style from "./my-button.module.css";

export type MyButtonVariant = "outlined" | "naked";

export interface MyButtonProp {
  variant?: MyButtonVariant;
  small?: boolean;
  className?: string;
  icon?: boolean;
}

const MyButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & MyButtonProp
> = ({ children, variant, small, className, icon, ...props }) => {
  const buttonClass = `${style.wrapper} ${className || ""} ${
    variant === "naked" && "before:hidden"
  } ${
    small
      ? icon
        ? "py-2 px-3 px-4 before:rounded-2xl after:rounded-2xl"
        : "py-2 px-4 before:rounded-xl after:rounded-xl"
      : icon
      ? "py-3 px-4 before:rounded-[1.25rem] after:rounded-[1.25rem]"
      : "py-3 px-6 before:rounded-2xl after:rounded-2xl"
  }`;

  const contentClass = `${style.content} ${small ? "text-sm" : "text-base"}`;

  return (
    <button className={buttonClass} {...props}>
      <span className={contentClass}>{children}</span>
    </button>
  );
};

export default MyButton;
