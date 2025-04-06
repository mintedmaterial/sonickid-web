"use client"

import { Box, Flex, IconButton, useColorMode, Text } from "@chakra-ui/react"
import { ConnectWallet } from "@thirdweb-dev/react"
import { FiSun, FiMoon } from "react-icons/fi"

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as="header"
      py={4}
      px={8}
      borderBottom="1px"
      borderColor="gray.200"
      bg={colorMode === "light" ? "white" : "gray.800"}
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          SonicKid Dashboard
        </Text>
        <Flex gap={4} align="center">
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
            onClick={toggleColorMode}
          />
          <ConnectWallet />
        </Flex>
      </Flex>
    </Box>
  )
}



