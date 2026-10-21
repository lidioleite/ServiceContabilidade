"use client";

import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { sendLeadToWhatsApp } from "@/services/leadService";

const objectives = [
  "Quero abrir empresa",
  "Quero trocar de contador",
  "Sou PJ ou prestador de serviço",
  "Preciso de outro serviço contábil",
];

export function QuickContact() {
  const [objective, setObjective] = useState(objectives[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendLeadToWhatsApp({
      objective,
      monthlyRevenue: "Ainda não informado",
      businessProfile: "Contato inicial",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-9 border border-line bg-white p-4 shadow-subtle sm:p-5">
      <label htmlFor="quick-objective" className="mb-2 block text-xs font-semibold text-ink">
        Como podemos ajudar?
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          id="quick-objective"
          value={objective}
          onChange={(event) => setObjective(event.target.value)}
          className="min-h-12 min-w-0 flex-1 border border-line bg-paper px-3 text-sm text-ink"
        >
          {objectives.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine-dark"
        >
          Falar agora <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted">A conversa continua direto pelo WhatsApp.</p>
    </form>
  );
}
