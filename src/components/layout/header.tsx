import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations("Layout");

  return (
    <header className="relative z-10">
      <h1 className="font-boldonse mb-6 text-4xl font-extrabold lg:text-6xl">
        Jose
        <br />
        Sanclemente
      </h1>
      <h2 className="mb-6 text-xl leading-7 font-bold lg:text-2xl">
        {t("frontend_developer")} &<br />
        <span className="gradient">{t("passionated_about_people")}</span>
      </h2>
      <p>{t("bringing_tech_products")}</p>
    </header>
  );
}
