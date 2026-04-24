"use client"

import type React from "react"
import { MainSiteFooter } from "./main-site-footer"
import { MainSiteHeader } from "./main-site-header"

interface PageLayoutWrapperProps {
  children: React.ReactNode
}

export function PageLayoutWrapper({ children }: PageLayoutWrapperProps) {
  return (
    <html lang="hu">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/images/bg-2.jpg)",
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
            <main>{children}</main>
            <MainSiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
