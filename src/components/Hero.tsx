"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import heroVisual from "@/assets/hero-visual.jpg"

interface HeroProps {
  onConnectWallet: () => void
}

const Hero = ({ onConnectWallet }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 sm:py-20 lg:py-0">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-50" />
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 sm:px-4 py-2 rounded-full glass-card border border-white/10 w-full sm:w-auto">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground">Powered by Solana</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              The First All-in-One DEX <br className="hidden sm:block" />
              for Spot and <span className="text-gradient">Perpetuals</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Experience lightning-fast trades with CEX-like performance on a fully decentralized platform. Trade spot
              and perpetuals with up to 100x leverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" onClick={onConnectWallet}>
                Start Trading
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform hidden sm:block" size={20} />
              </Button>
              <Button variant="glass" size="lg" className="group" onClick={onConnectWallet}>
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-4 sm:pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">$2.5B+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">24h Volume</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">150K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">0.01s</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avg. Execution</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 glow-primary blur-3xl opacity-30" />
            <img
              src={heroVisual || "/placeholder.svg"}
              alt="Trading Platform Visualization"
              className="relative z-10 rounded-2xl animate-fade-in w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
