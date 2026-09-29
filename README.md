# Site de Advocacia Previdenciária

Landing page institucional estática para divulgação de serviços de Direito Previdenciário.

## Estrutura

```text
SiteAdvocacia/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── images/
    │   ├── hero-office.jpg
    │   └── lawyer-portrait.jpg
    └── js/
        └── main.js
```

## Desenvolvimento local

Abra `index.html` no navegador. O projeto não exige instalação de dependências nem etapa de build. Tailwind CSS e as fontes tipográficas são carregados por CDN; por isso, esses recursos dependem de conexão com a internet.

## Publicação na Vercel

Importe o repositório na Vercel usando a configuração estática (`Other`):

- Root Directory: `.`
- Build Command: vazio
- Output Directory: `.`

O `index.html` na raiz será usado como página inicial.

## Antes de publicar

- Substitua `assets/images/lawyer-portrait.jpg` pela foto profissional autorizada do advogado.
- Atualize o título da marca e inclua nome completo e número de inscrição na OAB, após confirmação desses dados.
- Os contatos exibidos são fictícios e servem apenas para demonstração.
- Antes de ativar o site, substitua telefone, e-mail, Instagram, área de atendimento e informações institucionais pelos dados autorizados.
- Revise o conteúdo e a publicidade conforme as normas vigentes da OAB.

Os botões de contato atualmente apenas direcionam para a seção de dados demonstrativos. Nenhuma chamada, mensagem ou navegação para redes sociais é iniciada.
