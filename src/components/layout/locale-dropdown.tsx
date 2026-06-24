import { getUserLocale, setUserLocale } from "@/src/services/locale";
import { Locale } from "@/src/types/Locale";
import { useEffect, useState, useTransition } from "react";

export default function LocaleDropdown() {
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState("");

  useEffect(() => {
    getUserLocale().then((userLocale) => setLocale(userLocale));
  }, []);

  const handleToggle = () => {
    const next = locale === "en" ? "es" : "en";
    startTransition(() => {
      setLocale(next);
      setUserLocale(next as Locale);
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      aria-label="Language"
      className="w-10 cursor-pointer rounded-md bg-transparent p-1 text-center text-white disabled:opacity-50"
    >
      {locale.toUpperCase() || "EN"}
    </button>
  );
}
