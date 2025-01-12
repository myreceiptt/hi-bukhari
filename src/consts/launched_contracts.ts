import { client } from "./client";
import { polygon, base, baseSepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";

// Bukhari Virtual Collectibles on Base Sepolia.
export const bukhariVirtualCollectibles = getContract({
  address: "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1",
  chain: baseSepolia,
  client,
});

// OiOi Token Drop on Base.
// export const oioiTokenDrop = getContract({
//   address: "0xba0032620d88D9b16752CbDE75593c080C3d38de",
//   chain: base,
//   client,
// });

// OiOi Token Drop on Base Sepolia.
// export const oioiT0kenDrop = getContract({
//   address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53",
//   chain: baseSepolia,
//   client,
// });

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

// MEMORA ONE Edition Drop on Polygon.
export const memoraOneEditionDropPolygon = getContract({
  address: "0x0015C1dEb48c3aD0f5427cBbE81Cb36366F1621D",
  chain: polygon,
  client,
});

// MEMORA ONE Edition Drop on Base.
export const memoraOneEditionDrop = getContract({
  address: "0x1925B991C5e2eC45BA1f34786BAd405d58202140",
  chain: base,
  client,
});

// MEMORA ZERO Edition Drop on Base Sepolia.
export const memoraZeroEditionDrop = getContract({
  address: "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
  chain: baseSepolia,
  client,
});

// BANANOW BASED NFTs on Base.
// export const bananowBasedNfts = getContract({
//   address: "0xfd039ac57cc8e646802dba4b7cf6bc561e13a09a",
//   chain: base,
//   client,
// });

// Art Meeting NFT Drop on Ethereum.
// export const artMeetingNftDrop = getContract({
//   address: "0x369295d21063d51b76F23A683773963e03CBE742",
//   chain: ethereum,
//   client,
// });

// Panthera LEO NFT Drop on Ethereum.
// export const pantheraLeoNftDrop = getContract({
//   address: "0xADa8d744441388a2964e1DB3911c912135d5206c",
//   chain: ethereum,
//   client,
// });

// MY RECEIPT of ETH Edition Drop on Ethereum.
// export const myreceiptEthDrop = getContract({
//   address: "0x7eb71c33b26407d2eeb179c3f5ebdeab596f07bc",
//   chain: ethereum,
//   client,
// });

// Huskee NFT Drop on Polygon.
// export const huskeeNftDrop = getContract({
//   address: "0xd2bf59352793087151d2740f6b5e3c845797a986",
//   chain: polygon,
//   client,
// });
