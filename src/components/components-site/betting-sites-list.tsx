"use client"

import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "./data/mock-data"
import type { BettingSite } from "./types"

export function BettingSitesList() {
  return (
    <div className="space-y-1 w-full max-w-[1280px] mx-auto">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <BettingSiteCard site={site} rank={index + 1} isGoldenHighlight={index === 0} />
        </div>
      ))}
    </div>
  )
}
