"use client";
// Next
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

// Components
import Button from "@/src/components/button";

// Types
import { TabsProperties } from "@/src/types/Tabs";
import { useTranslations } from "next-intl";

import { TabsInfo } from "@/src/db/data";

const HIGHLIGHTED_TAB = "About";

const Tabs = ({ children }: TabsProperties) => {
  const currentPath = usePathname();

  const t = useTranslations();

  const handleOnClick = (tabPath: string) => {
    redirect(tabPath);
  };

  const isActiveTab = (tabPath: string) => {
    return tabPath === currentPath ? "active-btn" : "";
  };

  return (
    <div>
      <nav className="max-w-screen sticky top-0 z-10 -mx-6 flex flex-row justify-start gap-x-4 bg-gray-dark px-6 py-6 xl:pt-20">
        {TabsInfo.map((tab) => (
          <Link key={tab.path} href={`${tab.path}`}>
            <Button
              text={t(`Titles.${tab.title}`)}
              borderGradient={tab.title === HIGHLIGHTED_TAB}
              onClick={() => handleOnClick(tab.path)}
              className={`${isActiveTab(tab.path)} border border-slate-400 transition-colors`}
            />
          </Link>
        ))}
      </nav>

      {
        <div key={currentPath} className="fade-animation">
          {children}
        </div>
      }
    </div>
  );
};

export default Tabs;
