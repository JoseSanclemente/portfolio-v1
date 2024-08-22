import { getUserLocale } from "@/services/locale";
import { capitalizeString } from "./string";

/**
 * Returns the translated month and year from a date
 * @param date
 * @returns string
 */
export const translateDate = (date: Date | string) => {
  if (!date) {
    return "";
  }

  if (typeof date === "string") {
    return date;
  }

  let locale;
  getUserLocale().then((userLocale) => (locale = userLocale));

  const year = date.getFullYear();

  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  const capitalizedMonth = capitalizeString(month);

  return `${capitalizedMonth} ${year}`;
};
