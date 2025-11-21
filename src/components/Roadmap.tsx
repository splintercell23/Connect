import { CheckCircle2, Circle } from "lucide-react"

const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2024",
      title: "Platform Launch",
      items: ["Spot trading launch", "Mobile app release", "Basic charting tools"],
      completed: true,
    },
    {
      quarter: "Q2 2024",
      title: "Perpetuals",
      items: ["Perpetual contracts", "Up to 100x leverage", "Advanced order types"],
      completed: true,
    },
    {
      quarter: "Q3 2024",
      title: "AI Integration",
      items: ["AI trading assistant", "Smart execution", "Predictive analytics"],
      completed: false,
    },
    {
      quarter: "Q4 2024",
      title: "Ecosystem",
      items: ["Governance token", "Staking rewards", "Cross-chain support"],
      completed: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Our journey to building the most advanced decentralized trading platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="glass-card p-5 sm:p-6 lg:p-7 rounded-lg sm:rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 relative group flex flex-col"
            >
              {phase.completed && (
                <div className="absolute -top-3 -right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              )}

              <div className="mb-4 sm:mb-5">
                <span className="text-xs sm:text-sm text-primary font-semibold">{phase.quarter}</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-2">{phase.title}</h3>
              </div>

              <ul className="space-y-2 sm:space-y-3 flex-1">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                    {phase.completed ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
