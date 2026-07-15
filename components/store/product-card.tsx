"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useShop } from "@/components/store/shop-provider"
import { formatPrice, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

export function ProductCard({ product }: { product: Product }) {
  const { wishlist, toggleWishlist } = useShop()
  const saved = wishlist.includes(product.id)
  return <article className="group min-w-0">
    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
      <Link href={`/product/${product.slug}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></Link>
      {product.badge && <Badge className="absolute left-3 top-3" variant="secondary">{product.badge}</Badge>}
      <Button onClick={() => toggleWishlist(product.id)} className="absolute right-2 top-2 rounded-full bg-background/85" variant="ghost" size="icon" aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}><Heart className={cn(saved && "fill-current")} /></Button>
    </div>
    <div className="flex items-start justify-between gap-3 pt-4"><div className="min-w-0"><Link href={`/product/${product.slug}`} className="font-medium leading-tight hover:underline">{product.name}</Link><p className="mt-1 text-sm text-muted-foreground">{product.category}</p></div><p className="shrink-0 text-sm font-medium">{formatPrice(product.price)}</p></div>
  </article>
}
