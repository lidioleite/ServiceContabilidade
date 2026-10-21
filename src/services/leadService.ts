import { companyInfo, createWhatsAppUrl } from "@/data/companyInfo";

export type LeadData = {
  objective: string;
  monthlyRevenue: string;
  businessProfile: string;
};

export function sendLeadToWhatsApp(data: LeadData): void {
  const message = [
    `Olá, ${companyInfo.contactName}! Gostaria de conversar com a ${companyInfo.name}.`,
    "",
    `Meu objetivo: ${data.objective}`,
    `Faturamento médio mensal: ${data.monthlyRevenue}`,
    `Perfil da empresa: ${data.businessProfile}`,
  ].join("\n");

  window.location.assign(createWhatsAppUrl(message));
}
