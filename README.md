# Service Contabilidade

Landing page institucional em Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar e gerar a versão de produção:

```bash
npm run typecheck
npm run build
npm start
```

## Organização

- `src/app/`: página inicial, metadados e estilos globais.
- `src/components/`: navegação e formulários de contato.
- `src/data/accountingServices.ts`: serviços, segmentos e faixas de faturamento.
- `src/data/companyInfo.ts`: contatos e informações institucionais.
- `src/services/leadService.ts`: montagem e envio da mensagem inicial ao WhatsApp.
- `public/images/logo.jpg`: logo utilizada na página.

Atualize `companyInfo.ts` para configurar o portal do cliente, CRC, endereço e horário quando os dados oficiais estiverem disponíveis. O formulário de atendimento abre uma conversa no WhatsApp e não estima impostos.

## Informações de contato atualmente configuradas

- WhatsApp: Jimmy Xavier — +55 84 9121-7816
- Instagram: [@service.contabilidade](https://www.instagram.com/service.contabilidade/)
