import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { disciplinesData } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return disciplinesData.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const discipline = disciplinesData.find((d) => d.slug === slug)
  if (!discipline) return {}
  return {
    title: `${discipline.title} | Hungarian Horse Riding`,
    description: discipline.excerpt,
  }
}

export default async function DisciplineDetailPage({ params }: Props) {
  const { slug } = await params
  const discipline = disciplinesData.find((d) => d.slug === slug)
  if (!discipline) notFound()

  const currentIndex = disciplinesData.findIndex((d) => d.slug === slug)
  const prev = currentIndex > 0 ? disciplinesData[currentIndex - 1] : null
  const next = currentIndex < disciplinesData.length - 1 ? disciplinesData[currentIndex + 1] : null

  return (
    <>
      {/* Header */}
      <div className="relative h-72 lg:h-[420px] flex items-end">
        <div className="absolute inset-0">
          {discipline.image && (
            <Image
              src={discipline.image}
              alt={discipline.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/35 to-charcoal/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
          <Link
            href="/szabalyok"
            className="inline-flex items-center gap-3 text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-200 mb-6 group"
          >
            <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
            Diszciplínák
          </Link>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-white text-balance">
            {discipline.title}
          </h1>
        </div>
      </div>

      {/* Excerpt */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-3xl">
          <span className="gold-line" />
          <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            {discipline.excerpt}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="space-y-0">
          {discipline.sections.map((section, i) => (
            <article
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 lg:py-18 border-t border-border"
            >
              <div className="lg:col-span-4">
                <span className="section-label text-accent">{`0${i + 1}`}</span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-serif text-2xl lg:text-3xl font-light mb-6 leading-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Prev / Next navigation */}
      <nav
        className="border-t border-border bg-secondary"
        aria-label="Diszciplína navigáció"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row justify-between gap-6">
          {prev ? (
            <Link
              href={`/szabalyok/${prev.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="section-label text-muted-foreground group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
                Előző
              </span>
              <span className="font-serif text-xl font-light group-hover:text-primary transition-colors duration-200">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/szabalyok/${next.slug}`}
              className="group flex flex-col gap-1 sm:text-right"
            >
              <span className="section-label text-muted-foreground group-hover:text-accent transition-colors duration-200 flex items-center gap-2 sm:justify-end">
                Következő
                <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
              </span>
              <span className="font-serif text-xl font-light group-hover:text-primary transition-colors duration-200">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}
