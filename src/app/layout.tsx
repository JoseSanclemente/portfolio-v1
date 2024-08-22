// Next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// Styles
import "./globals.css";
import "@/styles/animations.css";

// i18n
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

// Icons
import LinkedInLogo from "../../public/LinkedIn.svg";
import InstagramLogo from "../../public/Instagram.svg";
import FigmaLogo from "../../public/Figma.svg";

// Components
import Tabs from "@/components/Tabs/Tabs";
import { TabsInfo } from "@/db/dummy";

// Vercel
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Sanclemente",
  description:
    "Bringing tech products to life by telling stories is my passion! 💚",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // RootLayout is an async function, so we must use getTranslations()
  // instead of useTranslations()
  const t = await getTranslations("Layout");

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} overflow-y-scroll scroll-smooth bg-gray-dark text-sm text-gray-light md:text-base`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col gap-x-14 px-6 py-12 md:px-12 md:py-20 lg:flex-row lg:py-0 xl:px-0">
            <div className="w-100 top-0 flex max-h-screen flex-col justify-between gap-y-8 lg:sticky lg:w-1/2 lg:py-24">
              <header>
                <h1 className="mb-6 text-4xl font-extrabold leading-none lg:text-6xl">
                  Jose
                  <br />
                  Sanclemente
                </h1>
                <h2 className="mb-6 text-xl font-bold lg:text-2xl">
                  {t("frontend_developer")} &<br />
                  <span className="gradient">
                    {t("passionated_about_people")}
                  </span>
                </h2>
                <p className="text-sm md:text-base">
                  {t("bringing_tech_products")}
                </p>
              </header>

              <footer>
                <div className="mb-12 flex gap-x-4">
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
                  © 2024 - {t("made_with")}
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
            </div>

            <main className="w-100 lg:w-1/2 lg:py-24">
              <Tabs tabList={TabsInfo}>{children}</Tabs>
            </main>

            {/* Visible only in mobile */}
            <footer>
              <p className="mt-24 text-center text-xs md:text-sm lg:hidden">
                © 2024 - {t("made_with")}
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
          </div>
        </NextIntlClientProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
