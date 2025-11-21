"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface TGEBannerProps {
  onClaimClick: () => void
}

const TGEBanner = ({ onClaimClick }: TGEBannerProps) => {
  return (
    <section className="relative py-4 sm:py-6 px-4 bg-gradient-primary border-b border-white/10 mt-16">
      <div className="absolute inset-0 glow-primary opacity-20" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 min-w-0">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse flex-shrink-0" />
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-white text-center sm:text-left truncate">
              TGE Complete — Claim Tokens
            </h2>
          </div>
          <Button
            onClick={onClaimClick}
            variant="glass"
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-semibold whitespace-nowrap flex-shrink-0"
          >
            Claim Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TGEBanner
