export const WHATSAPP_NUMBER = "917619523041";
export const WHATSAPP_DISPLAY_NUMBER = "+91 761 952 3041";

export const getWhatsAppUrl = (topic?: string) => {
  const message = topic
    ? `Hi The Vibe House, I'd like to connect with your party planning expert to discuss ${topic} for my upcoming event!`
    : "Hi The Vibe House, I want to share my party requirements so you can help me curate the best experience!";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
