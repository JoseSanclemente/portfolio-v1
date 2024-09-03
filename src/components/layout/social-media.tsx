import Image from "next/image";
import Link from "next/link";

// Icons
import LinkedInLogo from "@/public/LinkedIn.svg";
import InstagramLogo from "@/public/Instagram.svg";
import FigmaLogo from "@/public/Figma.svg";

export default function SocialMedia() {
  return (
    <div className="mb-12 mt-6 flex gap-x-6 md:mt-0" aria-label="Social media">
      <Link
        href="https://www.linkedin.com/in/sanclemente-jose/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-100 transition-opacity duration-300 hover:opacity-100 lg:opacity-30"
        aria-label="LinkedIn (opens in a new tab)"
        title="LinkedIn"
      >
        <Image src={LinkedInLogo} alt="LinkedIn logo" width={30} />
      </Link>
      <Link
        href="https://www.instagram.com/panqueso.sanclemente/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-100 transition-opacity duration-300 hover:opacity-100 lg:opacity-30"
        aria-label="Instagram (opens in a new tab)"
        title="Instagram"
      >
        <Image src={InstagramLogo} alt="Instagram logo" width={32} />
      </Link>
      <Link
        href="https://www.figma.com/@josesanclemente"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-100 transition-opacity duration-300 hover:opacity-100 lg:opacity-30"
        aria-label="Figma (opens in a new tab)"
        title="Figma"
      >
        <Image src={FigmaLogo} alt="Figma logo" width={23} />
      </Link>
    </div>
  );
}
