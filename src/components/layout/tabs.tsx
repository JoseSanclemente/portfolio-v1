"use client";
// Next
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Components
import Button from "@/src/components/button";

// Types
import { TabsProperties } from "@/src/types/Tabs";
import { useTranslations } from "next-intl";

import { TabsInfo } from "@/src/db/data";
import LocaleDropdown from "./locale-dropdown";

const HIGHLIGHTED_TAB = "About";

const Tabs = ({ children }: TabsProperties) => {
  const currentPath = usePathname();
  const router = useRouter();

  const t = useTranslations();

  const handleOnClick = (tabPath: string) => {
    router.push(tabPath);
  };

  const isActiveTab = (tabPath: string) => {
    return tabPath === currentPath ? "active-btn" : "";
  };

  return (
    <div>
      <nav className="max-w-screen sticky top-0 z-10 -mx-6 flex flex-col items-start justify-start gap-y-6 bg-gray-dark px-6 py-6 sm:flex-row sm:items-center sm:gap-y-0 xl:pt-20">
        <div className="flex flex-1 flex-row gap-x-4">
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
        </div>
        <LocaleDropdown />
      </nav>

      {<div key={currentPath}>{children}</div>}
    </div>
  );
};

export default Tabs;
