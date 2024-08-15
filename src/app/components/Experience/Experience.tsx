"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import ExternalLink from "../../assets/ExternalLink.svg";
import { ExperienceProperties } from "./experience.types";

// Utils
import { TailwindTextColor } from "@/app/styles/theme";
import { useState } from "react";

import styles from "./experience.module.css";

const formatDate = (date: Date | undefined) => {
  if (!date) {
    return "Present";
  }

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date?.getFullYear();

  return `${month} ${year}`;
};

const ExperienceModule = (props: ExperienceProperties) => {
  const [titleColor, setTitleColor] = useState("");

  const handleMouseEnter = () => {
    setTitleColor(TailwindTextColor[props.color]);
  };

  const handleMouseLeave = () => {
    setTitleColor("");
  };

  return (
    <div
      className={`max-w-fit pl-6 ${styles.timelineEvent}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className={`mb-2 text-2xl font-extrabold ${titleColor}`}>
        {props.title}
      </h3>

      <p className="mb-4">
        <Link className="me-1" href={props.companyURL} target="_blank">
          <span className="underline">{props.company}</span>
        </Link>

        {` (${formatDate(props.from)} - ${formatDate(props.to)})`}
      </p>

      <div className="flex flex-col gap-y-4">
        {props.projects &&
          props.projects.map((project) => (
            <div className="max-w-sm" key={project.url}>
              {project.name && (
                <Link href={project.url} className="flex">
                  <h4 className="text-xl font-extrabold">{project.name}</h4>
                  <Image
                    className="pt-1"
                    src={ExternalLink}
                    alt="External Link icon"
                  />
                </Link>
              )}
              <p className="leading-7">{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperienceModule;
