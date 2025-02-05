"use client";

import React from "react";
import { useWalletBalance } from "thirdweb/react";
import { FaWallet, FaEthereum, FaCoins } from "react-icons/fa6";
import { client } from "@/config/client";
import { base } from "thirdweb/chains";
import { tokeks } from "@/config/tokeks";

interface WalletInfoProps {
  account: { address: string } | null;
}

export default function WalletInfo({ account }: WalletInfoProps) {
  // Fetch Native Token (ETH) Balance
  const { data: ethBalance, isLoading: isLoadingEth } = useWalletBalance({
    address: account?.address,
    chain: base,
    client,
  });

  // Fetch ERC-20 Token Balances (Loops through `tokeks[base.id]`)
  const tokenBalances = tokeks[base.id].map((token) =>
    useWalletBalance({
      address: account?.address,
      chain: base,
      client,
      tokenAddress: token.address,
    })
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-xl w-full max-w-sm flex flex-col gap-4">
      {/* Wallet Address */}
      <div className="flex items-center gap-2 text-hitam-judul-body">
        <FaWallet className="text-xl" />
        <p className="break-all text-sm">{account?.address}</p>
      </div>

      {/* Native Token Balance (ETH) */}
      <div className="flex items-center gap-2 text-hitam-judul-body">
        <FaEthereum className="text-xl" />
        <p className="text-sm">
          Balance:{" "}
          {isLoadingEth
            ? "Loading..."
            : `${ethBalance?.displayValue} ${ethBalance?.symbol}`}
        </p>
      </div>

      {/* ERC-20 Token Balances */}
      {tokenBalances.map(({ data: tokenBalance, isLoading }, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-hitam-judul-body">
          <FaCoins className="text-xl" />
          <p className="text-sm">
            {isLoading
              ? "Loading..."
              : `${tokenBalance?.displayValue} ${
                  tokeks[base.id][index].symbol
                }`}
          </p>
        </div>
      ))}
    </div>
  );
}
