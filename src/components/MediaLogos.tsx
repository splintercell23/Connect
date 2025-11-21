const MediaLogos = () => {
  const logos = [
    { name: "TechCrunch" },
    { name: "Forbes" },
    { name: "Bloomberg" },
    { name: "CoinDesk" },
    { name: "The Block" },
    { name: "Decrypt" },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-center text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10 lg:mb-12 uppercase tracking-widest">
          Featured in Media
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="text-base sm:text-lg lg:text-xl font-bold text-muted-foreground text-center">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaLogos
