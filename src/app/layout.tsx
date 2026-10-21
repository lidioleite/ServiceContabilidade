import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service Contabilidade | Contabilidade próxima do seu negócio",
  description:
    "Abertura de empresa, gestão fiscal e folha de pagamento com atendimento humano e respostas rápidas. Fale com a Service Contabilidade.",
  openGraph: {
    title: "Service Contabilidade",
    description:
      "Contabilidade sem burocracia para você focar no que realmente importa: seu negócio.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
