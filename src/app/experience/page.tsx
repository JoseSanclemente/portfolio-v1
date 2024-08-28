// Components
import JobExperience from "@/src/components/experience/job-experience";

// Data
import { ExperienceInfo } from "@/src/db/data";

const Page = () => {
  return (
    <section className="timeline flex flex-col gap-y-9">
      {ExperienceInfo.map((experienceInfo) => {
        return (
          <JobExperience
            key={experienceInfo.company}
            {...experienceInfo}
          ></JobExperience>
        );
      })}
    </section>
  );
};

export default Page;
