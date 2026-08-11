import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY_2;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID_2;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2;

emailjs.init(PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: "nasrollah.rzi@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Neue Kontaktanfrage",
        message: formData.message,
        phone: formData.phone || "Nicht angegeben",
      },
      PUBLIC_KEY,
    );

    return { success: true, message: "Email erfolgreich versendet!" };
  } catch (error) {
    console.error("EmailJS Error:", error?.text || error);
    return { success: false, message: "Fehler beim Versenden der Email" };
  }
};
