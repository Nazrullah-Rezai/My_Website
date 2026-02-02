import emailjs from "@emailjs/browser";

// Initialize EmailJS (Public Key)
const PUBLIC_KEY = "j0ZbIjR5-4uPJiGIK";
const SERVICE_ID = "service_4mvrqiv"; // Outlook service
const TEMPLATE_ID = "template_op5k1wn";

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
    }, PUBLIC_KEY);
    
    return { success: true, message: "Email erfolgreich versendet!" };
  } catch (error) {
    console.error("EmailJS Error:", error?.text || error);
    return { success: false, message: "Fehler beim Versenden der Email" };
  }
};
