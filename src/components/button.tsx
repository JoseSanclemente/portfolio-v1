"use client";
// Utils
import {
  GradientBorderClass,
  TailwindHoverBorderColor,
  TailwindThemeColors,
} from "@/src/theme";

// Types
import { ButtonProperties } from "@/src/types/Button";

const Button = ({
  text,
  borderGradient,
  onClick,
  className,
}: ButtonProperties) => {
  const borderClass = borderGradient
    ? GradientBorderClass
    : TailwindHoverBorderColor[TailwindThemeColors.GrayLight];

  return (
    <button
      className={`border-gray-dark active:bg-gray-light active:text-gray-dark cursor-pointer rounded-xl border bg-transparent px-4 py-2 text-center shadow transition ${borderClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
