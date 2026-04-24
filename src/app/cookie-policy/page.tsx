import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Cookie Szabályzat | Hungarian Horse Riding',
  description: 'Tájékoztató a hungarianhorseriding.com weboldalon alkalmazott sütikről (cookie-król).',
}

function UpdatedDate() {
  const now = new Date()
  const formatted = now.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return <span>{formatted}</span>
}

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        label="Jogi dokumentum"
        title="Cookie Szabályzat"
        image="/images/legal-hero.jpg"
        imageAlt="Ló a ködös pusztán"
        date={<>Utolsó frissítés: <UpdatedDate /></>}
      />

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="space-y-0">
          {[
            {
              title: 'Mi az a cookie?',
              body: [
                'A cookie (süti) egy kis szövegfájl, amelyet az Ön által meglátogatott weboldal helyez el az Ön eszközén (számítógépén, táblagépén vagy mobiltelefonján). A cookie-k célja a weboldal megfelelő működésének biztosítása, a felhasználói élmény javítása, valamint statisztikai és elemzési adatok gyűjtése.',
                'A cookie-k nem tartalmaznak személyazonosító adatokat, kivéve, ha Ön ezeket az adatokat maga adta meg. A cookie-k nem károsítják az Ön eszközét.',
              ],
            },
            {
              title: 'Milyen típusú cookie-kat használunk?',
              body: [
                'Szükséges cookie-k: Ezek a cookie-k a weboldal alapvető működéséhez nélkülözhetetlenek. Nélkülük a weboldal egyes funkciói nem elérhetők. Ezek a cookie-k nem gyűjtenek személyes adatokat, és törlésük nem lehetséges a weboldal működésének megzavarása nélkül.',
                'Preferencia cookie-k: Ezek a cookie-k megjegyzik az Ön preferenciáit (például a cookie-hozzájárulás státuszát), hogy a következő látogatáskor ne kelljen újra beállítania azokat.',
                'Analitikai cookie-k: Ezen cookie-k segítségével megértjük, hogyan használják a látogatók a weboldalunkat. Az összegyűjtött adatok anonim formában kerülnek feldolgozásra, és kizárólag a weboldal fejlesztésére szolgálnak.',
              ],
            },
            {
              title: 'Hogyan kezeljük a cookie-kat?',
              body: [
                'A weboldal első meglátogatásakor egy tájékoztató sáv jelenik meg, amelyen Ön dönthet a cookie-k elfogadásáról vagy elutasításáról. Döntésének eredménye egy cookie formájában kerül tárolásra az Ön eszközén.',
                'Az Ön hozzájárulása nélkül nem szükséges cookie-kat nem helyezünk el. A szükséges cookie-k a weboldal működéséhez elengedhetetlenek, és ezekhez nem szükséges külön hozzájárulás.',
              ],
            },
            {
              title: 'Cookie-k törlése és kezelése',
              body: [
                'Az Ön böngészője lehetőséget biztosít a cookie-k megtekintésére, kezelésére és törlésére. A cookie-kat a böngésző beállításaiban bármikor letilthatja vagy törölheti, azonban ez hatással lehet a weboldal egyes funkcióinak működésére.',
                'A cookie-kezelés módja böngészőnként eltér. A megfelelő lépéseket böngészője súgójában vagy a fejlesztő hivatalos dokumentációjában találja.',
              ],
            },
            {
              title: 'Harmadik feles cookie-k',
              body: [
                'Előfordulhat, hogy weboldalunk harmadik féltől származó cookie-kat is alkalmaz (például statisztikai eszközök révén). Ezekre a harmadik felek saját adatvédelmi és cookie-szabályzata vonatkozik, amelyekért nem vállalunk felelősséget.',
              ],
            },
            {
              title: 'Kapcsolat',
              body: [
                'Ha kérdése van a cookie-k kezelésével kapcsolatban, forduljon hozzánk bizalommal az info@hungarianhorseriding.com e-mail-címen.',
              ],
            },
          ].map((section, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 border-t border-border"
            >
              <div className="lg:col-span-4">
                <h2 className="font-serif text-xl lg:text-2xl font-light leading-tight">
                  {section.title}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {section.body.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed text-sm">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
