"use client"

import { createContext, useContext, useMemo, useState } from "react"
import type { Product } from "@/lib/products"

type CartItem = { product: Product; quantity: number; size: string; color: string }
type ShopContextValue = {
  cart: CartItem[]
  wishlist: string[]
  cartCount: number
  subtotal: number
  addToCart: (product: Product, size?: string, color?: string) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  toggleWishlist: (id: string) => void
  clearCart: () => void
}

const ShopContext = createContext<ShopContextValue | null>(null)

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])

  const value = useMemo(() => ({
    cart,
    wishlist,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    addToCart: (product: Product, size = product.sizes[0], color = product.colors[0]) => setCart((current) => {
      const found = current.find((item) => item.product.id === product.id && item.size === size && item.color === color)
      return found ? current.map((item) => item === found ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { product, quantity: 1, size, color }]
    }),
    removeFromCart: (id: string) => setCart((current) => current.filter((item) => item.product.id !== id)),
    updateQuantity: (id: string, quantity: number) => setCart((current) => current.map((item) => item.product.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)),
    toggleWishlist: (id: string) => setWishlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]),
    clearCart: () => setCart([]),
  }), [cart, wishlist])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error("useShop must be used inside ShopProvider")
  return context
}
