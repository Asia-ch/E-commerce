"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Heart, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useShop } from "@/components/store/shop-provider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatPrice, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

export function ProductDetail({ product }: { product: Product }) {
 const [size,setSize]=useState(product.sizes[0]); const [color,setColor]=useState(product.colors[0]); const [quantity,setQuantity]=useState(1); const [added,setAdded]=useState(false); const { addToCart, toggleWishlist, wishlist }=useShop(); const saved=wishlist.includes(product.id)
 const add=()=>{ for(let i=0;i<quantity;i++) addToCart(product,size,color); setAdded(true); setTimeout(()=>setAdded(false),1800) }
 return <div className="section-shell grid gap-8 py-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12 lg:py-10"><div className="grid gap-3 sm:grid-cols-2"><div className="relative aspect-[4/5] bg-muted"><Image src={product.image} alt={product.name} fill priority className="object-cover"/></div><div className="relative hidden aspect-[4/5] bg-muted sm:block"><Image src={product.alternateImage} alt={`${product.name} alternate view`} fill className="object-cover"/></div></div><div className="lg:sticky lg:top-28 lg:self-start"><Link className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground" href={`/shop?category=${product.category}`}>{product.category}</Link><h1 className="mt-3 font-serif text-5xl leading-none tracking-tight">{product.name}</h1><p className="mt-4 text-lg">{formatPrice(product.price)}</p><p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p><Separator className="my-7"/><Option label="Color" value={color} items={product.colors} onChange={setColor}/><Option label="Size" value={size} items={product.sizes} onChange={setSize}/><div className="mt-7 flex gap-2"><div className="flex h-11 items-center border"><Button variant="ghost" size="icon" onClick={()=>setQuantity(Math.max(1,quantity-1))} aria-label="Decrease quantity"><Minus/></Button><span className="w-8 text-center text-sm">{quantity}</span><Button variant="ghost" size="icon" onClick={()=>setQuantity(quantity+1)} aria-label="Increase quantity"><Plus/></Button></div><Button className="flex-1" size="lg" onClick={add}>{added ? <><Check data-icon="inline-start"/>Added</> : "Add to bag"}</Button><Button onClick={()=>toggleWishlist(product.id)} variant="outline" size="icon-lg" aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}><Heart className={cn(saved && "fill-current")}/></Button></div><div className="mt-8 flex flex-col gap-4 border-t pt-6 text-sm"><p><span className="font-semibold">Delivery:</span> Complimentary over $150. Dispatches in 1–2 days.</p><p><span className="font-semibold">Returns:</span> Free returns within 30 days.</p></div></div></div>
}
function Option({label,value,items,onChange}:{label:string;value:string;items:string[];onChange:(v:string)=>void}) { return <div className="mb-6"><div className="mb-3 flex justify-between text-sm"><span className="font-semibold">{label}</span><span className="text-muted-foreground">{value}</span></div><div className="flex flex-wrap gap-2">{items.map(item=><Button key={item} onClick={()=>onChange(item)} variant={value===item?"default":"outline"} size="sm" className="min-w-12">{item}</Button>)}</div></div> }
