"use client";

import { useTranslations } from "use-intl";

export default function Footer() {
  const t = useTranslations("Layout");

  return (
    <footer className="mx-auto max-w-screen-xl py-6 text-center text-sm">
      {t("made_with")}
    </footer>
  );
}
