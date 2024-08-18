/**
 * Returns the month and year from a date
 * @param date
 * @returns string
 */
export const formatDate = (date: Date | string) => {
  if (!date) {
    return "";
  }

  if (typeof date === "string") {
    return date;
  }

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date,
  );
  const year = date.getFullYear();

  return `${month} ${year}`;
};
