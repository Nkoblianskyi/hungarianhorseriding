"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Clock, Users, Zap } from "lucide-react"

export function MainSiteFooter() {
  return (
    <footer className="bg-black text-white py-16 mt-20 border-t-4 relative" style={{ borderTopColor: "#FFD700" }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-[1150px]">
        {/* Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div
                  className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: "#FFD700", boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
                >
                  <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D62718]"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#477050]"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-[#D62718]">FOGADÁS</span>
                  <span className="text-white"> LEGJOBB</span>
                  <span className="text-[#D62718]"> OLDALAK</span>
                  <span className="text-white"> MAGYARORSZÁG</span>
                </h3>
                <p className="text-sm text-gray-400">VEZETŐ FOGADÁSI ELEMZÉS MAGYARORSZÁGON</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fejlett algoritmusos elemzés Magyarország legjobb fogadóirodáiról. Részletes technikai elemzést, valós
              idejű adatellenőrzést és szakértői ajánlásokat nyújtunk fogadási élményének maximalizálásához.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <div
                className="flex items-center gap-2 bg-white/5 p-2 border"
                style={{ borderColor: "rgba(255, 215, 0, 0.2)" }}
              >
                <Users className="w-4 h-4" style={{ color: "#FFD700" }} />
                <span>50.000+ ELLENŐRZÖTT FELHASZNÁLÓ</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 border border-[#D62718]/20">
                <Award className="w-4 h-4" style={{ color: "#D62718" }} />
                <span>TANÚSÍTOTT SZAKÉRTŐ</span>
              </div>
            </div>
          </div>

          {/* Trust & Safety */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: "#D62718" }}>
              <Shield className="w-5 h-5" />
              BIZTONSÁGI PROTOKOLLOK
            </h4>
            <div className="space-y-4">
              <div
                className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 border"
                style={{ borderColor: "rgba(255, 215, 0, 0.2)" }}
              >
                <Shield className="w-4 h-4" style={{ color: "#FFD700" }} />
                <span className="text-sm">ENGEDÉLYEZETT ÉS SZABÁLYOZOTT</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 border border-[#D62718]/20">
                <Clock className="w-4 h-4" style={{ color: "#D62718" }} />
                <span className="text-sm">BIZTONSÁGOS ÉS ELLENŐRZÖTT</span>
              </div>
              <div
                className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 border"
                style={{ borderColor: "rgba(255, 215, 0, 0.2)" }}
              >
                <Award className="w-4 h-4" style={{ color: "#FFD700" }} />
                <span className="text-sm">SZAKÉRTŐK ÁLTAL ELLENŐRZÖTT</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 border border-[#D62718]/20">
                <Zap className="w-4 h-4" style={{ color: "#D62718" }} />
                <span className="text-sm">VALÓS IDEJŰ FRISSÍTÉSEK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-yellow-400/30 pt-12 mb-12">
          <h4 className="text-xl font-bold mb-8 text-center text-yellow-400">FELELŐS SZERENCSEJÁTÉK PARTNEREK</h4>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 border border-yellow-400/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 border border-yellow-400/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 pt-8 text-center border-[#D62718]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-gray-400 text-sm">© 2026 LEGJOBBFOGADÓIRODÁK.HU | MINDEN JOG FENNTARTVA</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>KÉSZÜLT MAGYARORSZÁGON</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-black bg-[#D62718]"></div>
                <div className="w-4 h-3 bg-white border border-black"></div>
                <div className="w-4 h-3 border border-black bg-[#477050]"></div>
              </div>
            </div>
          </div>
          <div className="border-2 p-6 relative bg-[#D62718]/10" style={{ borderColor: "#D62718" }}>
            <div className="absolute top-0 left-0 w-3 h-3 bg-[#D62718]"></div>
            <div className="absolute top-0 right-0 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>
            <div className="absolute bottom-0 left-0 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D62718]"></div>

            <p className="font-bold text-sm mb-2" style={{ color: "#D62718" }}>
              🔞 18+ | CSAK MAGYAR JÁTÉKOSOK | A SZERENCSEJÁTÉK FÜGGŐSÉGET OKOZHAT — JÁTSSZ FELELŐSSÉGGEL
            </p>
            <p className="text-xs" style={{ color: "#D62718" }}>
              HA ÖNNEK VAGY VALAKINEK, AKIT ISMER, PROBLÉMÁJA VAN A SZERENCSEJÁTÉKKAL, KÉRJEN SEGÍTSÉGET.
              <Link href="/responsible-gaming" className="underline hover:text-white ml-2">
                SEGÍTSÉG KÉRÉSE
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
