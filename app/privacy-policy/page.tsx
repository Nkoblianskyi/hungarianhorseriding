import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Adatvédelmi Tájékoztató | Hungarian Horse Riding',
  description: 'A hungarianhorseriding.com adatvédelmi tájékoztatója a személyes adatok kezeléséről.',
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Jogi dokumentum"
        title={"Adatvédelmi Tájékoztató"}
        image="/images/legal-hero.jpg"
        imageAlt="Ló a ködös pusztán"
        date={<>Utolsó frissítés: <UpdatedDate /></>}
      />

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="space-y-0">
          {[
            {
              title: 'Adatkezelő megnevezése',
              body: [
                'Az adatkezelő a Hungarian Horse Riding weboldal üzemeltetője (a továbbiakban: Adatkezelő). A weboldal domain neve: hungarianhorseriding.com. Kapcsolattartási e-mail-cím: info@hungarianhorseriding.com.',
              ],
            },
            {
              title: 'Az adatkezelés célja és jogalapja',
              body: [
                'A weboldal látogatása során személyes adatok kezelésére kizárólag az Ön kifejezett hozzájárulása alapján kerül sor, amelyet a kapcsolatfelvételi űrlap kitöltésekor ad meg. Az adatkezelés célja a beérkezett megkeresésekre való válaszadás.',
                'Az adatkezelés jogalapja az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR) 6. cikk (1) bekezdés a) pontja szerinti hozzájárulás, valamint a 6. cikk (1) bekezdés b) pontja szerinti szerződéses szükségszerűség, amennyiben az adatkezelés az Ön megkeresésére adandó válasz teljesítéséhez szükséges.',
              ],
            },
            {
              title: 'Kezelt adatok köre',
              body: [
                'A kapcsolatfelvételi űrlapon keresztül az alábbi adatokat kezeljük: teljes név, e-mail-cím, az üzenet tárgya és szövege. Ezen adatokat kizárólag a megkeresés megválaszolásához használjuk, és harmadik félnek nem adjuk át.',
              ],
            },
            {
              title: 'Az adatkezelés időtartama',
              body: [
                'A megkeresésre adott válasz elküldését követően az adatokat az ügy lezárásától számított 30 napig őrizzük meg, ezt követően töröljük. Ha az Ön kérelme alapján nincs szükség hosszabb megőrzési időre, az adatokat hamarabb is törölhetjük.',
              ],
            },
            {
              title: 'Az Ön jogai',
              body: [
                'Tájékoztatáshoz való jog: Jogosult arra, hogy tájékoztatást kapjon az Önre vonatkozó személyes adatok kezeléséről.',
                'Hozzáférési jog: Jogosult hozzáférni az Önre vonatkozó személyes adatokhoz.',
                'Helyesbítési jog: Kérheti a pontatlan személyes adatok helyesbítését.',
                'Törlési jog (elfeledtetési jog): Bizonyos feltételek esetén kérheti személyes adatainak törlését.',
                'Az adatkezelés korlátozásához való jog: Kérheti az adatkezelés korlátozását.',
                'Hozzájárulás visszavonásának joga: A hozzájáruláson alapuló adatkezelés esetén jogosult hozzájárulását bármikor visszavonni.',
                'Panasztétel joga: Jogorvoslattal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH).',
              ],
            },
            {
              title: 'Adatbiztonság',
              body: [
                'Az Adatkezelő az adatkezelés során megfelelő technikai és szervezési intézkedésekkel gondoskodik a személyes adatok védelméről, különös tekintettel azok jogosulatlan vagy jogellenes kezelése, véletlen elvesztése, megsemmisítése vagy károsodása ellen.',
              ],
            },
            {
              title: 'Cookie-k és nyomkövetés',
              body: [
                'A cookie-k kezeléséről részletes tájékoztatást Cookie Szabályzatunk tartalmaz, amely a weboldalon elérhető.',
              ],
            },
            {
              title: 'Kapcsolat',
              body: [
                'Az adatvédelemmel kapcsolatos kérdésekkel, kérelmekkel forduljon hozzánk bizalommal az info@hungarianhorseriding.com e-mail-címen. Megkeresésére 30 napon belül válaszolunk.',
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
              <div className="lg:col-span-8 space-y-3">
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
