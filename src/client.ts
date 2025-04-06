import { createThirdwebClient, sepolia } from "thirdweb"

// Initialize the ThirdWeb client with configuration
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "",
  supportedChains: [sepolia],
  activeChain: sepolia,
  secretKey: import.meta.env.VITE_THIRDWEB_SECRET_KEY || "",

  // Configure Telegram Mini App metadata
  appMetadata: {
    name: "SonicKid Dashboard",
    url: import.meta.env.VITE_PUBLIC_URL || "https://sonickid.io",
    isDarkMode: true,
    supportedWallets: ["metamask", "coinbase", "walletconnect"],
  },
})

