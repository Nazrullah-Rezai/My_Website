import { useI18n } from "../../utils/i18n";
import "./Imprint.css";

const Imprint = () => {
  const { lang } = useI18n();

  const content = {
    en: {
      title: "Imprint",
      responsible: "Responsible for content",
      name: "Nazrullah Rezai",
      contact: "Contact",
      email: "nasrollah.rzi@gmail.com",
      phone: "+49 171 2337149",
      address: "Darmstadt, Hessen",
      country: "Germany",
      disclaimer: "Disclaimer",
      disclaimerText:
        "The content of this website is prepared with great care. However, no guarantee is given for the correctness, completeness and topicality of the content. Liability claims against the author for damages of a material or immaterial nature caused by the use or non-use of the information or the use of incorrect or incomplete information are in principle excluded.",
      liability: "Liability for Links",
      liabilityText:
        "Our website contains links to external websites. As the content of these third-party websites is beyond our control, we cannot accept any liability for them. Responsibility for the content of linked websites always lies with the respective website operator.",
    },
    de: {
      title: "Impressum",
      responsible: "Verantwortlich für den Inhalt",
      name: "Nazrullah Rezai",
      contact: "Kontakt",
      email: "nasrollah.rzi@gmail.com",
      phone: "+49 171 2337149",
      address: "Darmstadt, Hessen",
      country: "Deutschland",
      disclaimer: "Haftungsausschluss",
      disclaimerText:
        "Der Inhalt dieser Website wird mit großer Sorgfalt vorbereitet. Für die Richtigkeit, Vollständigkeit und Aktualität des Inhalts wird jedoch keine Garantie übernommen. Haftungsansprüche gegen den Autor für Schäden materieller oder immaterieller Art, die durch die Nutzung oder Nichtnutzung der angebotenen Informationen oder durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind ausgeschlossen.",
      liability: "Haftung für Links",
      liabilityText:
        "Unsere Website enthält Links zu externen Websites. Da wir keinen Einfluss auf den Inhalt dieser Websites haben, können wir hierfür keine Haftung übernehmen. Die Verantwortung für den Inhalt verlinkter Websites liegt immer beim jeweiligen Betreiber der Website.",
    },
    da: {
      title: "تعریف",
      responsible: "مسئول محتوا",
      name: "Nazrullah Rezai",
      contact: "تماس",
      email: "nasrollah.rzi@gmail.com",
      phone: "+49 171 2337149",
      address: "دارمشتات، هسن",
      country: "آلمان",
      disclaimer: "سلب مسئولیت",
      disclaimerText:
        "محتوای این وب سایت با دقت زیادی تهیه شده است. با این حال، برای صحت، کمال و روزآمدی محتوا تضمینی داده نمی شود. ادعاهای مسئولیت علیه نویسنده برای خسارت ماده یا غیر مادی ناشی از استفاده یا عدم استفاده از اطلاعات یا استفاده از اطلاعات نادرست یا ناقص اساساً مستثنی است.",
      liability: "مسئولیت برای پیوندها",
      liabilityText:
        "وب سایت ما حاوی پیوندهایی به وب سایت های خارجی است. از آنجایی که محتوای این وب سایت های شخص ثالث فراتر از کنترل ما است، نمی توانیم برای آنها هیچ مسئولیتی را بپذیریم. مسئولیت محتوای وب سایت های پیوند شده همیشه با اپراتور وب سایت مربوطه است.",
    },
  };

  const t = content[lang] || content.en;

  return (
    <div className="imprint-container">
      <h1>{t.title}</h1>

      <h2>{t.responsible}</h2>
      <p>
        <strong>{t.name}</strong>
      </p>

      <h2>{t.contact}</h2>
      <p>
        Email: <a href={`mailto:${t.email}`}>{t.email}</a>
        <br />
        Telefon: <a href={`tel:${t.phone}`}>{t.phone}</a>
        <br />
        Adresse: {t.address}, {t.country}
      </p>

      <h2>{t.disclaimer}</h2>
      <p>{t.disclaimerText}</p>

      <h2>{t.liability}</h2>
      <p>{t.liabilityText}</p>
    </div>
  );
};

export default Imprint;
