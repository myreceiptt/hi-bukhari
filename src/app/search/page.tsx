// /src/app/search/page.tsx

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getNFTs } from "thirdweb/extensions/erc1155";

// Components libraries
import SearchResult from "@/components/contents/SearchResult";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

// Blockchain configurations
import { bukhariOpenDoor } from "@/config/contracts";

// Type definition for NFTs
type NFTData = {
  id: bigint;
  metadata: {
    name?: string;
    description?: string;
  };
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const [filteredTokens, setFilteredTokens] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      setIsLoading(true);

      try {
        // Fetch up to 50 NFTs dynamically from the contract
        const nfts: NFTData[] = await getNFTs({
          contract: bukhariOpenDoor,
          start: 0, // Start from first token
          count: 23, // Fetch any NFTs (adjust as needed)
        });

        // Filter NFTs based on tokenId, name, or description
        const matchingTokens = nfts
          .filter((nft) => {
            const tokenIdMatch = nft.id.toString().includes(query);
            const nameMatch = nft.metadata?.name?.toLowerCase().includes(query);
            const descMatch = nft.metadata?.description
              ?.toLowerCase()
              .includes(query);
            return tokenIdMatch || nameMatch || descMatch;
          })
          .map((nft) => nft.id.toString()); // Convert matched NFT IDs to string

        setFilteredTokens(matchingTokens);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchTokens();
  }, [query]);

  return (
    <DynamicLoginPage
      ContentComponent={() => (
        <SearchResult
          tokenIds={filteredTokens}
          query={query}
          isLoading={isLoading}
        />
      )}
    />
  );
};

export default SearchPage;
