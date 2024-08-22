"use client";
// Next
import { usePathname } from "next/navigation";
import Link from "next/link";

// React
import { useEffect, useState } from "react";

// Components
import Button from "../Button/Button";

// Types
import { TabsProperties } from "@/types/Tabs";
import { useTranslations } from "next-intl";

const HIGHLIGHTED_TAB = "About";

// FIXME: Fix render of the pages
const Tabs = ({ tabList, children }: TabsProperties) => {
  const [activeTab, setActiveTab] = useState(-1);
  const currentPath = usePathname();

  const t = useTranslations();

  useEffect(() => {
    const currentActiveTab = tabList.findIndex(
      (tab) => tab.path === currentPath,
    );

    setActiveTab(currentActiveTab);
  }, []);

  const handleOnClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <nav className="max-w-screen sticky top-0 z-10 -mx-6 flex flex-row justify-start gap-x-4 bg-gray-dark px-6 py-6 xl:pt-20">
        {tabList &&
          tabList.map((tab, index) => (
            <Link key={tab.path} href={`${tab.path}`}>
              <Button
                text={t(`Titles.${tab.title}`)}
                borderGradient={tab.title === HIGHLIGHTED_TAB}
                onClick={() => handleOnClick(index)}
                className={index === activeTab ? "active-btn" : ""}
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
