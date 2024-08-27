// Components
import JobExperience from "@/src/components/JobExperience/job-experience";

// Data
import { ExperienceInfo } from "@/src/db/data";

const Page = () => {
  return (
    <section className="timeline">
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
