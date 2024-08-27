"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// React
import { useEffect, useState } from "react";

// Icons
import ExternalLink from "@/public/ExternalLink.svg";

// Types
import { ExperienceProperties } from "@/src/types/Experience";

// Utils
import { TailwindTextColor } from "@/src/theme";
import { translateDate } from "@/src/utils/date";

// i18n
import { useTranslations } from "next-intl";
import { getUserLocale } from "@/src/services/locale";

const JobExperience = (props: ExperienceProperties) => {
  const t = useTranslations("Experience");

  const [titleColor, setTitleColor] = useState("text-slate-200");
  const [locale, setLocale] = useState("");

  useEffect(() => {
    getUserLocale().then((userLocale) => setLocale(userLocale));
  }, []);

  const handleMouseEnter = () => {
    setTitleColor(TailwindTextColor[props.color]);
  };

  const handleMouseLeave = () => {
    setTitleColor("text-slate-200");
  };

  const getDescriptionTranslationKey = (name: string, index: number) => {
    const descriptionKey = `desc_${index}`;

    return `${name}.${descriptionKey}`;
  };

  const getExperienceTime = (from: Date, to: Date | string) => {
    if (typeof to === "string" && to !== "") {
      return `(${translateDate(from, locale)} - ${t("present")})`;
    }

    return `(${translateDate(from, locale)} - ${translateDate(to, locale)})`;
  };

  return (
    <div
      className={`timeline-event max-w-100 pl-6`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3
        className={`mb-2 text-2xl font-extrabold transition-colors duration-200 ${titleColor}`}
      >
        {props.title}
      </h3>

      <p className="mb-7 flex flex-col md:block">
        <Link
          className="mb-2 me-1 md:mb-0"
          href={props.companyURL}
          target="_blank"
        >
          <span className="underline">{props.company}</span>
        </Link>

        {getExperienceTime(props.from, props.to)}
      </p>

      <div className="flex flex-col gap-y-7">
        {props.projects.map((project, index) => (
          <div className="max-w-100" key={project.url}>
            {project.name && (
              <Link
                href={project.url}
                className="bounce-animation text-slate-200 mb-1 flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="text-xl font-extrabold">{project.name}</h4>
                <Image
                  className="ms-1 pb-1"
                  src={ExternalLink}
                  alt="External browser tab icon"
                />
              </Link>
            )}

            <p>{t(getDescriptionTranslationKey(props.company, index))}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobExperience;
