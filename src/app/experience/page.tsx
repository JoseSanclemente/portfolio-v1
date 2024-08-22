"use client";

//React
import { useEffect, useState } from "react";

// Components
import Experience from "@/components/Experience/Experience";

// Types
import { ExperienceProperties } from "@/types/Experience";

// Utils
import { Dummydb } from "@/db/dummy";
import { Datatype } from "@/types/Database";

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([] as ExperienceProperties[]);

  useEffect(() => {
    // TODO: Connect with a real db or a CMS
    const experienceDatabase = Dummydb.find(
      (data) => data.type === Datatype.Experience,
    );

    if (experienceDatabase?.experienceList)
      setExperiences(experienceDatabase.experienceList);
  }, []);

  return (
    <section className="timeline">
      {experiences.map((experienceInfo) => {
        return (
          <Experience
            key={experienceInfo.company}
            {...experienceInfo}
          ></Experience>
        );
      })}
    </section>
  );
};

export default ExperiencePage;
