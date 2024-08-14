"use client";
// Next
import Image from "next/image";
import Link from "next/link";

// React
import { ReactEventHandler, SyntheticEvent, useEffect, useState } from "react";

// Icons
import ExternalLink from "../../assets/ExternalLink.svg";

export type ExperienceModuleProperties = {
  title: string;
  company: string;
  companyURL: string;
  color: string;
  from: Date;
  to?: Date;
  projects: ProjectProperties[];
};

type ProjectProperties = {
  name: string;
  description: string;
  url: string;
};

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

/*TODO: 
- add title color change when hovering the component
*/
const ExperienceModule = (props: ExperienceModuleProperties) => {
  const [titleColor, setTitleColor] = useState("");

  const handleMouseEnter = () => {
    // setTitleColor(getHoverClass(props.color));
  };

  const handleMouseLeave = () => {
    //setTitleColor(getHoverClass(""));
  };

  const colorVariant: any = {
    red: "hover:text-red",
    green: "hover:text-green",
    purple: "hover:text-purple",
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3
        className={`mb-2 text-2xl font-extrabold ${colorVariant[props.color]}`}
      >
        {props.title}
      </h3>
      <p className="mb-4">
        <Link className="me-1" href={props.companyURL} target="_blank">
          <span className="underline">{props.company}</span>
        </Link>

        {` (${formatDate(props.from)} - ${formatDate(props.to)})`}
      </p>

      <div className="flex flex-col gap-y-4">
        {props.projects.map((project) => (
          <div className="max-w-sm" key={project.name}>
            <>
              {project.name ?? (
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
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceModule;
