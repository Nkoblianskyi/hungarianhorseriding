import Image from 'next/image'

interface PageHeroProps {
  label: string
  title: string
  image: string
  imageAlt: string
  subtitle?: string
  date?: React.ReactNode
}

export function PageHero({ label, title, image, imageAlt, subtitle, date }: PageHeroProps) {
  return (
    <div className="relative h-[70vh] min-h-[480px] max-h-[680px] flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlay: dark top for navbar readability, strong bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1480px] mx-auto w-full px-6 lg:px-16 pb-14 lg:pb-20">
        {/* Label */}
        <p className="text-[--accent] text-[9px] tracking-[0.38em] uppercase font-sans font-semibold mb-5">
          {label}
        </p>

        {/* Thin gold line */}
        <span className="block w-8 h-px bg-[--accent] mb-7" aria-hidden="true" />

        {/* Title */}
        <h1 className="font-serif font-light text-white text-balance leading-[1.04] text-[40px] md:text-[58px] lg:text-[72px]">
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p className="text-white/85 font-sans font-light text-[14px] leading-relaxed mt-5 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            {subtitle}
          </p>
        )}

        {/* Optional date */}
        {date && (
          <p className="text-white/40 text-[11px] font-sans mt-5 tracking-wide">
            {date}
          </p>
        )}
      </div>

      {/* Bottom thin gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[--accent] opacity-25" aria-hidden="true" />
    </div>
  )
}
