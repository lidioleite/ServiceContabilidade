import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ClipboardList,
  FileCheck2,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Store,
  UserRound,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { QuickContact } from "@/components/QuickContact";
import { LeadSimulator } from "@/components/LeadSimulator";
import { accountingServices, coreServices } from "@/data/accountingServices";
import {
  companyInfo,
  createWhatsAppUrl,
  generalWhatsAppMessage,
} from "@/data/companyInfo";

const segmentIcons = [
  BriefcaseBusiness,
  Stethoscope,
  Store,
  UserRound,
];

const segmentSizes = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

const transitionSteps = [
  {
    number: "01",
    title: "Você conversa com um especialista",
    text: "Entendemos o momento da empresa e explicamos como funciona a mudança.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Organizamos a documentação",
    text: "Orientamos a solicitação das informações necessárias ao escritório atual.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Seguimos com a regularização",
    text: "Acompanhamos a transição e alinhamos os próximos passos para manter a rotina em ordem.",
    icon: FileCheck2,
  },
];

export default function Home() {
  const whatsappUrl = createWhatsAppUrl(generalWhatsAppMessage);

  return (
    <>
      <SiteHeader />
      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.17em] text-wine">
                <span className="h-px w-7 bg-wine" />
                Contabilidade próxima, sem rodeios
              </p>
              <h1 className="text-[2.65rem] font-semibold leading-[1.08] tracking-[-.045em] text-ink sm:text-6xl lg:text-[68px]">
                Contabilidade sem burocracia para você focar no que realmente importa: seu negócio.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Abertura de empresa, gestão fiscal e folha de pagamento com atendimento humano e respostas rápidas.
              </p>
              <QuickContact />
            </div>

            <div className="relative lg:pl-6">
              <div className="absolute -right-10 top-4 hidden h-44 w-44 border border-wine/20 lg:block" aria-hidden="true" />
              <div className="relative bg-ink p-7 text-white sm:p-10">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[.15em] text-white/65">
                    Um bom começo
                  </span>
                  <span className="text-sm font-medium text-[#E7A6A8]">01 / 03</span>
                </div>
                <h2 className="mt-8 max-w-sm text-3xl font-medium leading-tight tracking-[-.03em] sm:text-4xl">
                  Mais clareza para cuidar da sua empresa.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                  Converse com quem acompanha sua rotina e entenda os próximos passos com tranquilidade.
                </p>
                <ul className="mt-9 space-y-4 border-t border-white/15 pt-6">
                  {[
                    "Atendimento direto pelo WhatsApp",
                    "Orientação conforme o perfil do negócio",
                    "Apoio nas rotinas contábil, fiscal e pessoal",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                      <Check size={16} className="mt-1 shrink-0 text-[#E7A6A8]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#E7A6A8]"
                >
                  Conheça a Service <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                <ShieldCheck size={18} className="text-wine" aria-hidden="true" />
                Cuidado com as obrigações, sem perder de vista as pessoas.
              </div>
            </div>
          </div>
          <a
            href="#para-quem"
            className="mx-auto mb-8 hidden w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-muted lg:flex"
          >
            Conheça as soluções <ArrowDown size={14} aria-hidden="true" />
          </a>
        </section>

        <section id="para-quem" className="border-y border-line bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.17em] text-wine">Soluções por perfil</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                  O suporte certo para a fase do seu negócio.
                </h2>
              </div>
              <p className="max-w-lg leading-7 text-muted md:justify-self-end">
                Cada atividade tem uma rotina e obrigações próprias. O primeiro passo é entender o que a sua empresa precisa.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-12">
              {accountingServices.map((segment, index) => {
                const Icon = segmentIcons[index];
                return (
                  <article
                    key={segment.number}
                    className={`group border border-line bg-paper p-6 transition-colors hover:border-wine/50 sm:p-8 ${segmentSizes[index]}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-semibold text-wine">{segment.number}</span>
                      <Icon size={21} strokeWidth={1.5} className="text-ink/65" aria-hidden="true" />
                    </div>
                    <h3 className="mt-9 max-w-md text-2xl font-semibold tracking-tight sm:text-[28px]">
                      {segment.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7 text-muted">{segment.description}</p>
                    <p className="mt-6 border-t border-line pt-4 text-xs font-semibold uppercase tracking-[.08em] text-ink/75">
                      {segment.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[.17em] text-wine">O que fazemos</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Cuidado contábil em cada etapa.
              </h2>
            </div>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {coreServices.map((service) => (
                <article key={service.number} className="border-t border-line py-6 sm:py-7">
                  <span className="text-sm font-semibold text-wine">{service.number}</span>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                      <p className="mt-2 max-w-lg leading-7 text-muted">{service.description}</p>
                    </div>
                    <ArrowRight size={18} className="mt-1 shrink-0 text-wine" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              O escopo dos serviços é definido após entendermos a atividade e as necessidades da empresa.
            </p>
          </div>
        </section>

        <section id="troca-de-contador" className="bg-[#F0EFEB] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.17em] text-wine">Transição organizada</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                  Trocar de contador é mais simples do que parece.
                </h2>
                <p className="mt-5 leading-7 text-muted">
                  Você não precisa coordenar tudo sozinho. A gente explica o processo, orienta a documentação e acompanha a transição.
                </p>
                <a
                  href={createWhatsAppUrl("Olá! Quero entender como funciona a troca de contador.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b border-wine pb-2 text-sm font-semibold text-ink hover:text-wine"
                >
                  Conversar sobre a mudança <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <ol className="divide-y divide-ink/15 border-y border-ink/15">
                {transitionSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.number} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr_28px] sm:items-start sm:gap-5">
                      <span className="text-sm font-semibold text-wine">{step.number}</span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 max-w-lg leading-7 text-muted">{step.text}</p>
                      </div>
                      <Icon size={20} className="hidden text-wine sm:block" strokeWidth={1.5} aria-hidden="true" />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12">
            <div className="max-w-md">
              <p className="text-[11px] font-bold uppercase tracking-[.17em] text-wine">Atendimento inicial</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Uma conversa começa com as informações certas.
              </h2>
              <p className="mt-5 leading-7 text-muted">
                Compartilhe uma faixa de faturamento e o perfil da empresa para a equipe direcionar o primeiro atendimento.
              </p>
              <div className="mt-8 flex items-start gap-3 border-l-2 border-wine pl-4 text-sm leading-6 text-muted">
                <ShieldCheck size={18} className="mt-1 shrink-0 text-wine" aria-hidden="true" />
                Seus dados são encaminhados diretamente à conversa no WhatsApp.
              </div>
            </div>
            <LeadSimulator />
          </div>
        </section>

        <section id="sobre" className="border-y border-line py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[.75fr_1.25fr] md:items-center md:gap-20 lg:px-12">
            <div className="mx-auto w-full max-w-xs">
              <div className="border border-line bg-white p-6 shadow-subtle">
                <Image
                  src="/images/logo.png"
                  alt="Logo da Service Contabilidade"
                  width={360}
                  height={360}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[.15em] text-muted">
                {companyInfo.name}
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[.17em] text-wine">Sobre a Service</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Proximidade para cuidar da rotina. Clareza para decidir.
              </h2>
              <div className="mt-6 space-y-4 leading-7 text-muted">
                <p>
                  A contabilidade faz parte das decisões e da rotina de todo negócio. A Service Contabilidade ajuda empresas e empreendedores a entender suas obrigações e manter os processos contábeis organizados.
                </p>
                <p>
                  Com atendimento próximo e comunicação direta, cada conversa começa pelas necessidades reais da empresa e pelos próximos passos.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 border-b border-wine pb-2 text-sm font-semibold hover:text-wine"
              >
                Fale com {companyInfo.contactName} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#E7A6A8]">
                  Nosso compromisso
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                  Confiança se constrói com informação clara.
                </h2>
              </div>
              <div className="grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-3 lg:border-t-0 lg:pt-0">
                {[
                  {
                    title: "Atendimento próximo",
                    text: "Conversa direta com a equipe pelo WhatsApp.",
                  },
                  {
                    title: "Orientação por perfil",
                    text: "A análise considera o segmento e a rotina da empresa.",
                  },
                  {
                    title: "Próximos passos claros",
                    text: "Você entende o que precisa ser feito e por quê.",
                  },
                ].map((item) => (
                  <article key={item.title} className="border-t border-white/20 pt-4">
                    <Check size={17} className="text-[#E7A6A8]" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <p className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-white/55">
              Registro profissional, endereço e avaliações públicas podem ser adicionados assim que os dados oficiais forem disponibilizados.
            </p>
          </div>
        </section>

        <section id="contato" className="bg-paper py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-wine">Fale com a gente</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
              Vamos conversar sobre a sua empresa?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">
              Fale com {companyInfo.contactName} pelo WhatsApp ou acompanhe a Service Contabilidade no Instagram.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 border-y border-line py-7 text-left sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-wine">WhatsApp</p>
                <a
                  className="mt-2 inline-block text-base text-ink transition-colors hover:text-wine"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {companyInfo.contactName} · {companyInfo.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-wine">Instagram</p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-base text-ink transition-colors hover:text-wine"
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} aria-hidden="true" /> {companyInfo.instagramHandle}
                </a>
              </div>
            </div>
            <a
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 bg-wine px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-wine-dark"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:px-8 md:grid-cols-[1fr_1fr_auto] md:items-start lg:px-12">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span>
                <span className="block font-bold">{companyInfo.name}</span>
                <span className="mt-1 block text-xs text-muted">{companyInfo.tagline}</span>
              </span>
            </a>
          </div>
          <div className="space-y-2 text-sm text-muted">
            {companyInfo.crcNumber && <p>CRC: {companyInfo.crcNumber}</p>}
            {companyInfo.address && <p>{companyInfo.address}</p>}
            {companyInfo.businessHours && <p>Atendimento: {companyInfo.businessHours}</p>}
            {!companyInfo.crcNumber && !companyInfo.address && !companyInfo.businessHours && (
              <p>Para informações institucionais, fale com nosso atendimento.</p>
            )}
            <a
              className="inline-flex items-center gap-1 pt-1 font-medium text-ink hover:text-wine"
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <p className="text-xs text-muted">© {new Date().getFullYear()} {companyInfo.name}</p>
        </div>
      </footer>
    </>
  );
}
