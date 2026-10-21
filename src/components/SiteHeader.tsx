"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { companyInfo, createWhatsAppUrl, generalWhatsAppMessage } from "@/data/companyInfo";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Troca de contador", href: "#troca-de-contador" },
  { label: "Sobre", href: "#sobre" },
];

const portalMessage = "Olá! Preciso de ajuda para acessar a área do cliente.";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const portalHref = companyInfo.clientPortalUrl ?? createWhatsAppUrl(portalMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Service Contabilidade, início">
          <Image
            src="/images/logo.jpg"
            alt=""
            width={54}
            height={54}
            priority
            className="h-12 w-12 rounded-full object-cover sm:h-[54px] sm:w-[54px]"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight sm:text-lg">{companyInfo.name}</span>
            <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[.15em] text-muted sm:block">
              {companyInfo.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              className="text-sm text-ink/75 transition-colors hover:text-wine"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-wine"
            href={portalHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              companyInfo.clientPortalUrl
                ? "Acessar área do cliente"
                : "Solicitar acesso à área do cliente pelo WhatsApp"
            }
          >
            Área do cliente <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            className="inline-flex items-center justify-center bg-wine px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-wine-dark"
            href={createWhatsAppUrl(generalWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com contador
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-line lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-line bg-paper px-5 py-4 lg:hidden"
          aria-label="Navegação móvel"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className="block border-b border-line py-3 text-sm"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="block py-3 text-sm font-medium"
            href={portalHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Área do cliente
          </a>
          <a
            className="mt-2 flex items-center justify-center bg-wine px-4 py-3 text-sm font-semibold text-white"
            href={createWhatsAppUrl(generalWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com contador
          </a>
        </nav>
      )}
    </header>
  );
}
