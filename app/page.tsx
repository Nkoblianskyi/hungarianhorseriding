import Image from 'next/image'
import Link from 'next/link'

const sections = [
  {
    number: '01',
    label: 'Történet',
    title: 'A magyar lovaglás ezer éve',
    description:
      'A lovas kultúra az Árpád-kortól napjainkig meghatározó része a magyar identitásnak. Fedezze fel, hogyan alakult ki és fejlődött a lovassport Magyarországon.',
    href: '/tortenet',
    image: '/images/section-history.jpg',
    imageAlt: 'Hagyományos csikós lovas a pusztán',
  },
  {
    number: '02',
    label: 'Felszerelés',
    title: 'Minden, amit tudni kell a felszerelésről',
    description:
      'A nyeregtől a sisakig: részletes útmutató a versenyzéshez és rekreációs lovagláshoz szükséges eszközökről és öltözetről.',
    href: '/felszereles',
    image: '/images/section-equipment.jpg',
    imageAlt: 'Lovaglási felszerelés — nyereg és kantár',
  },
  {
    number: '03',
    label: 'Szabályok',
    title: 'Diszciplínák és versenyszabályok',
    description:
      'Díjlovaglás, díjugratás, military, endurance és voltizálás: minden versenyág szabályainak és követelményeinek átfogó bemutatása.',
    href: '/szabalyok',
    image: '/images/section-rules.jpg',
    imageAlt: 'Díjugratás verseny közben',
  },
  {
    number: '04',
    label: 'Technika',
    title: 'Testtartástól az összetett mozdulatokig',
    description:
      'Lovaglástechnikai útmutató kezdőknek és haladóknak egyaránt: az alapoktól a finomhangolt kommunikációig a lóval.',
    href: '/technika',
    image: '/images/section-technique.jpg',
    imageAlt: 'Díjlovaglás tökéletes testtartással',
  },
  {
    number: '05',
    label: 'Blog',
    title: 'Cikkek, elemzések és lovas írások',
    description:
      'Részletes cikkek a lovaglás minden aspektusáról: a ló és lovas kapcsolatától az edzésmódszerekig, a hagyományos technikáktól a modern versenyvilágig.',
    href: '/blog',
    image: '/images/section-blog.jpg',
    imageAlt: 'Ló a réteken, arany fényben',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="Főoldal banner"
      >
        {/* Full-bleed background image */}
        <Image
          src="/images/hero.jpg"
          alt="Magyar lovas a pusztán, naplemente fényében"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay — stronger at top (header area) and bottom, lighter in middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        {/* Extra left-side darkening to anchor text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* Content — absolutely positioned in a diagonal/asymmetric grid */}
        <div className="relative z-10 min-h-screen max-w-[1480px] mx-auto px-6 lg:px-16 flex flex-col">

          {/* Top row: label sits top-left, scroll hint top-right */}
          <div className="flex items-start justify-between pt-[110px] lg:pt-[120px]">
            <p className="text-white/95 text-[9px] tracking-[0.35em] uppercase font-sans font-semibold drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]">
              Magyar lovas hagyományok
            </p>
            <p className="hidden lg:block text-white/30 text-[9px] tracking-[0.25em] uppercase font-sans self-end mt-1">
              Görgetés
            </p>
          </div>

          {/* Middle: giant headline pushed to bottom-left, desc to bottom-right */}
          <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">

              {/* Headline col — large, bottom-aligned */}
              <div className="lg:col-span-7">
                {/* Thin gold accent line above title */}
                <span className="block w-8 h-px bg-[--accent] mb-8" aria-hidden="true" />
                <h1 className="font-serif font-light text-white leading-[1.02] text-balance">
                  <span className="block text-[58px] md:text-[76px] lg:text-[90px] xl:text-[108px]">
                    A Magyar
                  </span>
                  <span className="block text-[58px] md:text-[76px] lg:text-[90px] xl:text-[108px] text-[--accent]">
                    Lovaglás
                  </span>
                  <span className="block text-[58px] md:text-[76px] lg:text-[90px] xl:text-[108px]">
                    Világa
                  </span>
                </h1>
              </div>

              {/* Right col — description + CTA, mid-height alignment */}
              <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/15 flex flex-col gap-8 lg:pb-4">
                <p className="text-white/60 font-sans font-light text-[15px] leading-relaxed max-w-xs">
                  Fedezze fel Magyarország lovas hagyományait, versenyeit és a lovaglás szenvedélyét — a pusztától az olimpiai porondig.
                </p>

                {/* Mini nav links */}
                <div className="flex flex-col gap-2.5 border-t border-white/10 pt-6">
                  {sections.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex items-center gap-3 text-white/35 hover:text-white/80 transition-colors duration-200"
                    >
                      <span className="block w-3 h-px bg-[--accent] opacity-50 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                      <span className="text-[9.5px] tracking-[0.18em] uppercase font-sans font-medium">{s.label}</span>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/tortenet"
                  className="self-start inline-flex items-center gap-4 text-[10px] tracking-[0.24em] uppercase font-sans font-semibold text-[--green-deep] bg-[--accent] hover:bg-[--accent]/90 px-7 py-4 transition-colors duration-200"
                >
                  Felfedezés
                  <span className="block w-4 h-px bg-[--green-deep]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Thin gold bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[--accent] opacity-30" aria-hidden="true" />
      </section>

      {/* ─── INTRO ─────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-14 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="section-label mb-5">A lovassport Magyarországon</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-light leading-[1.08] text-balance">
              Ötezer év lovas öröksége
            </h2>
          </div>
          <div className="lg:col-span-1 hidden lg:flex justify-center pt-3">
            <span className="block w-px h-24 bg-[--accent] opacity-50" aria-hidden="true" />
          </div>
          <div className="lg:col-span-6 pt-0 lg:pt-2">
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-5">
              Magyarország lovas kultúrája az ország legmélyebb gyökereiig nyúlik vissza. A honfoglaló magyarok lovas nomádok voltak, akiknek életét, identitását és katonai erejét a ló határozta meg. Ez a hagyomány generációkon át öröklődött, és ma is elevenen él a magyar lovas sportban.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              A puszta csikósaitól az olimpiai bajnokokig, a népi hagyományoktól a modern versenyszportig: Magyarország a lovaglás minden ágában kiemelkedő eredményeket ért el.
            </p>
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL SECTIONS ────────────────────────────────────────── */}
      <section aria-label="Tartalom szekciók" className="py-4 lg:py-6 px-4 lg:px-10 flex flex-col gap-4 lg:gap-5">
        {sections.map((item, i) => {
          const isEven = i % 2 === 0
          return (
            <article key={item.href} className="group overflow-hidden">
              <Link href={item.href} className="block">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px] lg:min-h-[500px]`}
                >
                  {/* Image side */}
                  <div
                    className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'} h-[260px] lg:h-auto`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle dark vignette */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>

                  {/* Text side */}
                  <div
                    className={`bg-[--secondary] flex flex-col justify-between p-8 lg:p-14 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    {/* Top: number + label */}
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-[64px] lg:text-[88px] leading-none font-light text-[--accent]/20 select-none tabular-nums">
                        {item.number}
                      </span>
                      <p className="section-label text-[--accent] mt-1">{item.label}</p>
                    </div>

                    {/* Middle: headline + description */}
                    <div className="flex flex-col gap-5 my-6">
                      <span className="block w-8 h-px bg-[--accent]" aria-hidden="true" />
                      <h3 className="font-serif text-[28px] lg:text-[36px] font-light leading-snug text-balance text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-[14px] leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom: CTA */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <span className="text-[9.5px] tracking-[0.25em] uppercase font-sans font-semibold text-foreground group-hover:text-[--accent] transition-colors duration-300">
                        Részletek
                      </span>
                      <span className="block h-px bg-[--accent] w-6 group-hover:w-14 transition-all duration-400" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </section>

      {/* ─── BLOG TEASER ───────────────────────────────────────────────── */}
      <section className="bg-[--secondary]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-24 lg:py-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-4">Blog</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance">
                Cikkek és írások
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[10px] tracking-[0.18em] uppercase font-sans font-semibold text-muted-foreground hover:text-foreground border-b border-border hover:border-foreground pb-0.5 transition-all duration-200 flex-shrink-0"
            >
              Összes cikk
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border divide-x divide-border">
            {[
              { title: 'Ló és lovas: az évezredes kapcsolat', excerpt: 'A ló és az ember kapcsolata évezredek óta formálja a kultúrát és a sportot egyaránt.', href: '/blog/lo-es-lovas-az-evezredes-kapcsolat' },
              { title: 'A helyes testtartás alapjai nyeregben', excerpt: 'Az egyensúly és a tartás a sikeres lovaglás alappillérei minden szinten.', href: '/blog/helyes-testtartas-nyeregben' },
              { title: 'A lovaglás hatása a testre és a lélekre', excerpt: 'Tudományos és személyes perspektívák a lovaglás testi és mentális jótékony hatásairól.', href: '/blog/lovaglas-hatasa-testre-es-lekre' },
            ].map((post, i) => (
              <Link key={post.href} href={post.href} className="group block p-8 lg:p-10 hover:bg-background transition-colors duration-200">
                <span className="block w-5 h-px bg-[--accent] mb-6 group-hover:w-10 transition-all duration-300" aria-hidden="true" />
                <p className="section-label mb-3 text-[--accent]">{`0${i + 1}`}</p>
                <h3 className="font-serif text-xl lg:text-2xl font-light leading-snug mb-3 group-hover:text-[--green-deep] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-14 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-5">Kapcsolat</p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance">
              Kérdése van?<br />Írjon nekünk.
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pl-12 lg:border-l border-border">
            <span className="block w-10 h-px bg-[--accent]" aria-hidden="true" />
            <p className="text-muted-foreground leading-relaxed text-[15px] max-w-sm">
              Örömmel válaszolunk minden kérdésre a magyar lovas sporttal kapcsolatban.
            </p>
            <Link
              href="/rolunk"
              className="self-start inline-flex items-center gap-4 text-[10.5px] tracking-[0.22em] uppercase font-sans font-semibold bg-[--green-deep] text-[--cream] hover:bg-[--green-deep]/90 px-8 py-4 transition-colors duration-200"
            >
              Kapcsolatfelvétel
              <span className="block w-5 h-px bg-[--cream]/60" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
