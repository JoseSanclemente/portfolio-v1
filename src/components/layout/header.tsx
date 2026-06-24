import { getTranslations } from "next-intl/server";
import WaveText from "@/src/components/ui/wave-text";

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
        <WaveText text={t("passionated_about_people")} />
      </h2>
      <p>{t("bringing_tech_products")}</p>
    </header>
  );
}
