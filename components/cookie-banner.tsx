'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie hozzájárulás"
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border transition-transform duration-500',
        visible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs font-sans text-muted-foreground leading-relaxed max-w-2xl">
          Ez a weboldal sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében. A sütik kezeléséről részletes tájékoztatást az{' '}
          <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-foreground transition-colors duration-200">
            Cookie szabályzatban
          </Link>{' '}
          és az{' '}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground transition-colors duration-200">
            Adatvédelmi tájékoztatóban
          </Link>{' '}
          talál.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptNecessary}
            className="text-[11px] tracking-[0.12em] uppercase font-sans font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2 border border-border hover:border-foreground/30"
          >
            Csak szükséges
          </button>
          <button
            onClick={acceptAll}
            className="text-[11px] tracking-[0.12em] uppercase font-sans font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 px-6 py-2"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
