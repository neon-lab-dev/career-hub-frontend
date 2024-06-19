import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "muted" | "ghost" | "normal" | "natural";
};

const classNames = {
  default:
    "py-3 px-6 rounded-lg text-base font-600 disabled:pointer-events-none transition-colors ",
  variants: {
    primary:
      "enabled:bg-gradient-primary-button enabled:shadow-primary-button text-primary-50 disabled:shadow-none enabled:hover:bg-gradient-primary-button-hover disabled:bg-neutral-50 disabled:text-neutral-300",
    secondary:
      "border border-secondary-100 bg-secondary-50 text-secondary-600 hover:border-secondary-100 hover:bg-secondary-100 disabled:border-none disabled:bg-neutral-50 disabled:text-neutral-300",
    outline: "border border-primary-500 text-primary-500 disabled:opacity-50",
    muted:
      "border border-primary-200 bg-primary-50 text-primary-500 disabled:opacity-50",
    ghost: "",
    normal:
      "text-base bg-primary-500 text-white rounded-lg px-6 font-semibold py-2",
    natural:
    "text-base bg-neutral-100 rounded-lg px-6 font-semibold py-2"
  },
} as const;

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={twMerge(
        classNames.default,
        classNames.variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
