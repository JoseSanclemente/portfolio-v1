export enum TailwindThemeColors {
  Red = "red",
  Green = "green",
  Purple = "purple",
  GrayDark = "gray-dark",
  GrayLight = "gray-light",
}

type ColorObject = Record<TailwindThemeColors, string>;

export const TailwindHoverBorderColor: ColorObject = {
  [TailwindThemeColors.Red]: "hover:border-red",
  [TailwindThemeColors.Green]: "hover:border-green",
  [TailwindThemeColors.Purple]: "hover:border-purple",
  [TailwindThemeColors.GrayDark]: "hover:border-gray-dark",
  [TailwindThemeColors.GrayLight]: "hover:border-gray-light",
};

export const GradientTextClass = "gradient";
export const GradientUnderlineTextClass = "gradient gradient--underline";
export const GradientBorderClass = "gradient--border";
