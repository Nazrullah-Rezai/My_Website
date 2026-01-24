import emailjs from "@emailjs/browser";

// Initialize EmailJS (Public Key)
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";

emailjs.init(PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: "nasrollah.rzi@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Neue Kontaktanfrage",
      message: formData.message,
      phone: formData.phone || "Nicht angegeben",
    });

    return { success: true, message: "Email erfolgreich versendet!" };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, message: "Fehler beim Versenden der Email" };
  }
};
