import { Wallet, TrendingUp, Lock, Zap, BarChart3, Users } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Instant Swaps",
      description: "Self-custody instant swaps with transparent funding",
    },
    {
      icon: TrendingUp,
      title: "Up to 100x",
      description: "Trade with up to 100x leverage on perpetual contracts",
    },
    {
      icon: Lock,
      title: "Non-Custodial",
      description: "Your keys, your crypto. Always maintain full control",
    },
    {
      icon: Zap,
      title: "Low Fees",
      description: "Industry-leading fee structure for all traders",
    },
    {
      icon: BarChart3,
      title: "Advanced Trading",
      description: "Professional tools for serious traders",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governed by the community, for the community",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience unmatched ease <br className="hidden sm:block" />
            and <span className="text-gradient">efficiency in every action</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:scale-105 flex flex-col"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl gradient-cyan-purple flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform flex-shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
