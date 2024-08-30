import { getUserLocale, setUserLocale } from "@/src/services/locale";
import { Locale } from "@/src/types/Locale";
import { ChangeEvent, useEffect, useState, useTransition } from "react";

const allowedLocales = ["ES", "EN"];

export default function LocaleDropdown() {
  const [_, startTransition] = useTransition();
  const [locale, setLocale] = useState("");

  useEffect(() => {
    getUserLocale().then((userLocale) => setLocale(userLocale));
  }, []);

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const userLocale = e.target.value;
    const locale = userLocale as Locale;

    startTransition(() => {
      setLocale(userLocale);
      setUserLocale(locale);
    });
  };

  return (
    <select
      value={locale}
      onChange={handleSelection}
      name="locale"
      className="rounded-md bg-transparent p-1 transition-colors hover:bg-slate-700"
      aria-label="Language"
    >
      {allowedLocales.map((item) => (
        <option key={item} className="bg-slate-800" value={item.toLowerCase()}>
          {item}
        </option>
      ))}
    </select>
  );
}
