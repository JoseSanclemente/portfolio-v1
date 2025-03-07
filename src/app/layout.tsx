// Next
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
import CursorEffect from "@/src/components/cursor-effect";
import Footer from "@/src/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Sanclemente",
  description:
    "Bringing tech products to life by telling stories is my passion! <3",
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
        className={`${inter.className} select-none overflow-y-scroll scroll-smooth bg-gray-dark text-base text-slate-400 antialiased md:leading-loose`}
      >
        <CursorEffect />

        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col gap-x-14 px-6 py-12 md:px-12 md:py-20 lg:flex-row lg:py-0 xl:px-0">
            <div className="w-100 top-0 flex max-h-screen flex-col justify-between gap-y-8 lg:sticky lg:w-1/2 lg:py-24">
              <Header />

              <SocialMedia />
            </div>

            <main className="w-100 lg:w-1/2 lg:py-24">
              <Tabs>{children}</Tabs>
            </main>
          </div>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
