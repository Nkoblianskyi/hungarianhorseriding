'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function RolunkPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [showPopup, setShowPopup] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (!name) errs.name = 'A név megadása kötelező.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Érvényes e-mail cím szükséges.'
    if (!message || message.length < 10) errs.message = 'Az üzenet legalább 10 karakter legyen.'
    if (!agreed) errs.agreed = 'Az adatkezelési tájékoztató elfogadása kötelező.'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setFormState('loading')

    // Simulate sending — replace with real API call
    await new Promise((r) => setTimeout(r, 1200))
    setFormState('success')
    setShowPopup(true)
    ;(e.target as HTMLFormElement).reset()
    setAgreed(false)
  }

  return (
    <>
      <PageHero
        label="Rólunk"
        title="Kik Vagyunk"
        image="/images/about.jpg"
        imageAlt="Ló a magyar réten"
        subtitle="A Hungarian Horse Riding weboldal célja, hogy hiteles információt nyújtson a magyarországi lovas sport minden területéről."
      />

      {/* About content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <p className="section-label mb-6">Küldetésünk</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance">
              A magyar lovaglás hiteles forrása
            </h2>
          </div>
          <div>
            <span className="gold-line" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              A Hungarian Horse Riding weboldal célja, hogy megbízható, átfogó és közérthető információt nyújtson a magyarországi lovas sport minden területéről. Az oldalt a lovaglás iránt szenvedélyesen elkötelezett személyek hozták létre, abból a meggyőződésből kiindulva, hogy a lovas hagyományok megőrzése és terjesztése közös felelősségünk.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Tartalmainkat szakmai alapossággal, de közérthető nyelven fogalmazzuk meg, hogy mind a kezdők, mind a tapasztalt lovasok haszonnal forgathassák az oldalunkat. A fókuszban mindig a hiteles, elfogulatlan, általános érvényű tájékoztatás áll.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nem képviselünk egyetlen szervezetet, intézményt vagy kereskedelmi szereplőt sem. Célunk a tudás terjesztése és a közösség építése a lovas sport iránt érdeklődők számára.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <p className="section-label mb-10 text-accent">Értékeink</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                title: 'Hitelesség',
                text: 'Kizárólag általánosan érvényes, ellenőrzött információt közlünk. Nem népszerűsítünk márkákat, szervezeteket vagy személyeket.',
              },
              {
                title: 'Hagyománytisztelet',
                text: 'A magyar lovas kultúra értékeit és a csikóshagyományokat kiemelt figyelemmel tárgyaljuk, mert ezek az identitásunk részei.',
              },
              {
                title: 'Elérhetőség',
                text: 'A lovaglást mindenki számára közelebb szeretnénk hozni. Tartalmainkat a kezdőktől a haladókig mindenki megértheti.',
              },
            ].map((v, i) => (
              <div
                key={i}
                className={`py-10 pr-0 border-t border-border ${
                  i > 0 ? 'md:border-l md:pl-10' : ''
                } ${i < 2 ? 'md:pr-10' : ''}`}
              >
                <span className="section-label text-accent mb-4 block">{`0${i + 1}`}</span>
                <h3 className="font-serif text-2xl font-light mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left */}
          <div>
            <p className="section-label mb-6 text-accent">Kapcsolat</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance mb-6">
              Írjon nekünk
            </h2>
            <span className="gold-line" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kérdése, észrevétele vagy javaslata van? Szívesen vesszük üzenetét. Minden megkeresésre válaszolunk.
            </p>
            <a
              href="mailto:info@hungarianhorseriding.com"
              className="text-sm font-sans text-foreground hover:text-accent transition-colors duration-200"
            >
              info@hungarianhorseriding.com
            </a>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="section-label mb-2 block">
                  Teljes név
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={cn(
                    'w-full bg-transparent border-b py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200',
                    errors.name ? 'border-destructive' : 'border-border focus:border-foreground'
                  )}
                  placeholder="Az Ön neve"
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1 font-sans">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="section-label mb-2 block">
                  E-mail cím
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={cn(
                    'w-full bg-transparent border-b py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200',
                    errors.email ? 'border-destructive' : 'border-border focus:border-foreground'
                  )}
                  placeholder="pelda@domain.hu"
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1 font-sans">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="section-label mb-2 block">
                  Tárgy
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full bg-transparent border-b border-border focus:border-foreground py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200"
                  placeholder="Üzenet témája"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="section-label mb-2 block">
                  Üzenet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={cn(
                    'w-full bg-transparent border-b py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200 resize-none',
                    errors.message ? 'border-destructive' : 'border-border focus:border-foreground'
                  )}
                  placeholder="Írja ide üzenetét..."
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1 font-sans">{errors.message}</p>
                )}
              </div>

              {/* Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <span className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="sr-only peer"
                    />
                    <span
                      className={cn(
                        'block w-4 h-4 border transition-colors duration-200',
                        agreed ? 'bg-primary border-primary' : 'border-border bg-transparent',
                        errors.agreed ? 'border-destructive' : ''
                      )}
                    >
                      {agreed && (
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="w-full h-full p-0.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary-foreground"
                          />
                        </svg>
                      )}
                    </span>
                  </span>
                  <span className="text-xs font-sans text-muted-foreground leading-relaxed">
                    Elolvastam és elfogadom az{' '}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-2 hover:text-foreground transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      adatvédelmi tájékoztatót
                    </a>
                    , és hozzájárulok adataim kezeléséhez.
                  </span>
                </label>
                {errors.agreed && (
                  <p className="text-destructive text-xs mt-1 font-sans ml-7">{errors.agreed}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={cn(
                    'inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase font-sans font-medium px-8 py-4 transition-all duration-200',
                    formState === 'loading'
                      ? 'bg-primary/60 text-primary-foreground cursor-not-allowed'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  )}
                >
                  {formState === 'loading' ? 'Küldés...' : 'Üzenet küldése'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Üzenet elküldve"
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
        >
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <div className="relative bg-background border border-border max-w-md w-full p-10 lg:p-12">
            <span className="block w-10 h-px bg-accent mb-8" />
            <h2 className="font-serif text-3xl font-light mb-4 leading-tight">
              Köszönjük üzenetét
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Megkeresését megkaptuk. Hamarosan válaszolunk az Ön által megadott e-mail címre.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="text-[11px] tracking-[0.18em] uppercase font-sans font-medium text-foreground border border-border hover:border-foreground px-6 py-3 transition-colors duration-200"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </>
  )
}
