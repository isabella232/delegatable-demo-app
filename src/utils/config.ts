import { arbitrum, goerli, mainnet, optimism, polygon, sepolia } from '@wagmi/chains'
export const SITE_CANONICAL = 'https://delegatable.district.dev'
export const SITE_EMOJI = '🎛️'
export const SITE_NAME = 'Delegatable'
export const SITE_TITLE = 'Delegatable - Counterfactual Delegation'
export const SITE_DESCRIPTION = 'Solidity framework for extending smart contracts with counterfactual revocable-delegation.'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'KamesGeraghty'
export const SOCIAL_GITHUB = 'delegatable/delegatable-demo-app'

export const APP_CONFIG = {
  canonical: SITE_CANONICAL,
  emoji: SITE_EMOJI,
  title: SITE_TITLE,
  site_name: SITE_NAME,
  description: SITE_DESCRIPTION,
  previewImg: `${SITE_CANONICAL}/preview.png`,
  locale: 'en',
  twitter: SOCIAL_TWITTER,
}

// Override the default Goerli icon so it's not the same as the default Ethereum icon
// @ts-ignore
goerli.iconUrl = '/icons/NetworkEthereumTest.png'

export const ETH_CHAINS = [mainnet, polygon, optimism, arbitrum, goerli]
