"use client";
// React
import { useEffect, useState } from "react";

// Styles
import {
  GradientBorderClass,
  TailwindHoverBorderColor,
  TailwindThemeColors,
} from "@/app/styles/theme";

const Button = (props: ButtonProperties) => {
  const [borderClass, setBorderClass] = useState("");

  useEffect(() => {
    props.borderGradient
      ? setBorderClass(GradientBorderClass)
      : setBorderClass(TailwindHoverBorderColor[TailwindThemeColors.GrayLight]);
  });

  return (
    <div
      className={`py-2 px-4 text-center bg-transparent border rounded-xl border-gray-dark text-gray-light active:bg-gray-light active:text-gray-dark cursor-pointer select-none ${borderClass}`}
    >
      {props.text}
    </div>
  );
};

export default Button;
