"use client";
// Next
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useRef, useLayoutEffect, useMemo, useCallback } from "react";

// Types
import { TabsProperties } from "@/src/types/Tabs";
import { useTranslations } from "next-intl";

import { TabsInfo } from "@/src/db/data";
import LocaleDropdown from "./locale-dropdown";

const SLIDE_TRANSITION =
  "transform 400ms cubic-bezier(0.4,0,0.2,1), font-size 400ms ease-in-out, color 300ms ease-in-out";
const FADE_TRANSITION =
  "opacity 250ms ease-in-out, font-size 400ms ease-in-out, color 300ms ease-in-out";
const MOVE_TRANSITION =
  "transform 400ms cubic-bezier(0.4,0,0.2,1), font-size 400ms ease-in-out, color 300ms ease-in-out";

const Tabs = ({ children }: TabsProperties) => {
  const currentPath = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const sortedTabs = useMemo(
    () =>
      [...TabsInfo].sort((a, b) =>
        a.path === currentPath ? 1 : b.path === currentPath ? -1 : 0,
      ),
    [currentPath],
  );

  const linkRefs = useRef<Map<string, HTMLAnchorElement | null>>(new Map());
  const setLinkRef = useCallback(
    (path: string) => (el: HTMLAnchorElement | null) => {
      linkRefs.current.set(path, el);
    },
    [],
  );
  const prevRectsRef = useRef<Map<string, DOMRect>>(new Map());
  const prevPathRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    const prevPath = prevPathRef.current;

    if (prevPath !== null && prevPath !== currentPath) {
      const newRects = new Map<string, DOMRect>();
      linkRefs.current.forEach((el, path) => {
        if (el) newRects.set(path, el.getBoundingClientRect());
      });

      linkRefs.current.forEach((el, path) => {
        if (!el) return;
        const prevRect = prevRectsRef.current.get(path);
        const newRect = newRects.get(path);
        if (!prevRect || !newRect) return;

        if (path === currentPath) {
          const deltaY = prevRect.top - newRect.top;
          if (deltaY !== 0) {
            el.style.transform = `translateY(${deltaY}px)`;
            el.style.transition = "none";
            el.getBoundingClientRect();
            el.style.transition = SLIDE_TRANSITION;
            el.style.transform = "";
          }
        } else if (path === prevPath) {
          el.style.opacity = "0";
          el.style.transition = "none";
          el.getBoundingClientRect();
          el.style.transition = FADE_TRANSITION;
          el.style.opacity = "1";
        } else {
          const deltaY = prevRect.top - newRect.top;
          if (deltaY !== 0) {
            el.style.transform = `translateY(${deltaY}px)`;
            el.style.transition = "none";
            el.getBoundingClientRect();
            el.style.transition = MOVE_TRANSITION;
            el.style.transform = "";
          }
        }
      });

      newRects.forEach((rect, path) => prevRectsRef.current.set(path, rect));
    } else if (prevPath === null) {
      linkRefs.current.forEach((el, path) => {
        if (el) prevRectsRef.current.set(path, el.getBoundingClientRect());
      });
    }

    prevPathRef.current = currentPath;
  }, [currentPath]);

  const handleClick = (e: React.MouseEvent, tabPath: string) => {
    if (tabPath === currentPath) return;
    e.preventDefault();

    linkRefs.current.forEach((el, path) => {
      if (el) prevRectsRef.current.set(path, el.getBoundingClientRect());
    });

    router.push(tabPath);
  };

  return (
    <div>
      <nav className="relative top-0 z-10 -mx-6 flex max-w-screen flex-col items-start justify-start gap-y-6 px-6 py-6 sm:flex-row sm:items-center sm:gap-y-0 xl:pt-20">
        <div className="flex flex-1 flex-col gap-y-2">
          {sortedTabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              ref={setLinkRef(tab.path)}
              onClick={(e) => handleClick(e, tab.path)}
              className={`font-[family-name:var(--font-boldonse)] hover:text-gray-light ${tab.path === currentPath ? "text-4xl text-gray-light" : "text-lg opacity-50"}`}
            >
              {t(`Titles.${tab.title}`)}
            </Link>
          ))}
        </div>
        <LocaleDropdown />
      </nav>

      <div key={currentPath} className="page-fade-in">
        {children}
      </div>
    </div>
  );
};

export default Tabs;
