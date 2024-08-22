import { getUserLocale } from "@/services/locale";
import { capitalizeString } from "./string";
import { defaultLocale } from "@/types/Locale";

/**
 * Returns the translated month and year from a date
 * @param date
 * @returns string
 */
export const translateDate = (date: Date | string, locale?: string) => {
  if (!date) {
    return "";
  }

  if (typeof date === "string") {
    return date;
  }

  const userLocale = locale ? locale : defaultLocale;

  /* let locale;
  getUserLocale().then((userLocale) => (locale = userLocale));
 */
  const year = date.getFullYear();

  const month = new Intl.DateTimeFormat(userLocale, { month: "long" }).format(
    date,
  );
  const capitalizedMonth = capitalizeString(month);

  return `${capitalizedMonth} ${year}`;
};
