'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/tortenet', label: 'Történet' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const floating = !scrolled && !isOpen
  /** Keep logo + burger light when hero is visible or mobile menu is open (solid panel below). */
  const lightBrand = floating || isOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isOpen &&
            'max-lg:bg-[var(--green-deep)] max-lg:backdrop-blur-md max-lg:border-b max-lg:border-white/15',
          !isOpen &&
            (floating
              ? 'bg-transparent border-b border-transparent'
              : 'bg-[--cream]/96 backdrop-blur-sm border-b border-[--border]')
        )}
      >
        <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-[72px] lg:h-[84px]">

            {/* Logo wordmark */}
            <Link
              href="/"
              aria-label="Hungarian Horse Riding — Főoldal"
              className="flex flex-col items-center gap-0 shrink-0 select-none group"
            >
              {/* Top micro-label */}
              <span
                className={cn(
                  'font-sans text-[7px] lg:text-[7.5px] tracking-[0.55em] uppercase font-medium leading-none mb-[5px] transition-colors duration-400',
                  lightBrand ? 'text-white/50' : 'text-[--green-deep]/45'
                )}
              >
                Hungarian
              </span>

              {/* Gold divider line with diamond center */}
              <span className="relative flex items-center w-full mb-[5px]" aria-hidden="true">
                <span className={cn('flex-1 h-px transition-colors duration-400', lightBrand ? 'bg-white/30' : 'bg-[--green-deep]/20')} />
                <span className="mx-[5px] w-[4px] h-[4px] rotate-45 bg-[--accent] flex-shrink-0" />
                <span className={cn('flex-1 h-px transition-colors duration-400', lightBrand ? 'bg-white/30' : 'bg-[--green-deep]/20')} />
              </span>

              {/* Main wordmark — serif, large, elegant */}
              <span
                className={cn(
                  'font-serif font-light tracking-[0.18em] leading-none transition-colors duration-400',
                  'text-[18px] lg:text-[22px]',
                  lightBrand ? 'text-white' : 'text-[--green-deep]'
                )}
              >
                Horse Riding
              </span>

              {/* Bottom gold rule */}
              <span
                className="mt-[6px] block h-px bg-[--accent] w-8 group-hover:w-full transition-all duration-500"
                aria-hidden="true"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9" aria-label="Főmenü">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-[10px] tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-200 py-1',
                    'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[--accent]',
                    'after:transition-all after:duration-300',
                    pathname === link.href
                      ? cn('after:w-full', lightBrand ? 'text-white' : 'text-[--foreground]')
                      : cn(
                          'after:w-0 hover:after:w-full',
                          lightBrand
                            ? 'text-white/55 hover:text-white'
                            : 'text-[--muted-foreground] hover:text-[--foreground]'
                        )
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9',
                lightBrand ? 'text-white' : 'text-[--foreground]'
              )}
              aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
              aria-expanded={isOpen}
            >
              <span className={cn('block h-px bg-current transition-all duration-300 origin-center', isOpen ? 'w-5 rotate-45 translate-y-[9px]' : 'w-5')} />
              <span className={cn('block h-px bg-current transition-all duration-300', isOpen ? 'w-5 opacity-0' : 'w-4 ml-1')} />
              <span className={cn('block h-px bg-current transition-all duration-300 origin-center', isOpen ? 'w-5 -rotate-45 -translate-y-[9px]' : 'w-5')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay — solid scrim so page hero never shows through */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden flex flex-col justify-end pb-16 px-6 sm:px-8 transition-opacity duration-500',
          'bg-[var(--green-deep)]',
          'bg-gradient-to-b from-black/50 via-[var(--green-deep)] to-[var(--green-deep)]',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!isOpen}
      >
        <nav
          className="relative z-[1] flex flex-col gap-0 overflow-y-auto max-h-[min(72vh,calc(100vh-8rem))] rounded-sm border border-white/10 bg-black/25 px-4 py-5 backdrop-blur-md supports-[backdrop-filter]:bg-black/20"
          aria-label="Mobilmenü"
        >
          {[{ href: '/', label: 'Főoldal' }, ...navLinks].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-serif text-[clamp(1.75rem,8vw,2.375rem)] font-light py-3.5 border-b border-white/10 text-white transition-colors duration-200 last:border-b-0',
                'hover:text-white',
                pathname === link.href &&
                  'text-white bg-white/10 ring-1 ring-[var(--accent)]/40 -mx-1 px-4 rounded-[2px]'
              )}
              style={{ transitionDelay: isOpen ? `${i * 45}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
