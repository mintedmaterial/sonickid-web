import type React from "react"
import { Routes, Route } from "react-router-dom"
import { Box, Container, Flex } from "@chakra-ui/react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import NFTs from "./pages/NFTs"
import Trading from "./pages/Trading"
import Social from "./pages/Social"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"

// Inline MainLayout to avoid import issues
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box flex="1">
        <Header />
        <Container maxW="container.xl" py={8}>
          {children}
        </Container>
      </Box>
    </Flex>
  )
}

export default function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/social" element={<Social />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  )
}

