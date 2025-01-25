// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { polygon, base, baseSepolia } from "@/config/rantais";

// Bukhari Virtual Collectibles on Base Sepolia.
export const bukhariVirtualCollectibles = getContract({
  address: "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1",
  chain: baseSepolia,
  client,
});

// MEMORA TOKEN Drop on Polygon.
export const memoraTokenDropPolygon = getContract({
  address: "0xc0026436Ac3099Dd8a7Cac8660e2e1CE21FbE564",
  chain: polygon,
  client,
});

// MEMORA TOKEN Drop on Base.
export const memoraTokenDrop = getContract({
  address: "0xAbb6f5F95A11a4c91a409074B30e4523B4E100fb",
  chain: base,
  client,
});

// MEMORA T0KEN Drop on Base Sepolia.
export const memoraT0kenDrop = getContract({
  address: "0x358428dd56867b4481637FF8E393D08755c55c82",
  chain: baseSepolia,
  client,
});
