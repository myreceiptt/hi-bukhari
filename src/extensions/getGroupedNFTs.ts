import { NFT_CONTRACTS } from "@/consts/nft_contracts";

/**
 * Groups NFT contracts by chain ID for use in the ConnectButton's supportedNFTs property.
 *
 * @returns An object where keys are chain IDs and values are arrays of NFT contract addresses.
 */
export function getGroupedNFTs() {
  const groupedNFTs: Record<number, string[]> = {};

  NFT_CONTRACTS.forEach((contract) => {
    const chainId = contract.chain.id; // Use the chain ID from the contract's chain property.

    // Initialize the chain's entry if not already present.
    if (!groupedNFTs[chainId]) {
      groupedNFTs[chainId] = [];
    }

    // Add the NFT contract's address to the respective chain's array.
    groupedNFTs[chainId].push(contract.address);
  });

  return groupedNFTs;
}
