"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  onConnectWallet: () => void
}

const Navbar = ({ onConnectWallet }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Trade", href: "#trade" },
    { label: "Markets", href: "#markets" },
    { label: "Earn", href: "#earn" },
    { label: "About", href: "#about" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-gradient">SOLA.NEX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <Button variant="ghost" size="sm" onClick={onConnectWallet}>
              Connect Wallet
            </Button>
            <Button variant="hero" size="sm" onClick={onConnectWallet}>
              Launch App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-2 text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full justify-center" size="sm" onClick={onConnectWallet}>
                Connect Wallet
              </Button>
              <Button variant="hero" className="w-full justify-center" size="sm" onClick={onConnectWallet}>
                Launch App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
