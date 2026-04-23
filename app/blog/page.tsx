import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogData } from '@/lib/data'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Blog és Cikkek | Hungarian Horse Riding',
  description: 'Cikkek és írások a magyar lovas sportról, a lovaglás technikájáról, a ló és lovas kapcsolatáról.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Cikkek és Írások"
        image="/images/section-blog.jpg"
        imageAlt="Ló a réteken, arany fényben"
        subtitle="Részletes cikkek és elemzések a lovaglás minden aspektusáról."
      />

      {/* Featured article */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <p className="section-label mb-10 text-accent">Kiemelt cikk</p>
        <Link href={`/blog/${blogData[0].slug}`} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="block w-12 h-px bg-accent mb-8 group-hover:w-20 transition-all duration-300" />
              <h2 className="font-serif text-4xl lg:text-6xl font-light leading-tight text-balance mb-6 group-hover:text-primary transition-colors duration-300">
                {blogData[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
                {blogData[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-accent">
                Tovább olvasom
                <span className="block w-6 h-px bg-accent group-hover:w-10 transition-all duration-300" />
              </span>
            </div>
            <div className="lg:col-span-5">
              {blogData[0].image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={blogData[0].image}
                    alt={blogData[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 41vw"
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
      </section>

      {/* All articles */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <p className="section-label mb-10 text-muted-foreground">Összes cikk</p>
          <div className="space-y-0">
            {blogData.slice(1).map((article, i) => (
              <article key={article.slug} className="border-b border-border group">
                <Link href={`/blog/${article.slug}`} className="block py-10 lg:py-14">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="section-label text-border group-hover:text-accent transition-colors duration-300">
                        {`0${i + 2}`}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-5">
                      <h2 className="font-serif text-2xl lg:text-3xl font-light leading-tight group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h2>
                    </div>

                    {/* Excerpt */}
                    <div className="lg:col-span-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="lg:col-span-1 flex lg:justify-end items-start pt-1">
                      <span className="block w-5 h-px bg-border group-hover:bg-accent group-hover:w-8 transition-all duration-300 mt-2" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
