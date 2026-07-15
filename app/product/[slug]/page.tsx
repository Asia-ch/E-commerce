import { notFound } from "next/navigation"
import { Footer } from "@/components/store/footer"
import { Header } from "@/components/store/header"
import { ProductDetail } from "@/components/store/product-detail"
import { ProductCard } from "@/components/store/product-card"
import { getProduct, products } from "@/lib/products"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0,3)
  return <><Header/><main><ProductDetail product={product}/><section className="section-shell py-16 md:py-24"><h2 className="mb-8 font-serif text-4xl">You may also like.</h2><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{related.map(item=><ProductCard key={item.id} product={item}/>)}</div></section></main><Footer/></>
}
