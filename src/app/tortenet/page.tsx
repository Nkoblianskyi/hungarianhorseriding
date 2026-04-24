import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'A Magyar Lovaglás Története | Hungarian Horse Riding',
  description: 'A magyarok és a ló kapcsolatának ezeréves históriája. A nomád honfoglalóktól a modern olimpiai sikerekig.',
}

const timeline = [
  {
    period: 'Kr. e. 500-tól',
    title: 'Nomád előzmények',
    paragraphs: [
      'A magyarok elődei az eurázsiai sztyeppéken élő lovas nomád nép voltak, akiknek egész életmódját a ló határozta meg. Az állattenyésztés, a vadászat, a harci tevékenység és a vándorlás egyaránt a ló köré szerveződött.',
      'A korai magyar törzsek lovas kultúrájának nyomait régészeti leletek bizonyítják: a lovassírokból előkerülő nyergek, kengyelek, kantárok és zablatöredékek arról tanúskodnak, hogy a ló halál után is elkísérte gazdáját.',
    ],
  },
  {
    period: '895-tól',
    title: 'A honfoglalás lovasa',
    paragraphs: [
      'A Kárpát-medence elfoglalása 895 körül a magyar lovas hadviselés egyik legnagyobb teljesítménye volt. Az akkor már fejlett lovas technikával rendelkező törzsek a könnű lovasságra alapuló taktikával nagy területeket tudtak kontrollálni.',
      'A honfoglalás kori leletek igazolják, hogy a magyar lovak gondozása és felszerelése igen magas szinten állt. A díszesen kivert nyergek, aranyozott kengyelek és fegyverek egyszerre tanúskodnak a praktikus lovastudásról és a lovas kultúra presztízsértékéről.',
    ],
  },
  {
    period: '1000-1500',
    title: 'Középkori lovas hagyományok',
    paragraphs: [
      'Az Árpád-házi királyok korában a lovassport különálló szervezeti formát kezdett ölteni. A nemesség lovaglástanulása és a lovagi tornák megjelenése a lovas képességeket hosszabb idejű feladat lévén szervesítette a társadalmi életbe.',
      'A közép-kori Magyarország lovas hagyományainak különleges eleme volt a pusztán élő csikósok kultúrája. A nagy alföldi pásztorok a lovak természetes kezelésének olyan módszereit fejlesztették ki, amelyek máig hatással vannak a magyar lovas hagyományokra.',
    ],
  },
  {
    period: '1500-1800',
    title: 'A huszár és a csikós kora',
    paragraphs: [
      'A XVI-XVIII. századi Magyar Királyságban a huszárság vált a lovas harckészség megtestesítőjévé. A huszárok könnyű lovassági taktikája egész Európában elismertté vált, és a magyar lovas kultúra egyik legfontosabb exportcikkévé vált.',
      'A puszta csikós hagyománya ebben az időszakban érett teljessé. A csikósok a szabad ménesek gondozóiból a természetes lótartás és a különleges lovas ügyességnek bemutatók legyenek. A lovasmutatványok, mint a "posta" (egyszerre több lovon állva lovagolni) ebből a korból erednek.',
    ],
  },
  {
    period: '1800-1945',
    title: 'A versenysport kialakulása',
    paragraphs: [
      'A XIX. századtól kezdve a lovassport fokozatosan szervezett versenysporttá alakult. Az első lovassportkörök és versenysorozatok megjelenése Magyarországon is jelzi ezt az átalakulást. A lovaglás ekkor már nemcsak a nemesség és a hadsereg kiváltsága volt, hanem egyre szélesebb körben terjedt el.',
      'Az 1900-as párizsi olimpián Magyarország először vett részt lovas sportszámokban, ami hosszú és sikeres olimpiai szereplés kezdetét jelölte. A két világháború közötti időszakban a magyar lovassport nemzetközileg is kiemelkedő eredményeket ért el, különösen a military és a díjlovaglás területén.',
    ],
  },
  {
    period: '1945-től napjainkig',
    title: 'Moderne és hagyomány',
    paragraphs: [
      'A második világháborút követő évtizedekben a lovassport struktúrája gyökeresen átalakult. A szocialista időszakban az állami keretek között folyt a sportnevelés, ami bizonyos szintű folytonosságot biztosított, de a hagyományos lovaskultúra számos eleme háttérbe szorult.',
      'A rendszerváltás után a lovassport reneszánszát éli Magyarországon: a versenyeken növekvő mezőny vesz részt, a lovaglás rekreációs célú népszerűsége nő, és a hagyományos csikós kultúra megőrzése is tudatos törekvéssé vált.',
    ],
  },
]

export default function TortenetPage() {
  return (
    <>
      <PageHero
        label="Történet"
        title="A Magyar Lovaglás Története"
        image="/images/section-history.jpg"
        imageAlt="Hagyományos csikós lovas a pusztán"
        subtitle="A ló és a magyar ember kapcsolata több mint ezer esztendős — a nomád honfoglalóktól az olimpiai porondig."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="gold-line" />
          <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            A ló és a magyar ember kapcsolata több mint ezer esztendős. Ettől a mélyen gyökerező köteléktől elválaszthatatlan a magyar kultúra, a néphagyomány és a modern versenylovaglas egyaránt.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <article
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 lg:py-20 border-t border-border"
            >
              {/* Period */}
              <div className="lg:col-span-3">
                <span className="section-label text-accent">{item.period}</span>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6 leading-tight">
                  {item.title}
                </h2>
                <div className="space-y-4">
                  {item.paragraphs.map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
          <span className="block w-12 h-px bg-accent mx-auto mb-8" />
          <blockquote className="font-serif text-2xl lg:text-4xl font-light leading-relaxed text-balance">
            A ló a magyar lélek tükre: szabad, erős és büszke.
          </blockquote>
          <span className="block w-12 h-px bg-accent mx-auto mt-8" />
        </div>
      </section>
    </>
  )
}
