import aiVisual from "@/assets/ai-visual.jpg"
import { Brain, Target, TrendingUp } from "lucide-react"

const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced algorithms analyze market patterns to provide real-time trading insights",
    },
    {
      icon: Target,
      title: "Smart Execution",
      description: "Optimize your trades with AI-driven execution strategies for better prices",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage machine learning to identify potential market opportunities",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 opacity-20">
        <img src={aiVisual || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Next-Generation Trading with <br className="hidden sm:block" />
            <span className="text-gradient">Solanex AI</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Harness the power of artificial intelligence to enhance your trading decisions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 sm:mb-6 glow-primary group-hover:rotate-12 transition-transform flex-shrink-0">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
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

export default AIFeatures
