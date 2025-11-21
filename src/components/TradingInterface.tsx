import tradingInterface from "@/assets/trading-interface.jpg"
import { TrendingUp, Zap, Shield } from "lucide-react"

interface TradingInterfaceProps {
  onConnectWallet: () => void
}

const TradingInterface = ({ onConnectWallet }: TradingInterfaceProps) => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our optimized engine",
    },
    {
      icon: TrendingUp,
      title: "Advanced Charts",
      description: "Professional-grade charting tools and indicators",
    },
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Non-custodial with industry-leading security",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trade Perps With <br className="hidden sm:block" />
            <span className="text-gradient">CEX-Like Performance</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Experience the speed and efficiency of centralized exchanges with the security of DeFi
          </p>
        </div>

        {/* Trading interface mockup */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 glow-primary blur-3xl opacity-20" />
          <div className="relative glass-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-2xl border border-white/10 overflow-hidden">
            <img
              src={tradingInterface || "/placeholder.svg"}
              alt="Trading Interface"
              className="w-full rounded-md sm:rounded-lg h-auto"
            />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-7 rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl gradient-primary flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TradingInterface
