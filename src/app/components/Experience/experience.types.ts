import { TailWindThemeColors } from "@/app/styles/theme";

export type ExperienceProperties = {
  title: string;
  company: string;
  companyURL: string;
  color: TailWindThemeColors;
  from: Date;
  to?: Date;
  projects: ProjectProperties[];
};

export type ProjectProperties = {
  name: string;
  description: string;
  url: string;
};
