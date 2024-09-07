"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Breadcrumbs from "./breadcrumbs";

// Icons
import ExternalLink from "@/public/ExternalLink.svg";

// Types
import { ExperienceProperties } from "@/src/types/Experience";

// Utils
import { translateDate } from "@/src/utils/date";

// i18n
import { useFormatter, useTranslations } from "next-intl";
import { getAnimationDelay } from "@/src/utils/animation";

const JobExperience = (props: ExperienceProperties) => {
  const t = useTranslations("Experience");
  const format = useFormatter();

  const getDescriptionTranslationKey = (name: string, index: number) => {
    const descriptionKey = `desc_${index}`;

    return `${name}.${descriptionKey}`;
  };

  const getExperienceTime = (from: Date, to: Date | string) => {
    if (typeof to === "string" && to !== "") {
      return `(${translateDate(from, format)} - ${t("present")})`;
    }

    return `(${translateDate(from, format)} - ${translateDate(to, format)})`;
  };

  return (
    <div className={`timeline-event max-w-100 pl-6`}>
      <h3
        className={
          "mb-2 text-2xl font-extrabold text-slate-200 transition-colors duration-200"
        }
      >
        {props.title}
      </h3>

      <p className="mb-5 flex flex-col md:mb-7 md:block">
        <Link
          className="mb-2 me-1 md:mb-0"
          href={props.companyURL}
          target="_blank"
        >
          <span className="underline transition-colors hover:text-slate-200">
            {props.company}
          </span>
        </Link>

        {getExperienceTime(props.from, props.to)}
      </p>

      <div className="flex flex-col gap-y-10">
        {props.projects.map((project, index) => (
          <div
            className="fade-animation max-w-100"
            key={project.url}
            style={{ animationDelay: getAnimationDelay(index) }}
          >
            {project.name && (
              <Link
                href={project.url}
                className="bounce-animation mb-1 flex text-slate-200"
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
            <Breadcrumbs itemsList={project.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobExperience;
