import { capitalizeString } from "@/src/utils/string";
import { defaultLocale } from "@/src/types/Locale";
import { useFormatter } from "next-intl";

/**
 * Returns the translated month and year from a date
 * @param date
 * @returns string
 */
export const translateDate = (date: Date | string, format: any) => {
  if (!date) {
    return "";
  }

  if (typeof date === "string") {
    return date;
  }

  const stringDate = format.dateTime(date, { year: "numeric", month: "long" });

  // This is for Spanish formatting
  const splitDate = stringDate.split("de");

  if (splitDate.length > 1) return capitalizeString(splitDate.join(" "));

  return stringDate;
};
