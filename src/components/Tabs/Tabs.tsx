"use client";
// Next

import Link from "next/link";
// React
import { useState } from "react";

// Components
import Button from "../Button/Button";

// Types
import { TabsProperties } from "@/types/Tabs";

const HIGHLIGHTED_TAB = "About";

const Tabs = ({ tabList, children }: TabsProperties) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <nav className="max-w-screen sticky top-0 z-10 -mx-6 flex flex-row justify-start gap-x-4 bg-gray-dark px-6 py-6 xl:pt-20">
        {tabList &&
          tabList.map((tab, index) => (
            <Link replace key={tab.path} href={`/${tab.path}`}>
              <Button
                text={tab.title}
                borderGradient={tab.title === HIGHLIGHTED_TAB}
                onClick={() => handleOnClick(index)}
                className={activeTab === index ? "active-btn" : ""}
              ></Button>
            </Link>
          ))}
      </nav>

      {
        <div key={activeTab} className="fade-animation">
          {children}
        </div>
      }
    </div>
  );
};

export default Tabs;
