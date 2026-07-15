"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Footer } from "@/components/store/footer"
import { Header } from "@/components/store/header"
import { ProductCard } from "@/components/store/product-card"
import { buttonVariants } from "@/components/ui/button"
import { products } from "@/lib/products"
import { useShop } from "@/components/store/shop-provider"

export default function WishlistPage(){ const {wishlist}=useShop(); const saved=products.filter(p=>wishlist.includes(p.id)); return <><Header/><main className="section-shell min-h-[65vh] py-12 md:py-16"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Saved for later</p><h1 className="font-serif text-5xl md:text-7xl">Wishlist.</h1>{saved.length?<div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5">{saved.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="flex min-h-96 flex-col items-center justify-center text-center"><Heart className="mb-5 size-8"/><h2 className="font-serif text-3xl">Nothing saved yet.</h2><p className="mt-2 text-sm text-muted-foreground">Keep a personal edit of pieces you love.</p><Link className={buttonVariants({className:"mt-6"})} href="/shop">Discover products</Link></div>}</main><Footer/></> }
