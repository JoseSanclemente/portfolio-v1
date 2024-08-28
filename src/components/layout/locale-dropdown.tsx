import { getUserLocale, setUserLocale } from "@/src/services/locale";
import { defaultLocale, Locale } from "@/src/types/Locale";
import { ChangeEvent, useEffect, useState, useTransition } from "react";

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
      className="rounded-md bg-transparent p-1 hover:bg-slate-700"
      aria-label="Language"
    >
      <option className="bg-slate-800 hover:bg-slate-700" value="es">
        ES
      </option>
      <option className="bg-slate-800" value="en">
        EN
      </option>
    </select>
  );
}
