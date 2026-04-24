"use client"

import { useEffect, useMemo, useState } from "react"
import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "./data/mock-data"
import type { BettingSite } from "./types"

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function BettingSitesList() {
  const ratingsByRank = useMemo(
    () => [...bettingSites].sort((a, b) => b.rating - a.rating).map((s) => s.rating),
    [],
  )

  const [sitesInOrder, setSitesInOrder] = useState<BettingSite[]>(() => [...bettingSites])

  useEffect(() => {
    setSitesInOrder(shuffleArray(bettingSites))
  }, [])

  return (
    <div className="space-y-1 w-full max-w-[1280px] mx-auto">
      {sitesInOrder.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <BettingSiteCard
            site={site}
            rank={index + 1}
            displayRating={ratingsByRank[index]}
            isGoldenHighlight={index === 0}
          />
        </div>
      ))}
    </div>
  )
}
