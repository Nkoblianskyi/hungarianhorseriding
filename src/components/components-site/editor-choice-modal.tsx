"use client"

import { useState, useEffect } from "react"
import { X, Star, Award } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Script from "next/script"
import type { BettingSite } from "./types"

interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

// Щоб TS не скаржився на глобальне оновлення параметрів
declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

const StarRating = ({
  rating,
  maxStars = 5,
  className = "",
}: { rating: number; maxStars?: number; className?: string }) => {
  const stars = []

  for (let i = 1; i <= maxStars; i++) {
    // Розраховуємо відсоток заповнення для кожної зірки
    const fillPercentage = Math.max(0, Math.min(100, (rating - (i - 1)) * 100))

    stars.push(
      <div key={i} className={`relative inline-block ${className}`} style={{ flexShrink: 0 }}>
        {/* Порожня зірка (сірий фон) */}
        <Star className="w-full h-full text-gray-300 fill-gray-300" />
        {/* Заповнена частина (золота) */}
        {fillPercentage > 0 && (
          <div className="absolute top-0 left-0 overflow-hidden h-full" style={{ width: `${fillPercentage}%` }}>
            <Star
              className="w-full h-full"
              style={{
                color: "#FFD700",
                fill: "#FFD700",
                width: `${100 / (fillPercentage / 100)}%`,
              }}
            />
          </div>
        )}
      </div>,
    )
  }

  return (
    <div className="flex gap-1" style={{ display: "flex", alignItems: "center" }}>
      {stars}
    </div>
  )
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Показувати модалку через 8 секунд після завантаження
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Викликаємо оновлення лінків при відкритті модалки
  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === "function") {
      window.updateLinkParams!()
    }
  }, [isOpen])

  if (!isOpen) return null

  // Беремо тільки перший сайт
  const topSite = bettingSites[0]

  if (!topSite) return null

  return (
    <>
      <Script src="/link-handler.js" strategy="beforeInteractive" />
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 w-10 h-10 p-0 bg-black/70 border-2 rounded-full"
          style={{ borderColor: "#FFD700", boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)" }}
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center h-full">
          {/* Header Banner */}
          <div className="text-center mb-6 px-2 flex-shrink-0">
            <div className="relative inline-block">
              <div
                className="py-3 px-8 relative border-2 border-black font-bold"
                style={{ backgroundColor: "#FFD700", boxShadow: "0 6px 12px rgba(0,0,0,0.3)" }}
              >
                <div className="flex items-center gap-2 justify-center text-black">
                  <Award className="w-5 h-5" />
                  <span className="text-lg font-black tracking-wide">SZERKESZTŐI VÁLASZTÁS</span>
                  <Award className="w-5 h-5" />
                </div>
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-700"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-700"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Single Card - Vertical Layout */}
          <div
            className="overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col w-full max-w-md h-[460px] border-4 bg-white relative rounded-lg"
            style={{ borderColor: "#FFD700", boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" }}
          >
            {/* Logo section */}
            <div className="bg-black h-28 flex items-center justify-center p-4 border-b-2 border-black flex-shrink-0 relative">
              <img
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name || "Site"}
                className="h-24 w-auto object-contain"
              />
              {/* Corner flags */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-700"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-700"></div>
            </div>

            {/* Content */}
            <div className="bg-white text-black flex-1 flex flex-col p-4 text-center justify-between min-h-0 relative">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>
              <div className="absolute bottom-0 left-0 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>

              <div className="flex justify-center items-center gap-2 mb-2">
                <StarRating rating={topSite.rating / 2} className="w-5 h-5" />
                <span className="font-bold text-lg text-black">{topSite.rating.toFixed(1)}/10</span>
              </div>

              <div className="flex-1 flex flex-col justify-center mb-4">
                <div className="text-sm text-black font-medium mb-2">ÜDVÖZLŐ BÓNUSZ</div>
                <div className="text-3xl font-black text-black tracking-wider leading-tight mb-2">{topSite.bonus}</div>
                <div className="text-xl font-bold leading-tight text-black">{topSite.dopbonus}</div>
              </div>

              {/* CTA Button */}
              <div>
                <Link href={topSite.url || "#"} target="_blank" rel="noopener referrer">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-green-800 py-3 px-6 text-base w-full transition-all duration-300 hover:scale-105 shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    BÓNUSZ IGÉNYLÉSE
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 px-2 flex-shrink-0">
            <div
              className="bg-white/95 backdrop-blur-sm border-2 p-3 relative"
              style={{ borderColor: "#FFD700", boxShadow: "0 6px 12px rgba(0,0,0,0.3)" }}
            >
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-700"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-700"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>

              <p className="text-black text-xs font-bold mb-1">Csak 18+</p>
              <p className="text-gray-700 text-xs">Felelős játék | A szerencsejáték függőséget okozhat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
