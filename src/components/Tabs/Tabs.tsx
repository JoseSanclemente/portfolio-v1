"use client";
// Next
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

// React
import { useEffect, useState } from "react";

// Components
import Button from "@/src/components/Button/Button";

// Types
import { TabsProperties } from "@/src/types/Tabs";
import { useTranslations } from "next-intl";

import { TabsInfo } from "@/src/db/data";

const HIGHLIGHTED_TAB = "About";

// FIXME: Fix render of the pages
const Tabs = ({ children }: TabsProperties) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentPath = usePathname();

  const t = useTranslations();

  useEffect(() => {
    const currentActiveTab = TabsInfo.findIndex(
      (tab) => tab.path === currentPath,
    );

    setActiveTab(currentActiveTab);
  }, [TabsInfo, currentPath]);

  const handleOnClick = (index: number, path: string) => {
    setActiveTab(index);

    window.scrollTo({ top: 0, behavior: "instant" });

    redirect(path);
  };

  const isActiveTab = (index: number) => {
    return index === activeTab ? "active-btn" : "";
  };

  return (
    <div>
      <nav className="max-w-screen sticky top-0 z-10 -mx-6 flex flex-row justify-start gap-x-4 bg-gray-dark px-6 py-6 xl:pt-20">
        {TabsInfo.map((tab, index) => (
          <Link key={tab.path} href={`${tab.path}`}>
            <Button
              text={t(`Titles.${tab.title}`)}
              borderGradient={tab.title === HIGHLIGHTED_TAB}
              onClick={() => handleOnClick(index, tab.path)}
              className={isActiveTab(index)}
            />
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
