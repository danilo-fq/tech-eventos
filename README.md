# TechEventos

Portal para descoberta e divulgação de eventos de tecnologia — conferências,
workshops, palestras, hackathons, meetups e eventos acadêmicos reunidos em um
só lugar. Projeto acadêmico, protótipo apenas de front-end, com dados
demonstrativos.

> Projeto Integrador da disciplina de Desenvolvimento Front-end para Web —
> Centro Universitário de João Pessoa. Professora: Karine.

## Sobre o projeto

Eventos de tecnologia costumam ficar espalhados por sites, redes sociais e
plataformas de ingressos, o que dificulta descobrir e comparar o que está
acontecendo. O TechEventos centraliza esses eventos num catálogo único, com
busca, filtros e páginas de detalhes, ajudando estudantes, professores e
profissionais a encontrar e chegar à inscrição oficial de cada evento.

O portal **não vende ingressos**: ele direciona o usuário ao site do
organizador.

## Funcionalidades

- Catálogo de eventos com busca por texto (nome, tema ou cidade).
- Filtros por categoria (conferências, workshops, palestras, hackathons,
  meetups, acadêmicos) e por modalidade (presencial, online, híbrido).
- Filtros refletidos na URL, permitindo compartilhar links já filtrados.
- Ordenação dos resultados.
- Página de detalhes do evento com programação, palestrantes, mapa e inscrição.
- Formulário de contato com validação e feedback de sucesso.
- Menu de navegação responsivo (vira menu lateral no celular).
- Vídeo incorporado (YouTube) e mapa incorporado (Google Maps).

## Tecnologias

- HTML5 semântico
- CSS3 (com variáveis, Flexbox e transições próprias)
- JavaScript puro (sem frameworks)
- Bootstrap 5.3.8 e Bootstrap Icons (via CDN)
- Fonte Inter (Google Fonts)
- Git e GitHub

## Estrutura de pastas

```
tech-eventos/
├── index.html              # Página inicial
├── pages/
│   ├── eventos.html        # Catálogo com busca e filtros
│   ├── detalhes.html       # Detalhes de um evento
│   └── sobre-contato.html  # Sobre o projeto + formulário de contato
├── css/
│   └── style.css           # Estilos próprios (sobre o Bootstrap)
├── js/
│   ├── script.js           # Funções gerais (ano do rodapé, voltar ao topo)
│   └── contato.js          # Validação do formulário de contato
├── images/                 # Logos e banners dos eventos
└── README.md
```

## Como executar

O projeto é estático (HTML, CSS e JavaScript), sem backend. Basta:

1. Clonar ou baixar o repositório.
2. Abrir o arquivo `index.html` no navegador (duplo clique já funciona).

> Não é necessário servidor nem instalação. Os dados dos eventos são
> demonstrativos e ficam no próprio código.

## Páginas

- **Início (`index.html`)** — apresentação do portal, eventos em destaque,
  categorias e vídeo.
- **Eventos (`pages/eventos.html`)** — catálogo com busca, filtros e ordenação.
- **Detalhes (`pages/detalhes.html`)** — informações completas de um evento.
- **Sobre e Contato (`pages/sobre-contato.html`)** — sobre o projeto e
  formulário de contato.

## Equipe

Projeto desenvolvido em grupo pelos integrantes:

- Alisson Felipe — [@AlissonFelipeS](https://github.com/AlissonFelipeS)
- Danilo Ferreira — [@danilo-fq](https://github.com/danilo-fq)
- Pierry — [@pierryzxwrld-ui](https://github.com/pierryzxwrld-ui)
- Renan Claudino — [@renansantz](https://github.com/renansantz)

## Licença

Projeto acadêmico, sem fins comerciais.
