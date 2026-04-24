"use client"

import { X } from "lucide-react"
import { Button } from "./ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsPopup({ isOpen, onClose }: TermsModalProps) {
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
            <h2 className="text-xl sm:text-2xl font-bold">ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</h2>
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
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A Legjobb Fogadóirodák Magyarországon használatával Ön vállalja, hogy betartja és köti magát a következő
                feltételekhez és kikötésekhez. Ezek a feltételek vonatkoznak weboldalunk és szolgáltatásunk minden
                felhasználójára.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">KORHATÁR</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ennek a weboldalnak a használatához legalább 18 évesnek kell lennie. Komolyan vesszük a korhatár
                ellenőrzését és támogatjuk a felelős szerencsejáték gyakorlatokat. Ha 18 évnél fiatalabb, kérjük, hagyja
                el azonnal ezt a weboldalt.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">FELELŐS SZERENCSEJÁTÉK</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Elkötelezettek vagyunk a felelős szerencsejáték előmozdítása mellett. Kérjük, ne feledje:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>Csak olyan pénzzel fogadjon, amelyet megengedhet magának, hogy elveszítsen</li>
                <li>Állítson be idő- és költségkereteket a kezdés előtt</li>
                <li>Soha ne próbálja visszanyerni a veszteségeit</li>
                <li>Vegyen rendszeres szüneteket a szerencsejátéktól</li>
                <li>Kérjen segítséget, ha a szerencsejáték problémává válik</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">INFORMÁCIÓK PONTOSSÁGA</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Bár törekszünk pontos és naprakész információk nyújtására a fogadóirodákról, bónuszokról és
                promóciókról, nem garantálhatjuk minden tartalom pontosságát. A feltételek és kikötések előzetes
                értesítés nélkül változhatnak.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">HARMADIK FELEK LINKJEI</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Weboldalunk harmadik felek fogadóirodáira mutató linkeket tartalmaz. Nem vagyunk felelősek ezeknek a
                külső weboldalaknak a tartalmáért, feltételeiért vagy gyakorlataiért. Mindig nézze át feltételeiket és
                kikötéseiket a használat előtt.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">FELELŐSSÉG KORLÁTOZÁSA</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A Legjobb Fogadóirodák Magyarországon nem vállal felelősséget semmilyen közvetlen, közvetett,
                véletlenszerű vagy következményes kárért, amely ennek a weboldalnak vagy az általa tartalmazott
                információknak a használatából ered.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-black">SEGÍTSÉG ÉS TÁMOGATÁS</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Ha segítségre van szüksége szerencsejáték-problémákkal kapcsolatban, kérjük, lépjen kapcsolatba:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>
                  <strong>Magyar szerencsejáték segélyvonal:</strong> Segítség elérhető
                </li>
                <li>
                  <strong>Tanácsadás:</strong> Szakmai szolgáltatások
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-600/10 border-t-2 border-red-600 p-3 sm:p-4 flex-shrink-0">
          <p className="text-red-600 font-semibold text-center text-sm">
            18+ | Feltételek és kikötések érvényesek | Játssz felelősségteljesen
          </p>
        </div>
      </div>
    </div>
  )
}
