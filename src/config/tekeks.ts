// Blockchain configurations
import { polygon, base, baseSepolia } from "@/config/rantais";

// Define the type explicitly
type SupportedNFTs = {
  [key: number]: `0x${string}`[]; // Keys are numbers, values are arrays of Ethereum addresses
};

// Define `tekeks` with the proper type
export const tekeks: SupportedNFTs = {
  [polygon.id]: ["0x0015C1dEb48c3aD0f5427cBbE81Cb36366F1621D"], // MEMORA ONE
  [base.id]: ["0x1925B991C5e2eC45BA1f34786BAd405d58202140"], // MEMORA ONE
  [baseSepolia.id]: [
    "0xc3046681149f96746b362a64472fD4B1cd1E33B2", // MEMORA ZER0
    "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1", // Bukhari Virtual Collectibles
  ],
};

// Assign `tekeks` to `supportedNFTs`
const supportedNFTs: SupportedNFTs = tekeks;
