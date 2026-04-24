"use client"

import { Award, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Január",
      "Február",
      "Március",
      "Április",
      "Május",
      "Június",
      "Július",
      "Augusztus",
      "Szeptember",
      "Október",
      "November",
      "December",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-6">
        <div className="bg-black/50 shadow-lg max-w-[1280px] mx-auto rounded-lg">
          <div className="relative px-8 py-8">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-3xl xl:text-4xl font-bold mb-3 leading-tight text-black uppercase">
                  Legjobb Fogadóirodák <span style={{ color: "#D62718" }}>Magyarországon</span> 2026
                </h1>

                <h2 className="text-lg xl:text-xl font-medium mb-4 text-black">Szakértői Elemzés és Összehasonlítás</h2>

                <div className="w-20 h-0.5 bg-[#D62718] mx-auto mb-4"></div>

                <p className="hidden lg:block text-base text-black max-w-3xl mx-auto leading-relaxed mb-4">
                  A megbízható fogadóirodák megtalálása szakértői tudást és alapos kutatást igényel. Szerencsére
                  részletes elemzésünk kiküszöböli a találgatásokat azzal, hogy pontos információkat nyújt Magyarország
                  legjobb fogadóirodáiról.
                </p>

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Image src="/flag.png" alt="Magyarország" width={24} height={24} className="w-6 h-6" />
                      <span className="text-sm font-bold tech-subheading">100% Legális</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Award className="w-4 h-4 text-black" />
                      <span className="text-sm font-bold tech-subheading">Magas Bónuszok</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <TrendingUp className="w-4 h-4 text-black" />
                      <span className="text-sm font-bold tech-subheading">Gyors Kifizetések</span>
                    </div>
                  </div>
                </div>

                {/* License Info */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-[#D62718] font-bold mt-2">Magyar hatóságok által engedélyezve</span>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-[#D62718] font-bold">Frissítve: {getCurrentMonthYear()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div
        className="lg:hidden mb-2 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-2.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        <div className="relative shadow-lg max-w-[1280px] mx-auto pt-10 md:pt-14">
          <div className="px-4 py-4 text-center">
            <h1 className="text-2x md:text-3xl font-bold mb-3 text-white uppercase">
              Legjobb Fogadóirodák <span style={{ color: "#D62718" }}>Magyarországon</span> 2026
            </h1>

            <div className="w-16 h-0.5 bg-[#D62718] mx-auto mb-4"></div>

            <p className="hidden lg:blocktext-sm md:text-xs text-white mb-4 leading-relaxed max-w-2xl mx-auto">
              A megbízható fogadóirodák megtalálása szakértői tudást és alapos kutatást igényel. Szerencsére részletes
              elemzésünk kiküszöböli a találgatásokat azzal, hogy pontos információkat nyújt Magyarország legjobb
              fogadóirodáiról.
            </p>
            {/* Trust Indicators */}
            <div className="mt-4">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-white px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/flag.png" alt="Magyarország" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Engedélyezett HU</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-white px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-white" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Legális</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-white px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Gyors Kifizetések</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-[#D62718] font-bold">Frissítve: {getCurrentMonthYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
