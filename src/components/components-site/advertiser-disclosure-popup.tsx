"use client"

import { X } from "lucide-react"
import { Button } from "./ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosurePopup({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-2xl w-full h-[90vh] flex flex-col shadow-xl">
        {/* Header */}
        <div
          className="bg-black text-white p-4 sm:p-6 flex-shrink-0 border-b-2"
          style={{ borderBottomColor: "#FFD700" }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">HIRDETŐI TÁJÉKOZTATÁS</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 border"
              style={{ borderColor: "#FFD700" }}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">HOGYAN KERESÜNK PÉNZT</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A Legjobb Fogadóirodák Magyarországon egy független összehasonlító oldal, amely segít a felhasználóknak
                megtalálni Magyarország legjobb fogadóirodáit. Kompenzációt kaphatunk, amikor a weboldalunkon megjelenő
                fogadóirodák linkjeire kattint.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">ELKÖTELEZETTSÉGÜNK ÖNNEL SZEMBEN</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Ezek a kompenzációk nem befolyásolják a rangsorolásunkat, véleményeinket vagy ajánlásainkat. Szerkesztői
                csapatunk teljes függetlenséget tart fenn a fogadóirodák értékelésében, olyan tényezők alapján, mint:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>Engedély és szabályozás</li>
                <li>Biztonsági intézkedések és védelem</li>
                <li>Odds és fogadási piacok</li>
                <li>Üdvözlő bónuszok és promóciók</li>
                <li>Ügyfélszolgálat minősége</li>
                <li>Fizetési módok és kifizetési sebesség</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">ÁTLÁTHATÓSÁG</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Hiszünk a teljes átláthatóságban felhasználóinkkal szemben. A platformunkon megjelenített összes
                fogadóiroda egyértelműen megjelölt, és csak olyan üzemeltetőket ajánlunk, akik Magyarországon vagy más
                megbízható joghatóságokban engedéllyel rendelkeznek és szabályozottak.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">AZ ÖN FELELŐSSÉGE</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Bár törekszünk pontos és naprakész információk nyújtására, az Ön felelőssége, hogy minden feltételt és
                kikötést közvetlenül a fogadóirodával ellenőrizzen a fogadás elhelyezése előtt. Mindig játsszon
                felelősségteljesen és a saját határain belül.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-600/10 border-t-2 border-red-600 p-3 sm:p-4 flex-shrink-0">
          <p className="text-red-600 font-semibold text-center text-sm">
            18+ | Csak magyar játékosok | A szerencsejáték függőséget okozhat — Játssz felelősségteljesen.
          </p>
        </div>
      </div>
    </div>
  )
}
