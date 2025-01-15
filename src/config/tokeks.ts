//config/tokeks.ts
import { polygon, base, baseSepolia } from "thirdweb/chains";

export const tokeks = {
  [polygon.id]: [
    {
      address: "0xc0026436Ac3099Dd8a7Cac8660e2e1CE21FbE564",
      name: "MMR Dosh",
      symbol: "MMR",
      icon: "/erc20-icons/memora.png",
    },
    {
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
  [base.id]: [
    {
      address: "0xAbb6f5F95A11a4c91a409074B30e4523B4E100fb",
      name: "MMR Dosh",
      symbol: "MMR",
      icon: "/erc20-icons/memora.png",
    },
    {
      address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
  [baseSepolia.id]: [
    {
      address: "0x358428dd56867b4481637FF8E393D08755c55c82",
      name: "MMR Dosh",
      symbol: "MMR",
      icon: "/erc20-icons/memora.png",
    },
    {
      address: "0x5dEaC602762362FE5f135FA5904351916053cF70",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
};
