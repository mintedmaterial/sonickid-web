/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  readonly VITE_API_URL: string
  readonly VITE_THIRDWEB_CLIENT_ID: string
  readonly VITE_THIRDWEB_SECRET_KEY: string
  readonly VITE_SUBGRAPH_ENDPOINT: string
  readonly VITE_SUBGRAPH_WS_ENDPOINT: string
  readonly VITE_TELEGRAM_BOT_USERNAME: string
  readonly VITE_TELEGRAM_BOT_TOKEN: string
  readonly VITE_CHAIN_ID: string
  readonly VITE_RPC_URL: string
  readonly VITE_ENABLE_TESTNET: string
  readonly VITE_ENABLE_SOCIAL_FEATURES: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_PUBLIC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
