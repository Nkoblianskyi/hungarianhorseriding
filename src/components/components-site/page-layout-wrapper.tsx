"use client"

import type React from "react"
import { MainSiteFooter } from "./main-site-footer"
import { MainSiteHeader } from "./main-site-header"

interface PageLayoutWrapperProps {
  children: React.ReactNode
}

export function PageLayoutWrapper({ children }: PageLayoutWrapperProps) {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/bg-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-10">
        <MainSiteHeader />
        <div>{children}</div>
        <MainSiteFooter />
      </div>
    </div>
  )
}
