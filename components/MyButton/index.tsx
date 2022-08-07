import React from "react";
import style from "./my-button.module.css";

export type MyButtonVariant = "outlined" | "naked";

export interface MyButtonProp {
  variant?: MyButtonVariant;
  small?: boolean;
  className?: string;
}

const MyButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & MyButtonProp
> = ({ children, variant, small, className, ...props }) => {
  const buttonClass = `${style.wrapper} ${className || ""} ${
    variant === "naked" && "before:hidden"
  } ${
    small
      ? "py-2 px-4 before:rounded-xl after:rounded-xl"
      : "py-3 px-8 before:rounded-2xl after:rounded-2xl"
  }`;

  const contentClass = `${style.content} ${small ? "text-md" : "text-lg"}`;

  return (
    <button className={buttonClass} {...props}>
      <span className={contentClass}>{children}</span>
    </button>
  );
};

export default MyButton;
