import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroCoast from "@/assets/hero-coast.jpg";
import portrait from "@/assets/anatana-portrait.jpg";
import itapema from "@/assets/itapema.jpg";
import portoBelo from "@/assets/porto-belo.jpg";
import penha from "@/assets/penha.jpg";
import picarras from "@/assets/picarras.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Investimentos Imobiliários em Santa Catarina | Atendimento para Brasileiros no Exterior",
      },
      {
        name: "description",
        content:
          "Consultoria imobiliária especializada para brasileiros que vivem no exterior e desejam investir com segurança no litoral norte de Santa Catarina.",
      },
      {
        property: "og:title",
        content:
          "Investimentos Imobiliários em Santa Catarina | Atendimento para Brasileiros no Exterior",
      },
      {
        property: "og:description",
        content:
          "Consultoria imobiliária especializada para brasileiros que vivem no exterior e desejam investir com segurança no litoral norte de Santa Catarina.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5547933822130?text=" +
  encodeURIComponent("Olá, vi no site e quero saber mais sobre a consultoria!");

const NAV_LINKS = [
  { href: "#por-que", label: "Por que SC" },
  { href: "#como", label: "Como funciona" },
  { href: "#regioes", label: "Regiões" },
  { href: "#publico", label: "Quem me procura" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#sobre", label: "Sobre" },
] as const;

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 4.86A10 10 0 0 0 4.06 17.6L3 21l3.49-1.03A10 10 0 1 0 19.11 4.86Zm-7.11 16a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-2.07.61.62-2.02-.2-.32A8.18 8.18 0 1 1 12 20.86Zm4.48-6.12c-.24-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.36.11-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:text-sm"
      >
        Ir para o conteúdo principal
      </a>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight" aria-label="Anatana Wachholz — início">
            Anatana <span className="text-muted-foreground">Wachholz</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm border border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Falar no WhatsApp
            </a>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 border border-border text-foreground"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden border-t border-border bg-background/95 px-6 py-4"
            aria-label="Navegação mobile"
          >
            <ul className="space-y-3 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-1 hover:text-foreground transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/80 text-foreground"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section id="top" aria-labelledby="hero-heading" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 motion-safe:animate-fade-up">
              <p className="eyebrow mb-6">Consultoria imobiliária · Litoral norte de Santa Catarina</p>
              <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Invista no litoral mais valorizado do Brasil{" "}
                <em className="italic text-[color:var(--sand-deep)]">sem precisar voltar ao país.</em>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Atendimento especializado para brasileiros que vivem no exterior e desejam construir patrimônio
                em Santa Catarina com segurança, transparência e acompanhamento remoto.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors shadow-[var(--shadow-soft)]"
                >
                  <WhatsAppIcon /> Falar no WhatsApp
                </a>
                <a
                  href="#como"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  Como funciona a consultoria →
                </a>
              </div>
              <dl className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-muted-foreground">
                <div>
                  <dt className="sr-only">Anos de experiência</dt>
                  <dd className="font-display text-2xl text-foreground">+7</dd>
                  <dd className="uppercase tracking-widest mt-1">Anos de mercado</dd>
                </div>
                <div className="h-10 w-px bg-border" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Modalidade de atendimento</dt>
                  <dd className="font-display text-2xl text-foreground">100%</dd>
                  <dd className="uppercase tracking-widest mt-1">Atendimento remoto</dd>
                </div>
                <div className="h-10 w-px bg-border hidden sm:block" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Países atendidos</dt>
                  <dd className="font-display text-2xl text-foreground">6</dd>
                  <dd className="uppercase tracking-widest mt-1">Países atendidos</dd>
                </div>
              </dl>
            </div>
            <div className="md:col-span-6 motion-safe:animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-3 bg-[color:var(--sand)] -z-10 translate-x-4 translate-y-4" aria-hidden="true" />
                <img
                  src={heroCoast}
                  alt="Vista aérea do litoral norte de Santa Catarina, com praias e morros ao amanhecer"
                  width={1920}
                  height={1280}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[420px] md:h-[560px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRIES STRIP */}
        <section aria-label="Países atendidos" className="border-y border-border bg-[color:var(--muted)]/50">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-muted-foreground text-center sm:text-left">
            <span>Atendendo brasileiros em</span>
            <span className="text-foreground">Estados Unidos</span>
            <span aria-hidden="true">·</span>
            <span className="text-foreground">Canadá</span>
            <span aria-hidden="true">·</span>
            <span className="text-foreground">Portugal</span>
            <span aria-hidden="true">·</span>
            <span className="text-foreground">Irlanda</span>
            <span aria-hidden="true">·</span>
            <span className="text-foreground">Reino Unido</span>
            <span aria-hidden="true">·</span>
            <span className="text-foreground">Austrália</span>
          </div>
        </section>

        {/* WHY SANTA CATARINA */}
        <section id="por-que" aria-labelledby="por-que-heading" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">Por que investir em Santa Catarina?</p>
              <h2 id="por-que-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                Um dos mercados imobiliários mais sólidos do Brasil.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                O litoral catarinense combina qualidade de vida, segurança acima da média nacional e uma curva de
                valorização consistente — fatores que atraem investidores brasileiros no exterior em busca de patrimônio
                com lastro real e previsibilidade de longo prazo.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {[
                {
                  n: "01",
                  t: "Qualidade de vida",
                  d: "Praias preservadas, infraestrutura completa e clima ameno o ano todo — um padrão europeu no litoral brasileiro.",
                },
                {
                  n: "02",
                  t: "Segurança",
                  d: "Índices entre os melhores do país, com bairros planejados e ambientes tranquilos para moradia ou locação.",
                },
                {
                  n: "03",
                  t: "Mercado sólido",
                  d: "Demanda constante por aluguel de temporada e moradia, com baixa vacância nas regiões de maior liquidez.",
                },
                {
                  n: "04",
                  t: "Valorização",
                  d: "Histórico de valorização acima da inflação no longo prazo, impulsionado por infraestrutura e demanda estrutural.",
                },
                {
                  n: "05",
                  t: "Futuro no Brasil",
                  d: "Patrimônio pronto para moradia ou retorno, caso decida voltar a viver no litoral catarinense.",
                },
                {
                  n: "06",
                  t: "Proteção patrimonial em reais",
                  d: "Imóvel como reserva de valor em moeda nacional — diversificação para quem recebe em dólar, euro ou libra.",
                },
              ].map((c) => (
                <div key={c.n} className="bg-background p-6 sm:p-8 hover:bg-[color:var(--muted)] transition-colors">
                  <div className="font-display text-[color:var(--sand-deep)] text-sm" aria-hidden="true">
                    {c.n}
                  </div>
                  <h3 className="mt-4 font-display text-xl">{c.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="como" aria-labelledby="como-heading" className="py-24 md:py-32 bg-[color:var(--muted)]/60 border-y border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <p className="eyebrow mb-5">Como funciona</p>
                <h2 id="como-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                  Do primeiro contato à escritura — sem precisar estar no Brasil.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Cada etapa é conduzida remotamente, com transparência e acompanhamento próximo. Você toma as
                  decisões; eu organizo o processo, valido as informações e represento seus interesses à distância.
                </p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed border-l-2 border-[color:var(--sand-deep)] pl-4">
                  Não é necessário viajar ao Brasil para comprar. Documentos, assinaturas e pagamentos podem ser
                  organizados com suporte jurídico e cartorial especializado.
                </p>
              </div>
              <ol className="md:col-span-8 space-y-px bg-border border border-border list-none p-0 m-0">
                {[
                  {
                    n: "I",
                    t: "Conversa inicial",
                    d: "Uma conversa por WhatsApp ou videochamada para entender seu momento, objetivos, prazo e expectativa de retorno — no seu fuso horário.",
                  },
                  {
                    n: "II",
                    t: "Análise de perfil",
                    d: "Estudo personalizado de região, tipo de imóvel, perfil de risco e estratégia patrimonial. Você recebe uma visão clara antes de qualquer proposta.",
                  },
                  {
                    n: "III",
                    t: "Curadoria de imóveis",
                    d: "Seleção criteriosa de opções alinhadas ao seu perfil, com visitas filmadas, análise de documentação e comparativo de mercado — tudo enviado para você revisar com calma.",
                  },
                  {
                    n: "IV",
                    t: "Compra remota acompanhada",
                    d: "Acompanhamento jurídico, financeiro e cartorial de ponta a ponta. Procurações, contratos, pagamentos e registro da escritura — conduzidos com você informado em cada passo, onde quer que esteja.",
                  },
                ].map((s) => (
                  <li key={s.n} className="bg-background p-6 sm:p-8 flex gap-5 sm:gap-6 items-start hover:bg-[color:var(--muted)] transition-colors">
                    <div className="font-display text-2xl text-[color:var(--sand-deep)] w-10 sm:w-12 shrink-0" aria-hidden="true">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-display text-xl">{s.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section id="regioes" aria-labelledby="regioes-heading" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
              <div className="max-w-2xl">
                <p className="eyebrow mb-5">Regiões</p>
                <h2 id="regioes-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                  Litoral de Santa Catarina.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                Atuação concentrada nas cidades com melhor relação entre valorização, liquidez, infraestrutura e
                qualidade de vida — do litoral norte à região de Itajaí e Balneário Camboriú.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  img: heroCoast,
                  name: "Itajaí",
                  note: "Um dos principais polos econômicos do litoral catarinense. Infraestrutura urbana completa, porto ativo e forte demanda por moradia — opções desde apartamentos compactos até empreendimentos de alto padrão na Praia Brava.",
                  alt: "Vista de Itajaí com o porto e a orla ao fundo",
                },
                {
                  img: itapema,
                  name: "Balneário Camboriú",
                  note: "Referência nacional em verticalização e valorização imobiliária. Mercado premium com alta liquidez, forte apelo turístico e demanda constante — para quem busca patrimônio em um dos endereços mais reconhecidos do Brasil.",
                  alt: "Arranha-céus e orla de Balneário Camboriú",
                },
                {
                  img: itapema,
                  name: "Itapema",
                  note: "Referência em verticalização premium no litoral catarinense. Alta liquidez, forte demanda de aluguel e mercado maduro — ideal para quem busca retorno consistente com boa saída futura.",
                  alt: "Vista de Itapema com prédios à beira-mar e morros ao fundo",
                },
                {
                  img: portoBelo,
                  name: "Porto Belo",
                  note: "Enseada protegida, perfil exclusivo e ritmo mais reservado. Imóveis de maior ticket com apelo para quem prioriza preservação patrimonial e exclusividade no longo prazo.",
                  alt: "Mar calmo e costa de Porto Belo ao entardecer",
                },
                {
                  img: penha,
                  name: "Penha",
                  note: "Crescimento estruturado impulsionado pelo turismo familiar e novos empreendimentos. Entrada mais acessível com potencial de valorização à medida que a infraestrutura se consolida.",
                  alt: "Praia e orla de Penha com turismo familiar",
                },
                {
                  img: picarras,
                  name: "Balneário Piçarras",
                  note: "Orla revitalizada, custo-benefício atrativo e valorização em curva ascendente. Combina qualidade de vida com preços ainda abaixo dos vizinhos mais consolidados.",
                  alt: "Orla revitalizada de Balneário Piçarras",
                },
              ].map((r) => (
                <article key={r.name} className="group">
                  <div className="overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="font-display text-xl">{r.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHO SEEKS ME */}
        <section id="publico" aria-labelledby="publico-heading" className="py-24 md:py-32 bg-[color:var(--muted)]/60 border-y border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">Quem costuma me procurar</p>
              <h2 id="publico-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                Brasileiros no exterior com objetivos diferentes, mas a mesma necessidade: confiança.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A maioria chega por indicação, Instagram ou WhatsApp — já interessada em investir, mas insegura sobre
                como conduzir o processo à distância. Reconhece algum desses perfis?
              </p>
            </div>

            <ul className="mt-14 grid sm:grid-cols-2 gap-px bg-border border border-border">
              {[
                "Brasileiros nos EUA que querem manter patrimônio no Brasil",
                "Casais na Europa planejando retorno em alguns anos",
                "Famílias no Canadá buscando diversificação",
                "Investidores que querem renda de aluguel no litoral catarinense",
              ].map((item) => (
                <li key={item} className="bg-background p-6 sm:p-8 flex gap-4 items-start">
                  <span className="text-[color:var(--sand-deep)] mt-0.5 shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="depoimentos" aria-labelledby="depoimentos-heading" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">Depoimentos</p>
              <h2 id="depoimentos-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                Brasileiros que já investiram comigo.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Investir à distância exige confiança. Estes são relatos de clientes que conduziram a compra do exterior
                com acompanhamento próximo em cada etapa.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-px bg-border border border-border">
              {[
                {
                  quote:
                    "Anatana foi incrível assessorando meu primeiro investimento no litoral catarinense. Desde a primeira conversa, entendimento do perfil, explicação, e acompanhamento de perto mesmo depois do fechamento! Altamente recomendável!",
                  name: "Jonas",
                  location: "Estados Unidos",
                },
                {
                  quote:
                    "Moramos na Espanha, nosso primeiro contato com Anatana foi via Whatsapp, ela sempre muito profissional e transparente, nos transmitindo muita confiança... Isso com certeza fez toda a diferença para adquirirmos nosso imóvel através dela!",
                  name: "Silvana",
                  location: "Espanha",
                },
                {
                  quote:
                    "A compra do meu primeiro imóvel no Brasil foi feita com a Anatana e não poderia ter sido com outra pessoa. Ela nos deu todo suporte, uma visão esplêndida sobre o mercado e nos direcionou na melhor direção. Sem ela nada disso seria possível. Uma profissional de super excelência. Se você está a procura de um imóvel com toda certeza ela é a pessoa certa para você estar procurando, super indico!",
                  name: "Beatriz",
                  location: "Inglaterra",
                },
              ].map((t) => (
                <figure key={t.name} className="bg-background p-6 sm:p-8 flex flex-col">
                  <blockquote className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <div className="font-display text-base text-foreground">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.location}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">Dúvidas frequentes</p>
              <h2 id="faq-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                O que quem mora fora costuma perguntar.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Respostas objetivas para as questões mais comuns. Cada situação tem particularidades — na consultoria
                inicial analisamos o seu caso com mais detalhe.
              </p>
            </div>

            <div className="mt-14 space-y-px bg-border border border-border">
              {[
                {
                  q: "Posso financiar mesmo morando no exterior?",
                  a: "Em muitos casos, sim — desde que você tenha renda comprovável e documentação em dia no Brasil. Alguns bancos aceitam financiamento para brasileiros residentes no exterior, especialmente com entrada mais robusta. Avalio as opções disponíveis para o seu perfil e, quando o financiamento não for viável, apresento alternativas como pagamento à vista com recursos enviados legalmente ou parcelamento direto com construtoras.",
                },
                {
                  q: "Preciso voltar ao Brasil para comprar?",
                  a: "Não. É possível conduzir todo o processo remotamente: seleção do imóvel, análise de documentação, assinatura de contrato via procuração e registro da escritura. Organizo visitas filmadas, valido a documentação com apoio jurídico e acompanho cada etapa para que você esteja informado sem precisar viajar.",
                },
                {
                  q: "Como funciona a assinatura?",
                  a: "Contratos e escrituras podem ser assinados por procuração pública, elaborada com advogado especializado. A procuração define exatamente os poderes concedidos e pode ser lavrada no consulado brasileiro do país onde você reside ou, em alguns casos, com reconhecimento de firma em cartório no exterior. Explico o passo a passo conforme o seu país de residência.",
                },
                {
                  q: "Como enviar recursos legalmente?",
                  a: "Recursos devem entrar no Brasil por canais formais — transferência internacional para conta bancária brasileira, com registro no Banco Central conforme a legislação cambial vigente. Oriento sobre a documentação necessária e conecto você a profissionais de câmbio e contabilidade quando necessário, para que o envio esteja correto e rastreável.",
                },
                {
                  q: "Vale mais a pena imóvel pronto ou lançamento?",
                  a: "Depende do seu objetivo e horizonte. Imóvel pronto oferece posse imediata e possibilidade de aluguel desde o início; lançamentos podem ter preço de entrada mais atrativo e potencial de valorização durante a obra, mas exigem paciência e tolerância a risco de construção. Na análise de perfil, apresento os prós e contras de cada opção para a sua estratégia.",
                },
                {
                  q: "Como declarar no imposto?",
                  a: "Imóveis no Brasil devem ser declarados no Imposto de Renda, mesmo que você seja residente fiscal no exterior. Bens no exterior também têm obrigações específicas conforme a legislação do país onde você mora. Recomendo acompanhamento de contador especializado em residentes no exterior — posso indicar profissionais de confiança que atendem esse perfil.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-background">
                  <summary className="cursor-pointer list-none p-6 sm:p-8 flex items-start justify-between gap-6 hover:bg-[color:var(--muted)] transition-colors [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-lg sm:text-xl leading-snug pr-4">{item.q}</h3>
                    <span
                      className="text-[color:var(--sand-deep)] text-xl shrink-0 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-2">
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="sobre" aria-labelledby="sobre-heading" className="py-24 md:py-32 bg-[color:var(--muted)]/60 border-y border-border">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative max-w-md mx-auto md:mx-0">
                <div className="absolute -inset-3 bg-[color:var(--sand)] -z-10 -translate-x-4 translate-y-4" aria-hidden="true" />
                <img
                  src={portrait}
                  alt="Retrato de Anatana Wachholz, consultora imobiliária especializada no litoral norte de Santa Catarina"
                  width={900}
                  height={1100}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow mb-5">Sobre</p>
              <h2 id="sobre-heading" className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                Anatana Wachholz
              </h2>
              <div className="hairline w-16 mt-6 mb-6" aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Nos últimos 7 anos acompanhei dezenas de brasileiros vivendo no exterior que queriam investir no
                Brasil, mas não sabiam em quem confiar à distância. Meu trabalho é simplificar esse processo, analisar
                oportunidades e acompanhar a compra de ponta a ponta para que você tenha segurança mesmo estando a
                milhares de quilômetros de Santa Catarina.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Sou especialista no litoral catarinense — Itajaí, Balneário Camboriú, Itapema, Porto Belo, Penha e
                Balneário Piçarras. Conheço
                o mercado local em profundidade e conduzo cada atendimento de forma próxima, por WhatsApp e
                videochamadas, no seu fuso horário.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                <div>
                  <dt className="sr-only">Anos de experiência</dt>
                  <dd className="font-display text-2xl sm:text-3xl">+7</dd>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Anos</dd>
                </div>
                <div>
                  <dt className="sr-only">Registro profissional</dt>
                  <dd className="font-display text-xl sm:text-2xl">52677-SC</dd>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">CRECI</dd>
                </div>
                <div>
                  <dt className="sr-only">Área de atuação</dt>
                  <dd className="font-display text-2xl sm:text-3xl">SC</dd>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Litoral norte</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section aria-labelledby="cta-heading" className="py-28 md:py-40">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="eyebrow mb-6">Próximo passo</p>
            <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Vamos conversar sobre <em className="italic text-[color:var(--sand-deep)]">seu projeto?</em>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Conte um pouco sobre seu momento e seus objetivos. Em poucas mensagens avaliamos se faz sentido avançar
              para uma consultoria personalizada — sem compromisso e no seu ritmo.
            </p>
            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors shadow-[var(--shadow-lift)]"
              >
                <WhatsAppIcon /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="font-display text-base text-foreground">Anatana Wachholz</div>
          <div>Consultoria imobiliária · Litoral norte de Santa Catarina</div>
          <div>© {new Date().getFullYear()} · Todos os direitos reservados</div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Anatana no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full text-white shadow-[var(--shadow-lift)] motion-safe:hover:scale-105 transition-transform"
        style={{ backgroundColor: "oklch(0.68 0.16 150)" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Anatana Wachholz",
            description:
              "Consultoria imobiliária especializada para brasileiros que vivem no exterior e desejam investir com segurança no litoral norte de Santa Catarina.",
            areaServed: [
              { "@type": "State", name: "Santa Catarina" },
              { "@type": "Country", name: "Estados Unidos" },
              { "@type": "Country", name: "Canadá" },
              { "@type": "Country", name: "Portugal" },
              { "@type": "Country", name: "Irlanda" },
              { "@type": "Country", name: "Reino Unido" },
              { "@type": "Country", name: "Austrália" },
            ],
            knowsAbout: [
              "Investimentos imobiliários",
              "Compra remota de imóveis",
              "Litoral norte de Santa Catarina",
            ],
          }),
        }}
      />
    </div>
  );
}
