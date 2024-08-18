// i18
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section className="mt-4 min-h-96 pl-4">
      <p>{t("during_my_computer_science")}</p>
      <br />
      <p>
        &quot;
        <span className="gradient font-bold">{t("its_probably_scam")}</span>
        {t("or_something")}&quot;
      </p>
      <br />
      <p>{t("when_semester_ended")}</p>
      <br />
      <p>
        &quot;{t("should_I_send")}
        <span className="gradient font-bold">{t("what_could_happen")}</span>
        {t("they_are_offering")}&quot;
      </p>
      <br />
      <p>
        {t("so_I_sent_an_email")}
        <span className="gradient font-bold">{t("my_life_changed")}</span>.
        {t("I_started_working")}
        <span className="gradient font-bold">{t("projects_aims_to")}</span>
        {t("one_step")}
      </p>
      <br />
      <p>{t("I_enjoy")}</p>
    </section>
  );
};

export default About;
