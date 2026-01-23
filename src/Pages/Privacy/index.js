import { useI18n } from "../../utils/i18n";
import "./Privacy.css";

const Privacy = () => {
  const { lang } = useI18n();

  const content = {
    en: {
      title: "Privacy Policy",
      intro: "Introduction",
      introText:
        "We take the protection of your personal data very seriously. This privacy policy explains how we collect, use, and protect your data.",
      collection: "Data Collection",
      collectionText:
        "We collect personal data only when you voluntarily provide it to us through contact forms, registration, or other interactions on our website.",
      usage: "Use of Data",
      usageText:
        "Your data is used exclusively for the purpose for which it was provided. We do not share your data with third parties without your consent.",
      security: "Data Security",
      securityText:
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.",
      rights: "Your Rights",
      rightsText:
        "You have the right to request information about the personal data we store about you at any time. You also have the right to request the correction or deletion of your data.",
      contact: "Contact",
      contactText:
        "If you have any questions about this privacy policy or how we handle your data, please contact us:",
    },
    de: {
      title: "Datenschutzerklärung",
      intro: "Einleitung",
      introText:
        "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erfassen, verwenden und schützen.",
      collection: "Datenerfassung",
      collectionText:
        "Wir erfassen persönliche Daten nur, wenn Sie diese freiwillig über Kontaktformulare, Registrierung oder andere Interaktionen auf unserer Website bereitstellen.",
      usage: "Verwendung von Daten",
      usageText:
        "Ihre Daten werden ausschließlich für den Zweck verwendet, für den sie bereitgestellt wurden. Wir geben Ihre Daten nicht ohne Ihre Zustimmung an Dritte weiter.",
      security: "Datensicherheit",
      securityText:
        "Wir implementieren geeignete technische und organisatorische Maßnahmen, um Ihre persönlichen Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.",
      rights: "Ihre Rechte",
      rightsText:
        "Sie haben das Recht, jederzeit Auskunft über die personenbezogenen Daten anzufordern, die wir über Sie speichern. Sie haben auch das Recht, die Berichtigung oder Löschung Ihrer Daten anzufordern.",
      contact: "Kontakt",
      contactText:
        "Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Behandlung Ihrer Daten haben, wenden Sie sich bitte an uns:",
    },
    da: {
      title: "سیاست حریم خصوصی",
      intro: "مقدمه",
      introText:
        "ما حفاظت از اطلاعات شخصی شما را بسیار جدی می گیریم. این سیاست حریم خصوصی توضیح می دهد که چگونه ما داده های شما را جمع آوری، استفاده و حفاظت می کنیم.",
      collection: "جمع آوری اطلاعات",
      collectionText:
        "ما اطلاعات شخصی را تنها زمانی جمع آوری می کنیم که شما آن را به طور داوطلبانه از طریق فرم های تماس، ثبت نام یا سایر تعاملات در وب سایت ما ارائه دهید.",
      usage: "استفاده از داده ها",
      usageText:
        "داده های شما تنها برای هدفی که برای آن ارائه شده اند استفاده می شود. ما اطلاعات شما را بدون رضایت شما با طرف ثالث به اشتراک نمی گذاریم.",
      security: "امنیت داده ها",
      securityText:
        "ما اقدامات فنی و سازمانی مناسبی را برای حفاظت از داده های شخصی شما در برابر دسترسی غیرمجاز، از دست دادن یا سوء استفاده انجام می دهیم.",
      rights: "حقوق شما",
      rightsText:
        "شما در هر زمان حق دارید اطلاعات مربوط به اطلاعات شخصی خود را درخواست کنید. شما همچنین حق دارید تصحیح یا حذف داده های خود را درخواست کنید.",
      contact: "تماس",
      contactText:
        "اگر سؤالی در مورد این سیاست حریم خصوصی یا نحوه مدیریت داده های شما دارید، لطفاً با ما تماس بگیرید:",
    },
  };

  const t = content[lang] || content.en;

  return (
    <div className="privacy-container">
      <h1>{t.title}</h1>

      <h2>{t.intro}</h2>
      <p>{t.introText}</p>

      <h2>{t.collection}</h2>
      <p>{t.collectionText}</p>

      <h2>{t.usage}</h2>
      <p>{t.usageText}</p>

      <h2>{t.security}</h2>
      <p>{t.securityText}</p>

      <h2>{t.rights}</h2>
      <p>{t.rightsText}</p>

      <h2>{t.contact}</h2>
      <p>{t.contactText}</p>
      <p>Email: <a href="mailto:nasrollah.rzi@gmail.com">nasrollah.rzi@gmail.com</a></p>
    </div>
  );
};

export default Privacy;
