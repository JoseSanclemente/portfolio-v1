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
  const [experienceList, setExperienceList] = useState(
    [] as ExperienceProperties[] | undefined,
  );

  useEffect(() => {
    const experienceDatabase = Dummydb.find(
      (data) => data.type === Datatype.Experience,
    );

    setExperienceList(experienceDatabase?.experienceList);
  }, []);

  return (
    <section className="timeline">
      {experienceList?.map((experienceData) => {
        return (
          <Experience
            key={experienceData.company}
            {...experienceData}
          ></Experience>
        );
      })}
    </section>
  );
};

export default ExperiencePage;
