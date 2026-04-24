"use client"

export function InformationalContent() {
  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Main Guide Section */}
      <section className="bg-brand-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-strong mb-8 border border-white/30">
        <div className="relative px-6 py-8 bg-black/50 backdrop-blur-md">
          <div className="relative z-10 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                A Te Végső Útmutatód a <span className="text-red-500">Magyar Fogadóirodákhoz</span>
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A tökéletes fogadóiroda kiválasztása szakértelmet és alapos elemzést igényel. Átfogó útmutatónk
                kiküszöböli a találgatást szakértői elemzéssel és pontos összehasonlításokkal.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-red-400">Találd Meg a Tökéletes Fogadópartneredet</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Minden játékosnak különböző preferenciái és specifikus igényei vannak. Kezdd azzal, hogy eldöntöd,
                    mely sportágak és fogadási piacok vonzanak leginkább, majd győződj meg arról, hogy a választott
                    szolgáltatóid átfogó fedezetet kínálnak ezeken a területeken.
                  </p>
                  <p>
                    Emellett alaposan vizsgáld meg minden szolgáltató árképzését és megtérülési rátáját. A jobb odds
                    jelentősen növeli a potenciális nyereségedet és az általános fogadási teljesítményedet.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-red-400">Használd Ki a Bónusz Lehetőségeket</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    A mai fogadási iparág versenyhelyzete miatt a szolgáltatók folyamatosan javítják promóciós
                    ajánlataikat, hogy vonzzák és megtartsák hűséges ügyfeleiket. Az üdvözlő csomagok jelentősen
                    fejlődtek és kivételes értéket kínálnak az új játékosoknak, akik értik a bónuszok stratégiai
                    kihasználásának művészetét.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-red-400">Értsd Meg a Magyar Szerencsejáték Szabályokat</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    A magyar játékpiac szigorú szabályozás alatt működik, amelyet a fogyasztók védelmére és a biztonság
                    garantálására terveztek minden platformon. Az engedéllyel rendelkező üzemeltetőknek részletes
                    irányelveket kell követniük, amelyek a pénzügyi biztonságtól a vásárlói adatvédelemig terjednek.
                  </p>
                  <p>
                    Ez a felügyelet nyugalmat biztosít a magyar játékosoknak azzal, hogy tudják, hogy a választott
                    oldalaik megfelelnek az iparág legmagasabb szabványainak.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Informative Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Miért Válaszd az Engedélyezett Magyar Fogadóirodákat?
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Az engedélyezett magyar fogadóirodák páratlan biztonságot és fogyasztóvédelmet kínálnak. Szigorú
                  felügyeleti folyamatokkal ezek a platformok garantálják a tisztességes játékot, a biztonságos
                  tranzakciókat és a felelős szerencsejáték gyakorlatokat.
                </p>
                <p>
                  Emellett a magyar üzemeltetők helyi ügyfélszolgálatot, ismerős fizetési módokat és átfogó
                  lefedettséget kínálnak a magyar sportokról, beleértve a labdarúgást, kézilabdát és a kiemelt magyar
                  eseményeket.
                </p>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold mb-2 text-sm">
                  EZ A TARTALOM SZERZŐI JOGVÉDELEM ALATT ÁLL. MINDEN SZOLGÁLTATÁS ÉS KAMPÁNY KIZÁRÓLAG 18 ÉVES VAGY
                  IDŐSEBB MAGYAR ÁLLAMPOLGÁROK SZÁMÁRA ELÉRHETŐ.
                </p>
                <p className="text-red-200 text-xs">
                  TOVÁBBI KORLÁTOZÁSOK VONATKOZHATNAK, BELEÉRTVE AZ AZONOSÍTÁSI ELLENŐRZÉST, HELYMEGHATÁROZÁSI
                  KORLÁTOZÁSOKAT ÉS ÁLLAMPOLGÁRSÁGI KÖVETELMÉNYEKET.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
