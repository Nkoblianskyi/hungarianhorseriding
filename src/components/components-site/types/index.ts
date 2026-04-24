export interface BettingSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  description?: string
  features?: string[]
  terms?: string
  userRating?: number
  backgroundImage?: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

export interface HorizontalBanner {
  id: number
  name: string
  logo: string
  bonus: string
  welcomeOffer: string
  link: string
  backgroundImage: string
}
