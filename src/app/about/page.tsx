// i18
import { useTranslations } from "next-intl";
import Image from "next/image";
import truoraPaper from "@/public/truora_paper.webp";
import { getAnimationDelay } from "@/src/utils/animation";

const Page = () => {
  const t = useTranslations("About");

  return (
    <section className="mt-4 min-h-96 pl-0 md:pl-4">
      <p className="fade-animation">{t("during_my_computer_science")}</p>
      <br />
      <p
        className="fade-animation"
        style={{ animationDelay: getAnimationDelay(1) }}
      >
        &quot;
        <span className="gradient font-bold">{t("its_probably_scam")}</span>
        {t("or_something")}&quot;
      </p>
      <br />
      <p
        className="fade-animation"
        style={{ animationDelay: getAnimationDelay(2) }}
      >
        {t("when_semester_ended")}
      </p>
      <br />
      <p
        className="fade-animation"
        style={{ animationDelay: getAnimationDelay(3) }}
      >
        &quot;{t("should_I_send")}
        <span className="gradient font-bold">{t("what_could_happen")}</span>
        {t("they_are_offering")}&quot;
      </p>
      <br />
      <p
        className="fade-animation"
        style={{ animationDelay: getAnimationDelay(4) }}
      >
        {t("so_I_sent_an_email")}
        <span className="gradient font-bold">{t("my_life_changed")}</span>
        {t("I_started_working")}
        <span className="gradient font-bold">{t("projects_aims_to")}</span>
        {t("one_step")}
      </p>
      <br />
      <Image
        className="fade-animation"
        style={{ animationDelay: getAnimationDelay(5) }}
        src={truoraPaper}
        alt="An image promoting a software developer job opening for students at Universidad del Valle"
      />
      <br />
      <p
        className="fade-animation"
        style={{ animationDelay: getAnimationDelay(6) }}
      >
        {t("I_enjoy")}
      </p>
    </section>
  );
};

export default Page;
