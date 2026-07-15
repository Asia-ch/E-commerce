export type Product = {
  id: string
  slug: string
  name: string
  category: "Women" | "Men" | "Footwear"
  price: number
  image: string
  alternateImage: string
  badge?: string
  description: string
  colors: string[]
  sizes: string[]
}

export const products: Product[] = [
  { id: "1", slug: "form-sculpt-jacket", name: "Form Sculpt Jacket", category: "Women", price: 248, image: "/images/category-women.png", alternateImage: "/images/hero-fashion.png", badge: "New", description: "A precise outer layer with sculptural volume, hidden closures, and a softly structured finish.", colors: ["Bone", "Black"], sizes: ["XS", "S", "M", "L"] },
  { id: "2", slug: "motion-bomber", name: "Motion Bomber", category: "Men", price: 220, image: "/images/category-men.png", alternateImage: "/images/hero-fashion.png", badge: "Bestseller", description: "A refined technical bomber designed with a relaxed shoulder, clean hardware, and all-season weight.", colors: ["Black", "Graphite"], sizes: ["S", "M", "L", "XL"] },
  { id: "3", slug: "axis-runner-01", name: "Axis Runner 01", category: "Footwear", price: 185, image: "/images/category-footwear.png", alternateImage: "/images/category-footwear.png", badge: "Limited", description: "A lightweight everyday runner balancing responsive cushioning with a pared-back architectural profile.", colors: ["Chalk", "Black"], sizes: ["6", "7", "8", "9", "10", "11"] },
  { id: "4", slug: "studio-trouser", name: "Studio Wide Trouser", category: "Women", price: 168, image: "/images/hero-fashion.png", alternateImage: "/images/category-women.png", description: "Fluid tailoring with a long, wide line and adjustable interior waist tabs.", colors: ["Black", "Stone"], sizes: ["XS", "S", "M", "L"] },
  { id: "5", slug: "field-overshirt", name: "Field Overshirt", category: "Men", price: 198, image: "/images/category-men.png", alternateImage: "/images/hero-fashion.png", description: "A modern utility layer cut from compact cotton twill with subtle storage and a clean collar.", colors: ["Ink", "Clay"], sizes: ["S", "M", "L", "XL"] },
  { id: "6", slug: "line-court", name: "Line Court", category: "Footwear", price: 155, image: "/images/category-footwear.png", alternateImage: "/images/category-footwear.png", description: "A low-profile court shoe in smooth leather with a flexible tonal sole.", colors: ["White", "Black"], sizes: ["6", "7", "8", "9", "10", "11"] },
  { id: "7", slug: "column-knit", name: "Column Knit Dress", category: "Women", price: 190, image: "/images/category-women.png", alternateImage: "/images/hero-fashion.png", badge: "New", description: "A compact rib knit with a clean column silhouette and precise neckline.", colors: ["Black", "Oat"], sizes: ["XS", "S", "M", "L"] },
  { id: "8", slug: "essential-hoodie", name: "Essential Heavy Hoodie", category: "Men", price: 140, image: "/images/hero-fashion.png", alternateImage: "/images/category-men.png", description: "Substantial brushed cotton, dropped shoulders, and a considered oversized fit.", colors: ["Black", "Heather"], sizes: ["S", "M", "L", "XL"] },
]

export const categories = [
  { name: "Women", image: "/images/category-women.png", copy: "Modern forms, considered movement." },
  { name: "Men", image: "/images/category-men.png", copy: "Utility refined for every day." },
  { name: "Footwear", image: "/images/category-footwear.png", copy: "Engineered from the ground up." },
]

export const formatPrice = (price: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price)

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
