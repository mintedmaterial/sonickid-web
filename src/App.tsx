"use client"

import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider as UrqlProvider } from "urql"
import { client as graphqlClient } from "./utils/subgraph"
import { WebApp, isTelegramWebApp } from "./utils/telegram"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Router from "./Router"

export default function App() {
  useEffect(() => {
    // Initialize Telegram Web App if in Telegram context
    if (isTelegramWebApp()) {
      WebApp?.ready()
      WebApp?.expand()
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <UrqlProvider value={graphqlClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UrqlProvider>
    </ChakraProvider>
  )
}


