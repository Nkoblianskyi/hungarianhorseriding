import Link from 'next/link'

const mainLinks = [
  { href: '/tortenet', label: 'Történet' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

const legalLinks = [
  { href: '/cookie-policy', label: 'Cookie szabályzat' },
  { href: '/privacy-policy', label: 'Adatvédelmi tájékoztató' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="block text-[9px] tracking-[0.32em] uppercase text-accent font-sans font-medium mb-0.5">
                hungarian
              </span>
              <span className="block font-serif text-2xl font-bold tracking-wide text-primary-foreground">
                HORSE RIDING
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-sans font-light max-w-xs">
              A magyar lovas hagyományok és versenysport átfogó forrása.
            </p>
            <span className="gold-line mt-8" />
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label text-primary-foreground/40 mb-6">Navigáció</p>
            <nav className="flex flex-col gap-3" aria-label="Lábléc navigáció">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label text-primary-foreground/40 mb-6">Kapcsolat</p>
            <a
              href="mailto:info@hungarianhorseriding.com"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-sm font-sans"
            >
              info@hungarianhorseriding.com
            </a>
            <p className="text-primary-foreground/40 text-xs font-sans mt-4 leading-relaxed">
              hungarianhorseriding.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-primary-foreground/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Hungarian Horse Riding. Minden jog fenntartva.
          </p>
          <nav className="flex gap-6" aria-label="Jogi linkek">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/40 hover:text-primary-foreground/70 text-xs font-sans transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
