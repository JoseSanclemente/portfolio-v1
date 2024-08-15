"use client";
// React
import { useState } from "react";

// Components
import Button from "../Button/Button";
import Experience from "../Experience/Experience";
import About from "../About/About";

// Database
import { DatabaseEntry, DataContentType, Datatype } from "@/app/db/dummy";

type TabsProperties = {
  tabEntries: DatabaseEntry[];
};

const Tabs = ({ tabEntries }: TabsProperties) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = (dataEntry: DatabaseEntry) => {
    if (!dataEntry?.type) {
      return <></>;
    }

    const dataType = dataEntry.type;

    if (dataType === Datatype.Experience) {
      return (
        <div className="flex flex-col gap-y-10 timeline">
          {(dataEntry.content as DataContentType[typeof dataType]).map(
            (experienceData) => (
              <Experience
                key={experienceData.company}
                {...experienceData}
              ></Experience>
            )
          )}
        </div>
      );
    }

    if (dataType === Datatype.About) {
      return (
        <div className="max-w-fit pr-6 leading-8">
          <About />
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="flex flex-row justify-between gap-x-4 max-w-fit mt-4 lg:mt-0 mb-8">
        {tabEntries &&
          tabEntries.map((tabEntry, index) => (
            <Button
              key={tabEntry.name}
              text={tabEntry.name}
              borderGradient={tabEntry.name === "About"}
              onClick={() => setActiveTab(index)}
              className={activeTab === index ? "active" : ""}
            ></Button>
          ))}
      </nav>
      <div>{renderContent(tabEntries[activeTab])}</div>
    </div>
  );
};

export default Tabs;
