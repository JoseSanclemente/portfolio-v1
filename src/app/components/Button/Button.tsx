"use client";
// React
import { useEffect, useState } from "react";

// Utils
import {
  GradientBorderClass,
  TailwindHoverBorderColor,
  TailwindThemeColors,
} from "@/app/styles/theme";

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
  });

  return (
    <div
      className={`py-2 px-4 text-center bg-transparent border rounded-xl border-gray-dark text-gray-light active:bg-gray-light active:text-gray-dark cursor-pointer select-none ${borderClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
