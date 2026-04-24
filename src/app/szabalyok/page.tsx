import type { Metadata } from 'next'
import Link from 'next/link'
import { disciplinesData } from '@/lib/data'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Szabályok és Diszciplínák | Hungarian Horse Riding',
  description: 'A legfontosabb lovassport-ágak: díjlovaglás, díjugratás, military, endurance és voltizálás részletes szabályai.',
}

export default function SzabalyokPage() {
  return (
    <>
      <PageHero
        label="Diszciplínák"
        title={"Szabályok és Versenydiszciplínák"}
        subtitle="A lovassport öt fő versenydiszciplínájának részletes bemutatása: a szabályoktól a verseny menetéig."
        image="/images/section-rules-hero.jpg"
        imageAlt="Lovas díjugratás versenyen"
      />

      {/* Disciplines List */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="space-y-0">
          {disciplinesData.map((discipline, i) => (
            <article key={discipline.slug} className="border-b border-border group">
              <Link href={`/szabalyok/${discipline.slug}`} className="block py-10 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="section-label text-accent">{`0${i + 1}`}</span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-4">
                    <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight group-hover:text-primary transition-colors duration-300">
                      {discipline.title}
                    </h2>
                  </div>

                  {/* Excerpt */}
                  <div className="lg:col-span-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {discipline.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <span className="block w-6 h-px bg-border group-hover:bg-accent group-hover:w-10 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Info block */}
      <section className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <p className="section-label mb-4">Megjegyzés</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-balance">
                A versenyszabályok és a sportági fejlődés
              </h2>
            </div>
            <div>
              <span className="gold-line" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                A lovassport szabályait a Nemzetközi Lovas Szövetség (FEI) határozza meg és rendszeresen frissíti. Az itt közölt információk általános tájékoztatás céljára szolgálnak. A versenyzéshez szükséges aktuális szabályokat mindig az illetékes sportszövetség hivatalos kiadványaiból kell ellenőrizni.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A szabályok ismerete mellett a versenyzők számára nélkülözhetetlen a tapasztalt edző személyes irányítása és a rendszeres versenygyakorlat, amellyel az elméleti tudás valódi sportteljesítménnyé alakul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
