// Simplified client without ThirdWeb dependencies for now
export const client = {
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "",
  activeChain: { id: 11155111, name: "Sepolia" }, // Sepolia chain ID

  // Configure Telegram Mini App metadata
  appMetadata: {
    name: "SonicKid Dashboard",
    url: import.meta.env.VITE_PUBLIC_URL || "https://sonickid.io",
    isDarkMode: true,
    supportedWallets: ["metamask", "coinbase", "walletconnect"],
  },
}

