import { client } from "@/config/client";
import { polygon, base, baseSepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";

// Bukhari Virtual Collectibles on Base Sepolia.
export const bukhariVirtualCollectibles = getContract({
  address: "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1",
  chain: baseSepolia,
  client,
});

// MEMORA TOKEN Drop on Polygon.
// export const memoraTokenDropPolygon = getContract({
//   address: "0xc0026436Ac3099Dd8a7Cac8660e2e1CE21FbE564",
//   chain: polygon,
//   client,
// });

// MEMORA TOKEN Drop on Base.
// export const memoraTokenDrop = getContract({
//   address: "0xAbb6f5F95A11a4c91a409074B30e4523B4E100fb",
//   chain: base,
//   client,
// });

// MEMORA T0KEN Drop on Base Sepolia.
export const memoraT0kenDrop = getContract({
  address: "0x358428dd56867b4481637FF8E393D08755c55c82",
  chain: baseSepolia,
  client,
});

// MEMORA ONE Edition Drop on Polygon.
// export const memoraOneEditionDropPolygon = getContract({
//   address: "0x0015C1dEb48c3aD0f5427cBbE81Cb36366F1621D",
//   chain: polygon,
//   client,
// });

// MEMORA ONE Edition Drop on Base.
// export const memoraOneEditionDrop = getContract({
//   address: "0x1925B991C5e2eC45BA1f34786BAd405d58202140",
//   chain: base,
//   client,
// });

// MEMORA ZERO Edition Drop on Base Sepolia.
// export const memoraZeroEditionDrop = getContract({
//   address: "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
//   chain: baseSepolia,
//   client,
// });
