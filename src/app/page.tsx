// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import LinkedInLogo from "./assets/LinkedIn.svg";
import InstagramLogo from "./assets/Instagram.svg";
import FigmaLogo from "./assets/Figma.svg";

// Components
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div className="min-h-fit xl:min-h-screen px-4 py-4 md:px-10 md:py-12 xl:px-36 xl:py-36 grid grid-col-2 grid-rows-2">
      <header style={{ border: "1px solid blue" }}>
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

      <main
        className="lg:col-start-2 lg:row-start-1 lg:row-end-3"
        style={{ border: "1px solid red" }}
      >
        <nav className="flex flex-row justify-between gap-x-4 max-w-fit mt-8 lg:mt-0 mb-12">
          <Button text="Experience"></Button>
          <Button text="About" borderGradient></Button>
        </nav>
        Render
      </main>

      <footer className="content-end" style={{ border: "1px solid green" }}>
        <div className="max-w-28 mb-12 flex justify-between align-items-center">
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
        © 2024 - Jose Sanclemente - Made with{" "}
        <span className="font-bold underline gradient gradient--underline">
          <Link href="https://nextjs.org/" target="_blank">
            Next.js
          </Link>
        </span>
      </footer>
    </div>
  );
}
