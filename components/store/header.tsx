"use client"

import Link from "next/link"
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useShop } from "@/components/store/shop-provider"

const nav = ["New", "Women", "Men", "Footwear"]
export function Header() {
  const { cartCount, wishlist } = useShop()
  return <>
    <div className="bg-primary px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground">Complimentary delivery on orders over $150</div>
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:h-20 md:px-8">
        <div className="flex items-center gap-2 lg:hidden"><Sheet><SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu"/>}><Menu /></SheetTrigger><SheetContent side="left"><SheetHeader><SheetTitle className="font-serif text-3xl">NOVE</SheetTitle><SheetDescription>Explore the latest collection.</SheetDescription></SheetHeader><nav className="flex flex-col gap-1 px-4">{nav.map((item) => <Link className="border-b py-4 text-xl" href={item === "New" ? "/shop" : `/shop?category=${item}`} key={item}>{item}</Link>)}<Link className="py-4 text-xl" href="/login">Account</Link></nav></SheetContent></Sheet></div>
        <Link href="/" className="font-serif text-2xl font-semibold tracking-[-0.04em] md:text-3xl">NOVE</Link>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">{nav.map((item) => <Link className="transition-opacity hover:opacity-50" href={item === "New" ? "/shop" : `/shop?category=${item}`} key={item}>{item}</Link>)}</nav>
        <div className="flex items-center gap-1">
          <Link href="/shop" className={buttonVariants({ variant: "ghost", size: "icon" })} aria-label="Search products"><Search /></Link>
          <Link href="/wishlist" className={buttonVariants({ variant: "ghost", size: "icon", className: "relative hidden sm:inline-flex" })} aria-label={`Wishlist with ${wishlist.length} items`}><Heart />{wishlist.length > 0 && <Count value={wishlist.length}/>}</Link>
          <Link href="/profile" className={buttonVariants({ variant: "ghost", size: "icon", className: "hidden sm:inline-flex" })} aria-label="Account"><UserRound /></Link>
          <Link href="/cart" className={buttonVariants({ variant: "ghost", size: "icon", className: "relative" })} aria-label={`Cart with ${cartCount} items`}><ShoppingBag />{cartCount > 0 && <Count value={cartCount}/>}</Link>
        </div>
      </div>
    </header>
  </>
}
function Count({ value }: { value: number }) { return <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] text-primary-foreground">{value}</span> }
