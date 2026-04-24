import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Lovaglástechnika | Hungarian Horse Riding',
  description: 'Lovaglástechnikai útmutató kezdőknek és haladóknak: helyes testtartás, segítségek, idomítás alapjai és fejlődési tippek.',
}

const beginnerTips = [
  {
    number: '01',
    title: 'Az egyensúly az alap',
    text: 'Mielőtt bármilyen haladó technikát tanulna, az egyensúly fejlesztése az első prioritás. A lovas csak akkor tud finom jelzéseket adni a lónak, ha saját maga stabilan és lazán ül a nyeregben. Egyensúly nélkül a lovas ösztönösen kapaszkodik, ami feszültséget kelt a lóban.',
  },
  {
    number: '02',
    title: 'A lazaság és a feszültség',
    text: 'A merev, feszült lovas a ló mozgásával szemben dolgozik. A cél a lazaság fenntartása úgy, hogy a lovas testének minden ízülete amortizálja a ló mozgásának lökéseit. A váll, a könyök, a csípő és a térd ízületei mind részt vesznek ebben az abszorpcióban.',
  },
  {
    number: '03',
    title: 'A segítségek rendszere',
    text: 'A lovas a lóval négy alapvető csatornán kommunikál: a lábával, a ülőcsontján keresztüli súlyával, a gyeplőn és a hangjával. Ezeket együttesen nevezzük segítségeknek. A hatékony lovaglás titka, hogy ezeket a segítségeket finoman, egymást kiegészítve alkalmazza a lovas.',
  },
  {
    number: '04',
    title: 'A ritmus és az ütem',
    text: 'Minden lovaslépésnek megvan a saját természetes ritmusa. A lovas feladata, hogy ezt a ritmust érezze, kövesse, és szükség esetén finoman befolyásolja. A ritmusérzék az egyik legfontosabb képesség, amelyet a lovaglás tanítani képes az embernek.',
  },
]

const advancedTips = [
  {
    number: '01',
    title: 'Az összegyűjtöttség',
    text: 'Az összegyűjtöttség (Versammlung) a haladó lovaglás legfontosabb fogalma. A ló akkor gyűjtött, amikor a hátsó lábai jobban alányúlnak, a hát felemelkedik, a nyak ívesen tart és az össztömeg a hátsó lábakra helyeződik. Ez a állapot teszi lehetővé a finom, könnyed irányítást és az összetett mozdulatok végrehajtását.',
  },
  {
    number: '02',
    title: 'A laterális mozgások',
    text: 'A hátratartások, az oldalra való haladások és a különböző elváltott mozgásformák (traversz, renvers, haunches-in, haunches-out, legfogás) a haladó lovaglás eszköztárát alkotják. Ezek a mozgások fejlesztik a ló oldalsó hajlíthatóságát, egyensúlyát és erőnlétét.',
  },
  {
    number: '03',
    title: 'A piaffe és a passage',
    text: 'A piaffe a helyben végzett ügetés legmagasabb formája: a ló energia- és lendületteli, ritmikus, helyben végrehajtott ügetésmozdulatot végez. A passage egy különösen felfüggesztett, lassubb ügetés, amelynél a mozgás szinte lebegővé válik. Mindkét mozdulat hosszú, türelmes idomítás eredménye.',
  },
  {
    number: '04',
    title: 'A ló és lovas páros fejlődése',
    text: 'Haladó szinten a lovas és a ló együtt fejlődik. A ló izomzata, felfogóképessége és bizalma folyamatosan formálódik. Az edző szerepe ebben a fázisban az útmutatás és a ló kívülről való megfigyelése, ami segít a lovasnak olyan részleteket korrigálni, amelyeket ülőhelyből nem érzékel.',
  },
]

const postureSections = [
  {
    title: 'A fej és a tekintet',
    text: 'A fejt egyenesen kell tartani, a tekintet a haladás irányába néz. A leejtett fej a hát meggörbyülését vonja maga után, míg a félrefordított fej aszimmetriát okoz a vállakban.',
  },
  {
    title: 'A váll és a kar',
    text: 'A vállak enyhén hátra és le vannak húzva, nem feszültek. A könyök a test mellett lazán lóg, nem szorul ki. A csuklók a gyeplővel egyenes vonalat alkotnak.',
  },
  {
    title: 'A törzs és a csípő',
    text: 'A gerincet egyenesen, de nem mereven kell tartani. A medence semleges helyzetű, nem dől előre (lordózis) és nem hátra (kyphosis). A csípő rugalmasan követi a ló mozgását.',
  },
  {
    title: 'A lábak és a kengyel',
    text: 'A lábszár a kengyel mögött enyhén érintkezik a ló oldalával. A sarok lefelé mutat. A térdet nem szabad túl szorosan sem túl lazán tartani. A lábfej párhuzamos a ló oldalával, vagy enyhén kifelé fordul.',
  },
]

export default function TechnikaPage() {
  return (
    <>
      <PageHero
        label="Technika"
        title="Lovaglástechnika és Tippek"
        image="/images/section-technique.jpg"
        imageAlt="Díjlovaglás tökéletes testtartással"
        subtitle="Útmutató a helyes testtartástól az összetett mozdulatokig — kezdőknek és haladóknak egyaránt."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <p className="section-label mb-6">Alapelvek</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance">
              A helyes technika a biztonság és a fejlődés alapja
            </h2>
          </div>
          <div>
            <span className="gold-line" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              A lovaglástechnika nem csupán esztétikai kérdés. A helyes testtartás és a finomhangolt segítségek alkalmazása a ló kényelméhez és egészségéhez, a lovas biztonságához, valamint a hosszú távú fejlődéshez egyaránt elengedhetetlen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Az alábbi útmutató a legfontosabb technikai elveket és tippeket foglalja össze, mind kezdők, mind haladók számára. A lovaglás olyan szaktudás, amelyet csak türelmes, következetes munkával, lehetőleg tapasztalt edző segítségével lehet elsajátítani.
            </p>
          </div>
        </div>
      </section>

      {/* Posture */}
      <section className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <p className="section-label mb-6 text-accent">Testtartás</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-12 lg:mb-16 text-balance">
            A helyes ülőhelyzet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {postureSections.map((item, i) => (
              <div
                key={i}
                className={`py-10 pr-0 md:pr-12 border-t border-border ${
                  i % 2 === 1 ? 'md:border-l md:pl-12 md:pr-0' : ''
                }`}
              >
                <span className="section-label text-accent mb-4 block">{`0${i + 1}`}</span>
                <h3 className="font-serif text-xl lg:text-2xl font-light mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Tips */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="mb-14">
          <p className="section-label mb-4 text-accent">Kezdőknek</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance max-w-xl">
            Az első lépések a nyeregben
          </h2>
        </div>
        <div className="space-y-0">
          {beginnerTips.map((tip) => (
            <article
              key={tip.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-t border-border"
            >
              <div className="lg:col-span-2">
                <span className="font-serif text-6xl lg:text-7xl font-light text-border leading-none select-none">
                  {tip.number}
                </span>
              </div>
              <div className="lg:col-span-10">
                <h3 className="font-serif text-2xl lg:text-3xl font-light mb-4 leading-tight">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{tip.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <div className="mb-14">
            <p className="section-label text-primary-foreground/40 mb-4">Haladóknak</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance max-w-xl text-primary-foreground">
              Összetett technikák és fejlesztési irányok
            </h2>
          </div>
          <div className="space-y-0">
            {advancedTips.map((tip) => (
              <article
                key={tip.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-t border-primary-foreground/10"
              >
                <div className="lg:col-span-2">
                  <span className="font-serif text-6xl lg:text-7xl font-light text-primary-foreground/10 leading-none select-none">
                    {tip.number}
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="font-serif text-2xl lg:text-3xl font-light mb-4 leading-tight text-primary-foreground">
                    {tip.title}
                  </h3>
                  <p className="text-primary-foreground/65 leading-relaxed max-w-2xl">{tip.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="gold-line" />
          <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            A lovaglás tanulása véget nem érő folyamat. Még a legkiválóbb lovasok is azt mondják, hogy minden egyes edzésen tanulnak valamit. A türelem, az alázat és a kíváncsiság azok a tulajdonságok, amelyek a legjobb lovasokat megkülönböztetik.
          </p>
        </div>
      </section>
    </>
  )
}
