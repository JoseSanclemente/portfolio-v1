export enum TailWindThemeColors {
  Red = "red",
  Green = "green",
  Purple = "purple",
  GrayDark = "gray-dark",
  GrayLight = "gray-light",
}

type ColorObject = Record<TailWindThemeColors, string>;

export const TailwindTextColor: ColorObject = {
  [TailWindThemeColors.Red]: "text-red",
  [TailWindThemeColors.Green]: "text-green",
  [TailWindThemeColors.Purple]: "text-purple",
  [TailWindThemeColors.GrayDark]: "text-gray-dark",
  [TailWindThemeColors.GrayLight]: "text-gray-light",
};
