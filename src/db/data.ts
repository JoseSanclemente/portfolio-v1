import { ExperienceProperties } from "@/src/types/Experience";
import { TailwindThemeColors } from "@/src/theme";

export const TabsInfo = [
  { title: "Experience", path: "/experience" },
  { title: "About", path: "/about" },
];

export const ExperienceInfo: ExperienceProperties[] = [
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
        skills: ["TypeScript", "HTML", "CSS", "CMS"],
        url: "https://parts.cat.com/es/catcorp",
      },
      {
        name: "DFIN",
        skills: ["React.js", "TypeScript", "HTML", "CSS", "LauchDarkly"],
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
        skills: [
          "Next.js",
          "React.js",
          "TypeScript",
          "SASS",
          "Contentful",
          "Optimizely",
          "Segment",
          "Braze",
        ],
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
        skills: [
          "Vue.js",
          "TypeScript",
          "AWS",
          "Golang",
          "Terraform",
          "Storybook",
        ],
        url: "",
      },
    ],
  },
];
