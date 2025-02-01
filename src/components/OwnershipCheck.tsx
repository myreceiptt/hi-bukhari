"use client";

// External libraries
import React, { useEffect } from "react";
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariVirtualCollectibles } from "@/config/contracts";

interface TokenCheckProps {
  userAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
}

const TokenCheck: React.FC<TokenCheckProps> = ({
  userAddress,
  onAccessChange,
}) => {
  const contract = getContract({
    client,
    address: bukhariVirtualCollectibles.address,
    chain: bukhariVirtualCollectibles.chain,
  });

  // Token 0, 1, and 2.
  const { data: ownedToken0 } = useReadContract({
    contract,
    method: "function balanceOf(address account, uint256 id) returns (uint256)",
    params: [userAddress, 0n],
  });

  const { data: ownedToken1 } = useReadContract({
    contract,
    method: "function balanceOf(address account, uint256 id) returns (uint256)",
    params: [userAddress, 1n],
  });

  const { data: ownedToken2 } = useReadContract({
    contract,
    method: "function balanceOf(address account, uint256 id) returns (uint256)",
    params: [userAddress, 2n],
  });

  // Token 3, 4, and 5.
  const { data: ownedToken3 } = useReadContract({
    contract,
    method: "function balanceOf(address account, uint256 id) returns (uint256)",
    params: [userAddress, 3n],
  });

  const { data: ownedToken4 } = useReadContract({
    contract,
    method: "function balanceOf(address account, uint256 id) returns (uint256)",
    params: [userAddress, 4n],
  });

  const { data: ownedToken5 } = useReadContract({
    contract,
    method: "function balanceOf(address account, uint256 id) returns (uint256)",
    params: [userAddress, 5n],
  });

  useEffect(() => {
    if (
      ownedToken0 !== undefined ||
      ownedToken1 !== undefined ||
      ownedToken2 !== undefined ||
      ownedToken3 !== undefined ||
      ownedToken4 !== undefined ||
      ownedToken5 !== undefined
    ) {
      const hasTokens =
        (ownedToken0 && ownedToken0 > 0n) ||
        (ownedToken1 && ownedToken1 > 0n) ||
        (ownedToken2 && ownedToken2 > 0n) ||
        (ownedToken3 && ownedToken3 > 0n) ||
        (ownedToken4 && ownedToken4 > 0n) ||
        (ownedToken5 && ownedToken5 > 0n);
      onAccessChange(!!hasTokens);
    }
  }, [
    ownedToken0,
    ownedToken1,
    ownedToken2,
    ownedToken3,
    ownedToken4,
    ownedToken5,
    onAccessChange,
  ]);

  return null; // This component doesn't render anything itself
};

export default TokenCheck;
