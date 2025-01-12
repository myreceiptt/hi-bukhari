import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default we create listings with the payment currency in the native token of the network (eth, pol, etc.).
 *
 * If we want to allow users to transact using different ERC20 tokens, we can add them to the config below.
 * Keep in mind this is for front-end usage. Make sure our marketplace contracts accept the ERC20s.
 * We can check that in the asset permissions.
 * By default our marketplace contract supports any asset (token).
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: ethereum,
    tokens: [
      {
        tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
    ],
  },
  {
    chain: polygon,
    tokens: [
      {
        tokenAddress: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df",
        symbol: "OiOi",
        icon: "/erc20-icons/oioi.png",
      },
      {
        tokenAddress: "0xc0026436Ac3099Dd8a7Cac8660e2e1CE21FbE564",
        symbol: "MMR",
        icon: "/erc20-icons/memora.png",
      },
      {
        tokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
    ],
  },
  {
    chain: base,
    tokens: [
      {
        tokenAddress: "0xba0032620d88D9b16752CbDE75593c080C3d38de",
        symbol: "OiOi",
        icon: "/erc20-icons/oioi.png",
      },
      {
        tokenAddress: "0xAbb6f5F95A11a4c91a409074B30e4523B4E100fb",
        symbol: "MMR",
        icon: "/erc20-icons/memora.png",
      },
      {
        tokenAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
    ],
  },
  {
    chain: baseSepolia,
    tokens: [
      {
        tokenAddress: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53",
        symbol: "OiOi",
        icon: "/erc20-icons/oioi.png",
      },
      {
        tokenAddress: "0x358428dd56867b4481637FF8E393D08755c55c82",
        symbol: "MMR",
        icon: "/erc20-icons/memora.png",
      },
    ],
  },
];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  [polygon.id]: "/native-token-icons/pol.svg",
  [base.id]: "/native-token-icons/eth.png",
  [baseSepolia.id]: "/native-token-icons/eth.png",
};
