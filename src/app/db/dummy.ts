import { ExperienceProperties } from "../components/Experience/experience.types";
import { TailwindThemeColors } from "../styles/theme";

export enum Datatype {
  Experience = "experience",
  About = "about",
}

type ContentType = ExperienceProperties[] | string;

export type DatabaseEntry = {
  name: string;
  type: Datatype;
  content: ContentType;
};

export type DataContentType = {
  [Datatype.Experience]: ExperienceProperties[];
  [Datatype.About]: string;
};

export const DummyExperience: ExperienceProperties[] = [
  {
    title: "Senior Frontend Analyst",
    company: "Perficient",
    companyURL: "https://www.perficient.com/",
    color: TailwindThemeColors.Red,
    from: new Date(2022, 8),
    to: "Present",
    projects: [
      {
        name: "CAT",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        url: "https://parts.cat.com/es/catcorp",
      },
      {
        name: "DFIN",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        url: "https://www.dfinsolutions.com/",
      },
    ],
  },
  {
    title: "Web UI Developer",
    company: "Globant",
    companyURL: "https://www.globant.com/",
    color: TailwindThemeColors.Green,
    from: new Date(2021, 5),
    to: new Date(2022, 8),
    projects: [
      {
        name: "Pvolve",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        url: "https://www.pvolve.com/",
      },
    ],
  },
  {
    title: "Founding Engineer",
    company: "Truora",
    companyURL: "https://www.truora.com/en/",
    color: TailwindThemeColors.Purple,
    from: new Date(2018, 6),
    to: new Date(2021, 5),
    projects: [
      {
        name: "",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        url: "",
      },
    ],
  },
];

// This is just for testing
const DataContent: DataContentType = {
  [Datatype.Experience]: DummyExperience,
  [Datatype.About]: "",
};

export const Database: DatabaseEntry[] = [
  {
    name: "Experience",
    type: Datatype.Experience,
    content: DataContent[Datatype.Experience],
  },
  { name: "About", type: Datatype.About, content: DataContent[Datatype.About] },
];
