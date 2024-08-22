/**
 * Capitalize the first letter of a string
 * @param str
 * @returns string
 */
export const capitalizeString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
