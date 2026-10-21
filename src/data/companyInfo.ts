export const companyInfo = {
  name: "Service Contabilidade",
  tagline: "Contabilidade para sua empresa",
  contactName: "Jimmy Xavier",
  phoneDisplay: "+55 84 9121-7816",
  whatsappNumber: "558491217816",
  instagramUrl: "https://www.instagram.com/service.contabilidade/",
  instagramHandle: "@service.contabilidade",
  clientPortalUrl: null as string | null,
  crcNumber: null as string | null,
  address: null as string | null,
  businessHours: null as string | null,
};

export const generalWhatsAppMessage =
  "Olá, Jimmy! Gostaria de saber mais sobre os serviços da Service Contabilidade.";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
