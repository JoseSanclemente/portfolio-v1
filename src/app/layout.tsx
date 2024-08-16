import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Sanclemente",
  description:
    "Bringing tech products to life by telling stories is my passion! 💚",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scroll-smooth bg-gray-dark text-sm text-gray-light md:text-base`}
      >
        {children}
      </body>
    </html>
  );
}
