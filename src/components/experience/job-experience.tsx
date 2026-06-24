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

  const BASE_DELAY = 2;

  return (
    <div className={`timeline-event pl-6`}>
      <h3
        className="fade-animation mb-2 text-2xl font-extrabold text-slate-200 transition-colors duration-200"
        style={{ animationDelay: getAnimationDelay(BASE_DELAY) }}
      >
        {props.title}
      </h3>

      <p
        className="fade-animation mb-5 flex flex-col md:mb-7 md:block"
        style={{ animationDelay: getAnimationDelay(BASE_DELAY + 1) }}
      >
        <Link
          className="me-1 mb-2 md:mb-0"
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
        {props.projects.map((project, projectIndex) => {
          const projectBase = BASE_DELAY + 2 + projectIndex * 3;
          return (
            <div key={project.url}>
              {project.name && (
                <Link
                  href={project.url}
                  className="bounce-animation fade-animation mb-1 flex text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: getAnimationDelay(projectBase) }}
                >
                  <h4 className="text-xl font-extrabold">{project.name}</h4>
                  <Image
                    className="ms-1 pb-1"
                    src={ExternalLink}
                    alt="External browser tab icon"
                    width={24}
                    height={24}
                  />
                </Link>
              )}

              <p
                className="fade-animation"
                style={{ animationDelay: getAnimationDelay(projectBase + 1) }}
              >
                {t(getDescriptionTranslationKey(props.company, projectIndex))}
              </p>
              <div
                className="fade-animation"
                style={{ animationDelay: getAnimationDelay(projectBase + 2) }}
              >
                <Breadcrumbs itemsList={project.skills} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobExperience;
