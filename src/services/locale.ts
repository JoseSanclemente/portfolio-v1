"use server";

import { cookies } from "next/headers";
import { Locale, defaultLocale } from "@/src/types/Locale";

// Get the browser locale through this cookie
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
