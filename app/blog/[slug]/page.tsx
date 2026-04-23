import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogData } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogData.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = blogData.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | Hungarian Horse Riding`,
    description: article.excerpt,
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = blogData.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = blogData.findIndex((a) => a.slug === slug)
  const prev = currentIndex > 0 ? blogData[currentIndex - 1] : null
  const next = currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null

  return (
    <>
      {/* Header */}
      <div className="relative h-72 lg:h-[480px] flex items-end">
        <div className="absolute inset-0">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-200 mb-6 group"
          >
            <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
            Blog
          </Link>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-white text-balance max-w-4xl leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Excerpt / Lead */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-3xl">
          <span className="gold-line" />
          <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="space-y-0">
          {article.sections.map((section, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 border-t border-border"
            >
              <div className="lg:col-span-4">
                <h2 className="font-serif text-xl lg:text-2xl font-light leading-tight text-foreground/80">
                  {section.heading}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-5">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Prev / Next */}
      <nav
        className="border-t border-border bg-secondary"
        aria-label="Cikk navigáció"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row justify-between gap-6">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="section-label text-muted-foreground group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
                Előző cikk
              </span>
              <span className="font-serif text-xl font-light group-hover:text-primary transition-colors duration-200 max-w-xs">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className="group flex flex-col gap-1 sm:text-right">
              <span className="section-label text-muted-foreground group-hover:text-accent transition-colors duration-200 flex items-center gap-2 sm:justify-end">
                Következő cikk
                <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
              </span>
              <span className="font-serif text-xl font-light group-hover:text-primary transition-colors duration-200 max-w-xs sm:ml-auto">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>

      {/* Back to blog */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          Vissza a blogra
        </Link>
      </div>
    </>
  )
}
