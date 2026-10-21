"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { revenueRanges } from "@/data/accountingServices";
import { sendLeadToWhatsApp } from "@/services/leadService";

const profiles = [
  "Prestador(a) de serviços / PJ",
  "Profissional da saúde",
  "Comércio ou negócio local",
  "MEI",
  "Outro perfil",
];

export function LeadSimulator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(revenueRanges[1]);
  const [businessProfile, setBusinessProfile] = useState(profiles[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendLeadToWhatsApp({
      objective: "Quero entender quais serviços contábeis atendem meu negócio",
      monthlyRevenue,
      businessProfile,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-6 sm:p-8">
      <div className="mb-7 flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#F6ECEB] text-wine">
          <MessageCircle size={20} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-semibold tracking-tight">Vamos começar pela sua realidade</h3>
          <p className="mt-1 text-sm leading-6 text-muted">
            Conte um pouco sobre o negócio. A equipe recebe os dados e continua a conversa pelo WhatsApp.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="monthly-revenue" className="mb-2 block text-sm font-medium">
            Faturamento médio mensal
          </label>
          <select
            id="monthly-revenue"
            value={monthlyRevenue}
            onChange={(event) => setMonthlyRevenue(event.target.value)}
            className="min-h-12 w-full border border-line bg-paper px-3 text-sm"
          >
            {revenueRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="business-profile" className="mb-2 block text-sm font-medium">
            Perfil da empresa
          </label>
          <select
            id="business-profile"
            value={businessProfile}
            onChange={(event) => setBusinessProfile(event.target.value)}
            className="min-h-12 w-full border border-line bg-paper px-3 text-sm"
          >
            {profiles.map((profile) => (
              <option key={profile} value={profile}>
                {profile}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine-dark sm:w-auto"
      >
        Enviar informações pelo WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="mt-4 text-xs leading-5 text-muted">
        Não é uma simulação de impostos. A análise depende da atividade, do regime tributário e de outros dados da empresa.
      </p>
    </form>
  );
}
