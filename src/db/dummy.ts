import { ExperienceProperties } from "../types/Experience";
import { TailwindThemeColors } from "../styles/theme";
import { DatabaseType, Datatype } from "@/types/Database";

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
          "Build new landing pages tailored for various marketing campaigns to increase engagement and conversion rates. Develop modular templates for 20 types of banners, streamlining production for CAT's dealers. Organize and deliver web components tailored to each marketing campaign for 10 clients, ensuring consistency and effectiveness across all platforms.",
        url: "https://parts.cat.com/es/catcorp",
      },
      {
        name: "DFIN",
        description:
          "Engineer a new feature for the text editor product that tracks changes in the document, enhancing collaboration and version control. Maintain and test the SlateJS library, ensuring stability and performance for the text editor. Optimize the web application built with React and TypeScript to improve speed and user experience. Deliver new features using LaunchDarkly feature flags for controlled and targeted deployment.",
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
          "Optimize React components to enhance responsiveness and reduce loading times. Lead the team in planning and executing the next iterations of the product. Integrate Braze and Segment into the web app to effectively track and centralize user data and leads. Develop innovative user interfaces using Next.js. Implement and deliver new features with Optimizely feature flags for controlled deployment and testing.",
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
          "Design and implement a scalable backend architecture using Golang and AWS. Develop a web application with Vue 2 and TypeScript. Lead the team in managing product requirements. Conduct user research to inform UX design and integrate the company's design system into the product.",
        url: "",
      },
    ],
  },
];

export const Dummydb: DatabaseType[] = [
  {
    name: "Experience",
    type: Datatype.Experience,
    experienceList: DummyExperience,
  },
  { name: "About", type: Datatype.About },
];
