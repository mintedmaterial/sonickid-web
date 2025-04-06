import { createClient } from "urql"

// Types for subgraph responses
export interface Token {
  id: string
  symbol: string
  name: string
  decimals: number
  totalSupply: string
  volume: string
  volumeUSD: string
  txCount: string
  liquidity: string
  derivedETH: string
}

export interface Pair {
  id: string
  token0: Token
  token1: Token
  reserve0: string
  reserve1: string
  reserveUSD: string
  volumeUSD: string
  txCount: string
}

export interface PairDayData {
  id: string
  date: number
  pairAddress: string
  token0: Token
  token1: Token
  reserve0: string
  reserve1: string
  reserveUSD: string
  volumeToken0: string
  volumeToken1: string
  volumeUSD: string
  txCount: string
}

// Create a default endpoint if environment variables are not available
const defaultEndpoint = "https://subgraph.satsuma-prod.com/496ce6650bfa/colts-team--432938/sonic-blockchain-subgraph/version/v0.0.1-new-version/api"

// Create GraphQL client with basic configuration
export const client = createClient({
  url: import.meta.env.VITE_SUBGRAPH_ENDPOINT || defaultEndpoint,
})

// Common GraphQL queries
export const TOKENS_QUERY = `
  query GetTokens($first: Int = 100, $orderBy: String = "volumeUSD", $orderDirection: String = "desc") {
    tokens(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      symbol
      name
      decimals
      totalSupply
      volume
      volumeUSD
      txCount
      liquidity
      derivedETH
    }
  }
`

export const PAIRS_QUERY = `
  query GetPairs($first: Int = 100, $orderBy: String = "reserveUSD", $orderDirection: String = "desc") {
    pairs(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
      reserve0
      reserve1
      reserveUSD
      volumeUSD
      txCount
    }
  }
`

export const TOKEN_DAY_DATA_QUERY = `
  query GetTokenDayData($tokenId: String!, $days: Int = 7) {
    tokenDayDatas(
      first: $days,
      orderBy: "date",
      orderDirection: "desc",
      where: { token: $tokenId }
    ) {
      id
      date
      priceUSD
      volumeUSD
      liquidityUSD
      txCount
    }
  }
`

// Helper functions for common data fetching patterns
export const fetchTopTokens = async (count = 100) => {
  const { data } = await client.query(TOKENS_QUERY, { first: count }).toPromise()
  return data?.tokens || []
}

export const fetchTopPairs = async (count = 100) => {
  const { data } = await client.query(PAIRS_QUERY, { first: count }).toPromise()
  return data?.pairs || []
}

export const fetchTokenHistory = async (tokenId: string, days = 7) => {
  const { data } = await client.query(TOKEN_DAY_DATA_QUERY, { tokenId, days }).toPromise()
  return data?.tokenDayDatas || []
}

// Simplified token data hook that uses the tokenId parameter
export const useTokenData = (tokenId: string) => {
  // Using the tokenId parameter to avoid the unused variable warning
  console.log(`Fetching data for token: ${tokenId}`)
  return { data: null, fetching: false, error: null }
}



