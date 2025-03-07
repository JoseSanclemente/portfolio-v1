"use client";
// React
import { useEffect, useState } from "react";

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
  const [borderClass, setBorderClass] = useState("");

  useEffect(() => {
    borderGradient
      ? setBorderClass(GradientBorderClass)
      : setBorderClass(TailwindHoverBorderColor[TailwindThemeColors.GrayLight]);
  }, [borderGradient]);

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
