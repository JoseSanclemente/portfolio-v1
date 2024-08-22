"use client";

// Next
import Image from "next/image";
import Link from "next/link";

//React
import { useState, useTransition } from "react";

// Icons
import ExternalLink from "../../../public/ExternalLink.svg";

// Types
import { ExperienceProperties } from "@/types/Experience";

// Utils
import { TailwindTextColor } from "@/styles/theme";
import { translateDate } from "@/utils/date";
import { useTranslations } from "next-intl";

const Experience = (props: ExperienceProperties) => {
  const t = useTranslations("Experience");

  const [titleColor, setTitleColor] = useState("");

  const handleMouseEnter = () => {
    setTitleColor(TailwindTextColor[props.color]);
  };

  const handleMouseLeave = () => {
    setTitleColor("");
  };

  const getDescriptionTranslationKey = (name: string, index: number) => {
    const descriptionKey = `desc_${index}`;

    return `${name}.${descriptionKey}`;
  };

  const getExperienceTime = (from: Date, to: Date | string) => {
    if (typeof to === "string" && to !== "") {
      return `(${translateDate(from)} - ${t("present")})`;
    }

    return `(${translateDate(from)} - ${translateDate(to)})`;
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

      <p className="mb-4">
        <Link className="me-1" href={props.companyURL} target="_blank">
          <span className="underline">{props.company}</span>
        </Link>

        {getExperienceTime(props.from, props.to)}
      </p>

      <div className="flex flex-col gap-y-4">
        {props.projects &&
          props.projects.map((project, index) => (
            <div className="max-w-100" key={project.url}>
              {project.name && (
                <Link
                  href={project.url}
                  className="bounce-animation flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="text-xl font-extrabold">{project.name}</h4>
                  <Image
                    className="pt-1"
                    src={ExternalLink}
                    alt="External browser tab icon"
                  />
                </Link>
              )}
              <p className="leading-7">
                {t(getDescriptionTranslationKey(props.company, index))}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
