"use client";
// React
import { act, useState } from "react";

// Components
import Button from "../Button/Button";
import Experience from "../Experience/Experience";
import About from "../About/About";

// Database
import { DatabaseType, Datatype } from "@/app/db/dummy";

type TabsProperties = {
  tabEntries: DatabaseType[];
};

const HIGHLIGHTED_TAB = "About";

const Tabs = ({ tabEntries }: TabsProperties) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnClick = (tabIndex: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTab(tabIndex);
  };

  const renderContent = () => {
    const data = tabEntries[activeTab];
    const dataType = data?.type;

    if (!dataType) {
      return <></>;
    }

    if (dataType === Datatype.Experience) {
      return (
        <div className="timeline flex flex-col gap-y-10">
          {data.experienceList?.map((experienceData) => (
            <Experience
              key={experienceData.company}
              {...experienceData}
            ></Experience>
          ))}
        </div>
      );
    }

    if (dataType === Datatype.About) {
      return (
        <div className="max-w-fit leading-8">
          <About />
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="max-w-screen sticky top-0 z-10 -mx-6 flex flex-row justify-start gap-x-4 bg-gray-dark px-6 py-6 xl:pt-20">
        {tabEntries &&
          tabEntries.map((tabEntry, index) => (
            <Button
              key={tabEntry.name}
              text={tabEntry.name}
              borderGradient={tabEntry.name === HIGHLIGHTED_TAB}
              onClick={() => handleOnClick(index)}
              className={activeTab === index ? "active-btn" : ""}
            ></Button>
          ))}
      </nav>

      {
        <div key={activeTab} className="fade-animation">
          {renderContent()}
        </div>
      }
    </div>
  );
};

export default Tabs;
