import { TailwindThemeColors } from "@/src/theme";

export type ExperienceProperties = {
  title: string;
  company: string;
  companyURL: string;
  color: TailwindThemeColors;
  from: Date;
  to: Date | string;
  projects: ProjectProperties[];
};

export type ProjectProperties = {
  name: string;
  description: string;
  url: string;
};
