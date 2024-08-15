// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import LinkedInLogo from "./assets/LinkedIn.svg";
import InstagramLogo from "./assets/Instagram.svg";
import FigmaLogo from "./assets/Figma.svg";

// Components
import Button from "./components/Button/Button";
import ExperienceModule from "./components/Experience/Experience";

import { DummyData } from "./db/dummy";

export default function Home() {
  return (
    <div className="mx-auto min-h-fit xl:min-h-screen w-full sm:w-2/3 grid md:gap-x-20 xl:gap-x-44 py-20 xl:py-36 px-4 xl:px-0 xl:grid-cols-2 xl:grid-rows-2 gap-y-10 xl:gap-y-0">
      <header className="">
        <h1 className="mb-6 text-4xl lg:text-6xl font-extrabold leading-none">
          Jose
          <br />
          Sanclemente
        </h1>
        <h2 className="mb-6 text-xl lg:text-2xl font-bold">
          Frontend Developer &<br />
          <span className="gradient">Passionate about people</span>
        </h2>
        <p className="text-sm md:text-base">
          Bringing tech products to life by telling stories is my passion &lt;3
        </p>
      </header>

      <main className="lg:col-start-2 lg:row-start-1 lg:row-end-3">
        <nav className="flex flex-row justify-between gap-x-4 max-w-fit mt-4 lg:mt-0 mb-12">
          <Button text="Experience"></Button>
          <Button text="About" borderGradient></Button>
        </nav>

        <div className="flex flex-col gap-y-10 border-l">
          {DummyData.map((data) => (
            <ExperienceModule key={data.company} {...data}></ExperienceModule>
          ))}
        </div>
      </main>

      <footer className="mt-8 xl:mt-0 content-end md:place-self-start">
        <div className="mb-12 flex gap-x-4 justify-around sm:justify-start">
          <Link
            href="https://www.linkedin.com/in/sanclemente-jose/"
            target="_blank"
          >
            <Image src={LinkedInLogo} alt="LinkedIn logo" />
          </Link>
          <Link
            href="https://www.instagram.com/panqueso.sanclemente/"
            target="_blank"
          >
            <Image src={InstagramLogo} alt="Instagram logo" />
          </Link>
          <Link href="https://www.figma.com/@josesanclemente" target="_blank">
            <Image src={FigmaLogo} alt="Figma logo" />
          </Link>
        </div>
        <p className="text-center sm:text-start">
          {" "}
          © 2024 - Jose Sanclemente - Made with{" "}
          <span className="font-bold underline gradient gradient--underline">
            <Link href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
}
