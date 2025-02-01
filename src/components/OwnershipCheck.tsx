"use client";

// External libraries
import React, { useEffect, useState } from "react";
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariVirtualCollectibles } from "@/config/contracts";

interface TokenCheckProps {
  userAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
  maxTokenId: number;
}

const TokenCheck: React.FC<TokenCheckProps> = ({
  userAddress,
  onAccessChange,
  maxTokenId,
}) => {
  const contract = getContract({
    client,
    address: bukhariVirtualCollectibles.address,
    chain: bukhariVirtualCollectibles.chain,
  });

  // Generate token IDs dynamically (0 to maxTokenId)
  const tokenIds = Array.from({ length: maxTokenId + 1 }, (_, i) => BigInt(i));

  // Fetch balances dynamically for all token IDs
  const tokenBalances = tokenIds.map((id) =>
    useReadContract({
      contract,
      method:
        "function balanceOf(address account, uint256 id) returns (uint256)",
      params: [userAddress, id],
    })
  );

  useEffect(() => {
    if (tokenBalances) {
      // Extract balance data safely
      const hasTokens = tokenBalances.some(
        (balance) => balance?.data && BigInt(balance.data) > 0n
      );
      onAccessChange(hasTokens);
    }
  }, [tokenBalances, onAccessChange]);

  return null; // This component doesn't render anything itself
};

export default TokenCheck;
