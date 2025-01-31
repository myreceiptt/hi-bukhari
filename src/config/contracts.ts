// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { base, baseSepolia } from "@/config/rantais";

// Bukhari Virtual Collectibles on Base Sepolia.
export const bukhariVirtualCollectibles = getContract({
  address: "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1",
  chain: baseSepolia,
  client,
});

// BON VOYAGE Drop on Base.
export const bonVoyageDrop = getContract({
  address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
  chain: base,
  client,
});

// B0N V0YAGE Drop on Base Sepolia.
export const b0nV0yageDrop = getContract({
  address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
  chain: baseSepolia,
  client,
});
