// Next
import type { Metadata } from "next";
import { Boldonse, Space_Grotesk } from "next/font/google";

// Styles
import "@/src/styles/globals.css";
import "@/src/styles/animations.css";

// i18n
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// Components
import Tabs from "@/src/components/layout/tabs";
import SocialMedia from "@/src/components/layout/social-media";
import Header from "@/src/components/layout/header";
import AsciiWater from "@/src/components/ascii-water";
import Footer from "@/src/components/layout/footer";

const boldonse = Boldonse({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-boldonse",
  adjustFontFallback: false,
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.panqueso.dev"),
  title: "Jose Sanclemente",
  description:
    "Bringing tech products to life by telling stories is my passion! <3",
  openGraph: {
    title: "Jose Sanclemente",
    description:
      "Bringing tech products to life by telling stories is my passion! <3",
    url: "https://www.panqueso.dev",
    siteName: "Jose Sanclemente — Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://www.panqueso.dev",
    languages: {
      en: "https://www.panqueso.dev",
      es: "https://www.panqueso.dev",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${boldonse.variable} ${spaceGrotesk.variable} ${spaceGrotesk.className} bg-gray-dark overflow-y-scroll scroll-smooth text-base text-slate-400 antialiased select-none md:leading-loose`}
      >
        <AsciiWater />

        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col gap-x-14 px-6 py-12 md:px-12 md:py-20 lg:flex-row lg:py-0 xl:px-0">
            <div className="top-0 flex max-h-screen w-full flex-col justify-between gap-y-8 lg:sticky lg:w-1/2 lg:py-24">
              <Header />

              <SocialMedia />
            </div>

            <main className="w-full lg:w-1/2 lg:py-24">
              <Tabs>{children}</Tabs>
            </main>
          </div>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
