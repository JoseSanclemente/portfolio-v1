import { capitalizeString } from "@/src/utils/string";
import { defaultLocale } from "@/src/types/Locale";

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

  const year = date.getFullYear();

  const month = new Intl.DateTimeFormat(userLocale, { month: "long" }).format(
    date,
  );
  const capitalizedMonth = capitalizeString(month);

  return `${capitalizedMonth} ${year}`;
};
