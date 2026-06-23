export type ButtonProperties = {
  text: string;
  borderGradient?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};
