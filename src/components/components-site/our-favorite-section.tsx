"use client"

import { Award } from "lucide-react"
import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "./data/mock-data"

export function OurFavoriteSection() {
  const favoriteSite = bettingSites[0]

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div
          className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 relative"
          style={{ borderColor: "#FFD700" }}
        >
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3" style={{ backgroundColor: "#D62718" }}></div>
          <div className="absolute -top-1 -right-1 w-3 h-3" style={{ backgroundColor: "#D62718" }}></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <Award className="w-6 h-6" style={{ color: "#D62718" }} />
            <h2 className="text-2xl lg:text-3xl font-bold text-black">
              A MI <span style={{ color: "#D62718" }}>VÁLASZTÁSUNK</span>
            </h2>
            <Award className="w-6 h-6" style={{ color: "#D62718" }} />
          </div>
          <p className="text-gray-700">Szerkesztői értékelés alapos elemzés és felhasználói élmény alapján</p>
        </div>
      </div>

      <BettingSiteCard site={favoriteSite} rank={1} isGoldenHighlight={true} />
    </div>
  )
}
