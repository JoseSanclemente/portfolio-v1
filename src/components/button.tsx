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
      className={`cursor-pointer rounded-xl border border-gray-dark bg-transparent px-4 py-2 text-center text-gray-light shadow transition active:bg-gray-light active:text-gray-dark ${borderClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
