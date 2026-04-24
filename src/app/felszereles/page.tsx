import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Felszerelés és Öltözet | Hungarian Horse Riding',
  description: 'A lovagláshoz szükséges teljes felszerelés bemutatása: nyereg, kantár, sisak, csizma és egyéb eszközök.',
}

const equipment = [
  {
    id: '01',
    name: 'Nyereg',
    subtitle: 'A lovas alapfelszerelése',
    description:
      'A nyereg az a lovas felszerelési tárgy, amely a lovas és a ló közötti kapcsolat fizikai alapját biztosítja. Jól illeszkedő nyereg elengedhetetlen a ló kényelméhez és a lovas hatékony ülőhelyzetéhez. A nyereg típusa az adott lovassportágtól függ: a díjlovaglási nyereg mély üléssel és hosszabb nyeregkápával rendelkezik, az ugró nyereg rövidebb kengyellel és sekélyebb üléssel készül, míg az allrounder típusú nyereg a mindkét ágban való lovagláshoz nyújt kompromisszumos megoldást.',
    details: [
      'Állatbőr vagy szintetikus anyag kivitelben elérhető',
      'Fa, fém vagy kompozit nyeregfából készülhet a szerkezet',
      'A nyereg méretét a ló hátának szélességéhez igazítják',
      'Rendszeres gondozás, olajozás és karbantartás szükséges',
    ],
    bg: 'bg-secondary',
  },
  {
    id: '02',
    name: 'Kantár és zabla',
    subtitle: 'A kommunikáció eszköze',
    description:
      'A kantár a ló fejére helyezett bőr vagy szintetikus anyagból készült szerszám, amelyen a zabla és a gyeplő rögzítve van. A zabla típusa erősen befolyásolja a lovas és a ló közötti kommunikáció finomságát. A puha szájú, tapasztalatlan lovasaknak kevésbé hatékony zabla ajánlott, míg a haladók finomabb, de erősebb hatású zablatípusokat alkalmazhatnak.',
    details: [
      'Snaffle zabla: a leggyakoribb alapzabla típus, közvetlenül a szájra hat',
      'Pelham: kombinált hatású zabla, nyaki szíjjal kombinálva',
      'Trense + kantár: versenylovaglásra ajánlott kombinált fejszerszám',
      'A zabla illeszkedése kulcsfontosságú a ló kényelméhez',
    ],
    bg: 'bg-background',
  },
  {
    id: '03',
    name: 'Lovaglósisak',
    subtitle: 'Biztonság mindenekelőtt',
    description:
      'A lovaglósisak az egyik legfontosabb biztonsági felszerelési tárgy. Egy esés során a fejsérülések megelőzése érdekében nélkülözhetetlen. A modern lovaglósisakok könnyűek, szellőzőnyílásokkal ellátottak és az emberi fej formájához optimálisan alkalmazkodnak. Versenyeken és edzéseken egyaránt kötelező viselni.',
    details: [
      'Az EN 1384, ASTM F1163 vagy PAS 015 szabványnak megfelelő sisak ajánlott',
      'A sisakot rendszeresen ellenőrizni kell, esés után ki kell cserélni',
      'A megfelelő méret döntő a hatékony védelem érdekében',
      'Állszíj nélkül a sisak nem véd megfelelően',
    ],
    bg: 'bg-secondary',
  },
  {
    id: '04',
    name: 'Lovaglócsizma',
    subtitle: 'Tartás és fogás a kengyelben',
    description:
      'A lovaglócsizma feladata, hogy a lovas lábát megvédje a kengyeltől, a ló oldalától, és biztonságos fogást nyújtson lovaglás közben. A klasszikus magas szárú lovaglócsizma a legbiztonságosabb, de kényelmes lovaglóbakancs kengyelbiztonsággal szintén megfelelő megoldás lehet. A sarokrész enyhén emelt kialakítása megakadályozza a láb megcsúszását a kengyelben.',
    details: [
      'Magas szárú csizma a legjobb szár- és lábvédelem',
      'Bőr vagy szintetikus anyagból készülhet',
      'A sarok legalább 2 cm magasságú legyen a kengyelbiztonság érdekében',
      'Rendszeres tisztítás és ápolás meghosszabbítja az élettartamot',
    ],
    bg: 'bg-background',
  },
  {
    id: '05',
    name: 'Lovaglónadrág',
    subtitle: 'Mozgásszabadság és komfort',
    description:
      'A lovaglónadrág speciálisan a nyereggel való folyamatos érintkezés kényelmes elviselésére tervezték. A térd- és üléstájon lévő betétek csökkentik a dörzsölést és növelik a fogást. A stretch anyagok lehetővé teszik a szabad mozgást, miközben a nadrág formája illeszkedik a ló hátához. Versenyeken fehér lovaglónadrágot kell viselni számos diszciplínában.',
    details: [
      'Térd- és ülésbetét bőrből, gumíból vagy szintetikus anyagból',
      'Full-seat (teljes ülésbetét) a legjobb fogást biztosítja',
      'Könnyű, légáteresztő anyagok nyári használatra ajánlottak',
      'A hasítékmentes kialakítás fontos a kényelemhez',
    ],
    bg: 'bg-secondary',
  },
  {
    id: '06',
    name: 'Kesztyű',
    subtitle: 'Fogás és érzékelés',
    description:
      'A lovaglókesztyű kettős célt szolgál: védi a kezeket a gyeplő okozta dörzsöléstől, miközben jó fogást biztosít. A vékony, rugalmas anyagból készült kesztyűk megőrzik a lovas kezének érzékenységét, ami fontos a finom gyeplőkontakt szempontjából. Télen melegen tartó, de nem túl vastag kesztyűk ajánlottak.',
    details: [
      'Bőr kesztyű a legtartósabb és legjobb fogást adó megoldás',
      'Szintetikus kesztyűk könnyebb karbantartást igényelnek',
      'A megfelelő méret nélkülözhetetlen a mozgásszabadsághoz',
      'Versenyeken általában fehér kesztyűt illik viselni',
    ],
    bg: 'bg-background',
  },
  {
    id: '07',
    name: 'Kengyel',
    subtitle: 'Stabilitás a nyeregben',
    description:
      'A kengyel a lovas lábát tartó vasalat, amely a nyereghez erősített kengyelvason lóg. A kengyel méretének pontosnak kell lennie: se túl nagy, se túl kicsi. Ha a kengyel túl szűk, a lovas lába elakadhat esés esetén; ha túl tág, a láb átcsúszhat, ami szintén balesetveszélyes. A modern biztonsági kengyeltípusok esés esetén automatikusan elengedik a lábat.',
    details: [
      'Rozsdamentes acél kengyel a legelterjedtebb típus',
      'Biztonsági kengyel oldalnyitással fokozott védelmet nyújt',
      'A kengyel ideális szélessége a csizma cipőtalpánál 1 cm-rel szélesebb',
      'Tapadó talpú kengyeltalpbetét javítja a fogást',
    ],
    bg: 'bg-secondary',
  },
  {
    id: '08',
    name: 'Lovaglóostor és sarkantyú',
    subtitle: 'A finomhangolt segítségek',
    description:
      'A lovaglóostor és a sarkantyú a lovas segédeszközei, amelyek kiegészítik a lábbal adott jelzéseket. Helyes alkalmazásuk finomítja a kommunikációt a lóval, nem büntető eszközök. A sarkantyú kizárólag adott esetben, pontosan és rövid időre alkalmazza a lovas. Az ostor hossza az adott lovas sportágtól függően változik.',
    details: [
      'Díjlovaglásban rövid ostor, ugratásban hosszabb lovaglóostor szokásos',
      'A sarkantyúnak simának és rövid nyakúnak kell lennie kezdőknél',
      'Mindkét eszköz csak tapasztalt lovas kezébe való',
      'Versenyszabályok meghatározzák az engedélyezett méretek korlátait',
    ],
    bg: 'bg-background',
  },
]

export default function FelszerelesPage() {
  return (
    <>
      <PageHero
        label="Felszerelés"
        title="Felszerelés és Öltözet"
        image="/images/section-equipment.jpg"
        imageAlt="Lovaglási felszerelés — nyereg és kantár"
        subtitle="A nyeregtől a sisakig: minden, amit a teljes lovas felszerelésről tudni érdemes."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="gold-line" />
          <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            A megfelelő felszerelés nemcsak a teljesítményt javítja, hanem a biztonságot is garantálja, és a ló kényelméhez is hozzájárul. Minden tárgynak megvan a maga szerepe a lovas és a ló közötti kommunikációban.
          </p>
        </div>
      </section>

      {/* Equipment Items */}
      <section>
        {equipment.map((item) => (
          <article key={item.id} className={`${item.bg} border-t border-border`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Number & Name */}
                <div className="lg:col-span-4">
                  <span className="section-label text-accent mb-2 block">{item.id}</span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight mb-2">
                    {item.name}
                  </h2>
                  <p className="text-muted-foreground text-sm font-sans">{item.subtitle}</p>
                </div>

                {/* Description */}
                <div className="lg:col-span-8">
                  <p className="text-foreground leading-relaxed mb-8">{item.description}</p>
                  <span className="gold-line" />
                  <ul className="space-y-3 mt-2">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="block w-5 h-px bg-accent flex-shrink-0 mt-2.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Maintenance Note */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="section-label text-primary-foreground/40 mb-4">Karbantartás</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6 text-balance">
              A felszerelés gondozása
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              A lovas felszerelések rendszeres tisztítása és ápolása nemcsak a tárgyak élettartamát hosszabbítja meg, hanem biztonsági szempontból is alapvető fontosságú. A megkeményedett, repedt bőr vagy a laza csaton balesetveszélyessé válhat.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed">
              A bőr tárgyakat (nyereg, kantár, csizma, kesztyű) lovaglás után meg kell tisztítani, rendszeresen kenni kell bőrápoló szert, és száraz, szellős helyen kell tárolni. A fém részeket (kengyel, zabla) vízzel és puha ronggyal lehet tisztítani, rozsdásodás ellen védelemmel kell ellátni.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
