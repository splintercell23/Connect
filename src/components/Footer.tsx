import { Twitter, Github, Send, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient">SOLA.NEX</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              The first all-in-one DEX for spot and perpetuals on Solana
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all flex-shrink-0"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all flex-shrink-0"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all flex-shrink-0"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Products</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Spot Trading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Perpetuals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Staking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors inline-block">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-white/10 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 Sola.Nex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
