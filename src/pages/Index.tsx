import { useState } from "react";
import Navbar from "@/components/Navbar";
import TGEBanner from "@/components/TGEBanner";
import Hero from "@/components/Hero";
import TradingInterface from "@/components/TradingInterface";
import Features from "@/components/Features";
import MediaLogos from "@/components/MediaLogos";
import AIFeatures from "@/components/AIFeatures";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import { WalletConnectDialog } from "@/components/WalletConnectDialog";

const Index = () => {
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onConnectWallet={() => setWalletDialogOpen(true)} />
      <TGEBanner onClaimClick={() => setWalletDialogOpen(true)} />
      <Hero onConnectWallet={() => setWalletDialogOpen(true)} />
      <TradingInterface onConnectWallet={() => setWalletDialogOpen(true)} />
      <Features />
      <MediaLogos />
      <AIFeatures />
      <Roadmap />
      <Footer />
      
      <WalletConnectDialog 
        open={walletDialogOpen} 
        onOpenChange={setWalletDialogOpen}
      />
    </div>
  );
};

export default Index;
