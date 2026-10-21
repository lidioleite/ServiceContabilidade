export type AccountingService = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

export const accountingServices: AccountingService[] = [
  {
    number: "01",
    title: "PJs e profissionais de serviços",
    description:
      "Organize sua rotina fiscal e entenda o enquadramento mais adequado para a atividade da sua empresa.",
    detail: "Fator R, emissão de notas e obrigações fiscais",
  },
  {
    number: "02",
    title: "Médicos e clínicas",
    description:
      "Acompanhamento contábil para profissionais e negócios de saúde, considerando as particularidades da atividade.",
    detail: "Rotina fiscal e orientação para a área da saúde",
  },
  {
    number: "03",
    title: "Comércio e negócios locais",
    description:
      "Apoio para manter em ordem as obrigações fiscais e acompanhar as necessidades do comércio.",
    detail: "Tributação, registros e obrigações do negócio",
  },
  {
    number: "04",
    title: "MEI, abertura e migração",
    description:
      "Orientação para formalizar uma empresa, regularizar pendências ou planejar a transição do MEI para ME.",
    detail: "Abertura, regularização e mudança de enquadramento",
  },
];

export const coreServices: AccountingService[] = [
  {
    number: "01",
    title: "Contabilidade empresarial",
    description:
      "Organização e acompanhamento das informações contábeis para apoiar a gestão da empresa.",
    detail: "Acompanhamento contábil",
  },
  {
    number: "02",
    title: "Fiscal e tributário",
    description:
      "Suporte para a rotina fiscal e o cumprimento das obrigações do negócio.",
    detail: "Conformidade fiscal",
  },
  {
    number: "03",
    title: "Departamento pessoal",
    description:
      "Apoio às rotinas trabalhistas e às obrigações relacionadas aos colaboradores.",
    detail: "Folha e rotinas trabalhistas",
  },
  {
    number: "04",
    title: "Abertura e regularização",
    description:
      "Orientação para começar a empreender ou colocar os registros da empresa em ordem.",
    detail: "Formalização de empresas",
  },
];

export const revenueRanges = [
  "Até R$ 5 mil",
  "De R$ 5 mil a R$ 15 mil",
  "De R$ 15 mil a R$ 30 mil",
  "De R$ 30 mil a R$ 60 mil",
  "Acima de R$ 60 mil",
];
