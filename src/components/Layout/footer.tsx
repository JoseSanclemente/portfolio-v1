import Image from "next/image";
import Link from "next/link";

// Icons
import LinkedInLogo from "@/public/LinkedIn.svg";
import InstagramLogo from "@/public/Instagram.svg";
import FigmaLogo from "@/public/Figma.svg";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Layout");

  return (
    <footer>
      <div className="mb-12 mt-6 flex gap-x-4 md:mt-0">
        <Link
          href="https://www.linkedin.com/in/sanclemente-jose/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-100 transition-opacity duration-300 hover:opacity-100 lg:opacity-30"
        >
          <Image src={LinkedInLogo} alt="LinkedIn logo" />
        </Link>
        <Link
          href="https://www.instagram.com/panqueso.sanclemente/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-100 transition-opacity duration-300 hover:opacity-100 lg:opacity-30"
        >
          <Image src={InstagramLogo} alt="Instagram logo" />
        </Link>
        <Link
          href="https://www.figma.com/@josesanclemente"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-100 transition-opacity duration-300 hover:opacity-100 lg:opacity-30"
        >
          <Image src={FigmaLogo} alt="Figma logo" />
        </Link>
      </div>
      <p className="hidden lg:block">
        2024 - {t("made_with")}
        <span className="gradient font-bold">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
        </span>
      </p>
    </footer>
  );
}
