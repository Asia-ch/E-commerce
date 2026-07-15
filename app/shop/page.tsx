"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Footer } from "@/components/store/footer"
import { Header } from "@/components/store/header"
import { ProductCard } from "@/components/store/product-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/products"

export default function ShopPage() { return <Suspense><Catalog/></Suspense> }
function Catalog() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(searchParams.get("category") || "All")
  const [sort, setSort] = useState("featured")
  const filtered = useMemo(() => products.filter((p) => (category === "All" || p.category === category) && `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === "low" ? a.price-b.price : sort === "high" ? b.price-a.price : 0), [category, query, sort])
  const cats = ["All","Women","Men","Footwear"]
  return <><Header/><main className="section-shell py-12 md:py-16"><div className="flex flex-col gap-8"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">The collection</p><h1 className="font-serif text-5xl tracking-tight md:text-7xl">Shop all.</h1></div><div className="flex flex-col justify-between gap-4 border-y py-4 md:flex-row md:items-center"><div className="flex gap-5 overflow-x-auto">{cats.map((item) => <button key={item} onClick={() => setCategory(item)} className={`shrink-0 text-sm ${category === item ? "font-semibold underline underline-offset-8" : "text-muted-foreground"}`}>{item}</button>)}</div><div className="flex flex-col gap-3 sm:flex-row"><div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="pl-9 sm:w-64"/></div><Select value={sort} onValueChange={(value) => setSort(value || "featured")} items={[{label:"Featured",value:"featured"},{label:"Price: Low to high",value:"low"},{label:"Price: High to low",value:"high"}]}><SelectTrigger className="sm:w-48"><SelectValue/></SelectTrigger><SelectContent><SelectGroup><SelectItem value="featured">Featured</SelectItem><SelectItem value="low">Price: Low to high</SelectItem><SelectItem value="high">Price: High to low</SelectItem></SelectGroup></SelectContent></Select></div></div>{filtered.length ? <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5">{filtered.map((product) => <ProductCard key={product.id} product={product}/>)}</div> : <div className="flex min-h-72 flex-col items-center justify-center text-center"><h2 className="font-serif text-3xl">Nothing found.</h2><p className="mt-2 text-sm text-muted-foreground">Try a different search or category.</p></div>}</div></main><Footer/></>
}
