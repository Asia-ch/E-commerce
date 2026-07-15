import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-12 px-5 py-14 md:px-8 lg:py-20">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <div className="max-w-lg"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">NOVE / Private list</p><h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">New perspective, delivered.</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/65">Early access to new collections, limited releases, and stories from the studio.</p><form className="mt-7 flex max-w-md gap-2"><Input aria-label="Email address" type="email" placeholder="Email address" className="border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/50"/><Button size="icon" variant="secondary" aria-label="Join newsletter"><ArrowRight /></Button></form></div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3"><FooterColumn title="Shop" links={["New arrivals","Women","Men","Footwear"]}/><FooterColumn title="Help" links={["Delivery","Returns","Contact","Size guide"]}/><FooterColumn title="Follow" links={["Instagram","Pinterest","TikTok","Journal"]}/></div>
      </div>
      <div className="flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row"><p>© 2026 NOVE Studio</p><div className="flex gap-5"><Link href="#">Privacy</Link><Link href="#">Terms</Link><span>United States / USD</span></div></div>
    </div>
  </footer>
}
function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div className="flex flex-col gap-3"><p className="font-semibold text-primary-foreground">{title}</p>{links.map((link) => <Link key={link} className="text-primary-foreground/60 transition-colors hover:text-primary-foreground" href={link === "Women" || link === "Men" || link === "Footwear" ? `/shop?category=${link}` : "#"}>{link}</Link>)}</div> }
