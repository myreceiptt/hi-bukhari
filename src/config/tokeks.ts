//config/tokeks.ts
import { polygon, base, baseSepolia } from "thirdweb/chains";

export const tokeks = {
  [polygon.id]: [
    {
      address: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df",
      name: "OiOi Token",
      symbol: "OiOi",
      icon: "/erc20-icons/oioi.png",
    },
    {
      address: "0xc0026436Ac3099Dd8a7Cac8660e2e1CE21FbE564",
      name: "MEMORA Token",
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
      address: "0xba0032620d88D9b16752CbDE75593c080C3d38de",
      name: "OiOi Token",
      symbol: "OiOi",
      icon: "/erc20-icons/oioi.png",
    },
    {
      address: "0xAbb6f5F95A11a4c91a409074B30e4523B4E100fb",
      name: "MEMORA Token",
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
      address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53",
      name: "OiOi T0ken",
      symbol: "OiOi",
      icon: "/erc20-icons/oioi.png",
    },
    {
      address: "0x358428dd56867b4481637FF8E393D08755c55c82",
      name: "MEMORA T0ken",
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
