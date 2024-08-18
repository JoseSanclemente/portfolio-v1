import { ExperienceProperties } from "./Experience";

export enum Datatype {
  Experience = "experience",
  About = "about",
}

export type DatabaseType = {
  name: string;
  type: Datatype;
  experienceList?: ExperienceProperties[];
};
