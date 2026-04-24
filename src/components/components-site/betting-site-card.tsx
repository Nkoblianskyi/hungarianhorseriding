"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "./types"

interface SiteCardProps {
  site: BettingSite
  rank: number
  isGoldenHighlight?: boolean
}

// Component for rendering stars with partial fill
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

export function BettingSiteCard({ site, rank, isGoldenHighlight = false }: SiteCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "Legjobb bukméker"
      case 2:
        return "EXKLUZÍV"
      case 3:
        return "TREND"
      default:
        return "ELLENŐRIZVE"
    }
  }

  const isFirstPlace = rank === 1

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block relative overflow-hidden cursor-pointer mb-2 mx-4 ${
          isFirstPlace ? "border-4" : "border border-gray-300"
        } bg-white rounded-lg shadow-lg`}
        style={{
          ...(isFirstPlace
            ? {
                border: "4px solid #FFD700",
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              }
            : {}),
        }}
      >
        <Link href={site.url} target="_blank" rel="noopener referrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 bg-white relative">
            {/* PLATFORM - 22% */}
            <div className="flex-[0_0_22%] pr-3 flex justify-center items-center h-full relative z-10">
              <div className="bg-black border-2 border-black p-3 shadow-md relative mt-4">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-32 h-14 object-contain" />
                <div className="absolute -top-1 -left-1 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>
                <div className="absolute -top-1 -right-1 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>
              </div>
            </div>

            {/* Rank and Status Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              {rank <= 3 && (
                <div
                  className="px-3 py-1 font-bold !text-black whitespace-nowrap uppercase"
                  style={{ backgroundColor: "#FFD700", fontSize: "14px" }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* WELCOME PACKAGE - 30% */}
            <div className="flex-[0_0_30%] px-4 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-gray-600 uppercase font-bold mb-1" style={{ fontSize: "12px" }}>
                ÜDVÖZLŐ BÓNUSZ
              </div>
              <div className="font-bold text-black mb-1" style={{ fontSize: "22px" }}>
                {site.bonus}
              </div>
              <div className="font-bold text-black" style={{ fontSize: "16px" }}>
                {site.dopbonus}
              </div>
            </div>

            {/* RATING - 10% */}
            <div className="flex-[0_0_10%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-4xl font-bold leading-none mb-1" style={{ color: "#000000" }}>
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold text-gray-600">PONTSZÁM</div>
            </div>

            {/* USER SCORE - 18% */}
            <div className="flex-[0_0_18%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-gray-600 mb-2">({formatVotes(site.reviewCount)} ÉRTÉKELÉS)</div>
              <div className="flex justify-center mb-2">
                <StarRating rating={site.rating / 2} className="w-4 h-4" />
              </div>
              <div className="text-sm text-black font-bold">KIVÁLÓ</div>
            </div>

            {/* ACCESS - 20% */}
            <div className="flex-[0_0_20%] pl-2 pr-4 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 w-full h-12 mb-2 text-sm font-bold shadow-lg whitespace-nowrap">
                  BÓNUSZ MEGSZERZÉSE
                </Button>
                <div className="text-xs text-gray-600 font-bold break-words">
                  LÁTOGASD MEG {site.name.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-6 pb-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">18+ | Felelős szerencsejáték</p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={`pr-2 hidden md:block lg:hidden relative overflow-hidden cursor-pointer mb-2 mx-4 ${
          isFirstPlace ? "border-4" : "border border-gray-300"
        } bg-white rounded-lg shadow-lg`}
        style={{
          ...(isFirstPlace
            ? {
                border: "4px solid #FFD700",
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              }
            : {}),
        }}
      >
        <Link href={site.url} target="_blank" rel="noopener referrer" className="block">
          <div className="pt-6 pb-4 bg-white relative">
            <div className="absolute top-0 left-0 flex z-30" style={{ margin: 0, padding: 0 }}>
              {rank <= 3 && (
                <div
                  className="px-2 py-0.5 font-bold !text-black whitespace-nowrap uppercase"
                  style={{ backgroundColor: "#FFD700", margin: 0, fontSize: "13px" }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              {/* PLATFORM - 3 колонки */}
              <div className="col-span-3 flex justify-center p-2">
                <div className="bg-black border-2 border-black p-2 shadow-sm w-full max-w-[120px] relative">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                  <div className="absolute -top-1 -left-1 w-1 h-1" style={{ backgroundColor: "#FFD700" }}></div>
                  <div className="absolute -top-1 -right-1 w-1 h-1" style={{ backgroundColor: "#FFD700" }}></div>
                </div>
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-gray-600 uppercase font-bold mb-1" style={{ fontSize: "11px" }}>
                  ÜDVÖZLŐ BÓNUSZ
                </div>
                <div className="font-bold text-black mb-1" style={{ fontSize: "17px" }}>
                  {site.bonus}
                </div>
                <div className="font-bold text-black" style={{ fontSize: "13px" }}>
                  {site.dopbonus}
                </div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xl font-bold leading-none" style={{ color: "#000000" }}>
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold text-gray-600">PONTSZÁM</div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs text-gray-600 mb-1">({formatVotes(site.reviewCount)})</div>
                <div className="flex justify-center mb-1">
                  <StarRating rating={site.rating / 2} className="w-3 h-3" />
                </div>
              </div>

              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-1 py-1 text-[10px] w-full font-bold shadow-lg leading-tight">
                  BÓNUSZ MEGSZERZÉSE
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div
        className={`md:hidden relative overflow-hidden cursor-pointer mb-1 mx-2 ${
          isFirstPlace ? "border-4" : "border border-gray-300"
        } bg-white rounded-lg shadow-lg`}
        style={{
          ...(isFirstPlace
            ? {
                border: "4px solid #FFD700",
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
              }
            : {}),
        }}
      >
        <Link href={site.url} target="_blank" rel="noopener referrer" className="block">
          {/* Main Content */}
          <div className="p-2 relative bg-white">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              {rank <= 3 && (
                <div
                  className="px-3 py-1 font-bold !text-black whitespace-nowrap uppercase"
                  style={{ backgroundColor: "#FFD700", fontSize: "13px" }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* Content Grid */}
            <div className="flex gap-2 items-center mt-5 relative z-10">
              {/* Logo Column - 45% */}
              <div className="flex justify-center items-center" style={{ width: "45%" }}>
                <div className="bg-black border-2 border-black p-2 shadow-sm relative w-full">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="w-full h-16 object-contain"
                    style={{ maxHeight: "64px" }}
                  />
                  <div className="absolute -top-1 -left-1 w-1 h-1" style={{ backgroundColor: "#FFD700" }}></div>
                  <div className="absolute -bottom-1 -right-1 w-1 h-1" style={{ backgroundColor: "#FFD700" }}></div>
                </div>
              </div>

              {/* Bonus Column - 55% */}
              <div className="text-center" style={{ width: "55%" }}>
                <div className="text-gray-600 uppercase font-bold mb-1" style={{ fontSize: "11px" }}>
                  ÜDVÖZLŐ BÓNUSZ
                </div>
                <div className="font-bold text-black leading-tight mb-1" style={{ fontSize: "20px" }}>
                  {site.bonus}
                </div>
                <div className="font-bold text-black leading-tight" style={{ fontSize: "16px" }}>
                  {site.dopbonus}
                </div>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 border-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-xl font-bold leading-none mb-1 mt-1.5" style={{ color: "#000000" }}>
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-[8px] text-gray-600 font-bold">PONTSZÁM</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mt-2 mb-1">
                  <StarRating rating={site.rating / 2} className="w-4 h-4" />
                </div>
                <div className="text-[10px] text-gray-600 font-bold">({formatVotes(site.reviewCount)})</div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-4 py-2 text-[10px] w-full font-bold shadow-lg">
                  BÓNUSZ MEGSZERZÉSE
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
