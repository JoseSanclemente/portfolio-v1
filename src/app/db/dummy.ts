import { ExperienceModuleProperties } from "../components/ExperienceModule/ExperienceModule";

const dateFrom = new Date('August 2, 2022');
const dateTo = new Date('June 18, 2024');

export const DummyData: ExperienceModuleProperties[] = [
    {
        title: "Senior Frontend Analyst",
        company: "Perficient",
        companyURL: "https://www.perficient.com/",
        color: "red",
        from: new Date(2022, 8),
        projects: [
            {
                name: "CAT", 
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                url: "https://parts.cat.com/es/catcorp"
            },
            {
                name: "DFIN", 
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                url: "https://www.dfinsolutions.com/"
            }
        ]
    },
    {
        title: "Web UI Developer",
        company: "Globant",
        companyURL: "https://www.globant.com/",
        color: "green",
        from: new Date(2021, 5),
        to: new Date(2022, 8),
        projects: [
            {
                name: "Pvolve", 
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                url: "https://www.pvolve.com/"
            },
        ]
    },
    {
        title: "Founding Engineer",
        company: "Truora",
        companyURL: "https://www.truora.com/en/",
        color: "purple",
        from: new Date(2018, 6),
        to: new Date(2021, 5),
        projects: [
            {
                name: "", 
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                url: ""
            },
        ]
    }
]