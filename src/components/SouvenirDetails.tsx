"use client";

// External libraries
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getNFT, balanceOf } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariVirtualCollectibles } from "@/config/contracts";
import { FetchEthereumPrice } from "@/config/ethers";

const SouvenirDetails: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const backButton = () => {
    router.back();
  };

  const tokenId = params.tokenId;
  const smartAccount = useActiveAccount();
  const [pesanSukses, setPesanSukses] = React.useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = React.useState<string | null>(null);

  const tokenIdString = Array.isArray(tokenId) ? tokenId[0] : tokenId;
  const tokenIdBigInt = BigInt(tokenIdString || 0);
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: bukhariVirtualCollectibles,
    tokenId: tokenIdBigInt,
  });

  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: bukhariVirtualCollectibles,
    owner: smartAccount?.address!,
    tokenId: tokenIdBigInt,
    queryOptions: { enabled: !!smartAccount?.address && !!tokenId },
  });

  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEthPrice = async () => {
      const price = await FetchEthereumPrice();
      setEthPrice(price);
      setLoading(false);
    };

    getEthPrice();

    // Optionally update every 30 seconds
    const interval = setInterval(getEthPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  const calculatePrice = () => {
    if (ethPrice) {
      const tokenIdNumber = parseInt(tokenIdString, 10); // Convert tokenId to a number for comparison
      if ([0, 1, 2].includes(tokenIdNumber)) {
        return (0.0011 * ethPrice).toFixed(2); // Multiply and format to 2 decimal places
      } else if ([3, 4, 5].includes(tokenIdNumber)) {
        return (0 * ethPrice).toFixed(2); // Price is 0, but still formatted
      }
    }
    return null; // Fallback in case ethPrice is not available
  };

  React.useEffect(() => {
    if (!tokenId) {
      router.push("/"); // Redirect to the main page
    }
  }, [tokenId, router]);

  if (!tokenId || isNftLoading) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-center text-xs font-normal">
          <code className="px-1 py-0.5 rounded font-normal">Loading...</code>
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* MediaRenderer (Left Column) */}
        {nft ? (
          <div className="rounded-3xl overflow-hidden w-full">
            <MediaRenderer
              client={client}
              src={nft.metadata.image}
              className="rounded-3xl w-full"
            />
          </div>
        ) : (
          <h2 className="text-center text-xs font-normal">
            <code className="px-1 py-0.5 rounded font-normal">
              No data available
            </code>
          </h2>
        )}

        {/* Right Column */}
        <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start justify-center h-full">
          {/* Title */}
          <h1 className="text-center lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
            {nft?.metadata.name || "Souvenir Details"}
          </h1>
          <h1 className="text-center lg:text-left text-xs font-normal">
            by &#9673;{" "}
            <Link href="https://bukharicreative.group/" target="_blank">
              Bukhari Creative Group
            </Link>
          </h1>
          <h1 className="text-center lg:text-left text-xs font-normal">
            {nft?.metadata.description}
          </h1>
          {loading ? (
            <h2 className="text-center text-xs font-normal">
              <code className="px-1 py-0.5 rounded font-normal">
                Loading...
              </code>
            </h2>
          ) : ethPrice ? (
            <h2 className="text-center text-xs font-normal">
              Price ${calculatePrice()}
            </h2>
          ) : (
            <h2 className="text-center text-xs font-normal">
              <code className="px-1 py-0.5 rounded font-normal">Failed</code>
            </h2>
          )}

          {/* Success or Error Messages */}
          {pesanSukses && (
            <h4 className="text-center text-xs font-normal">
              <code className="px-1 py-0.5 rounded font-semibold text-blue-500">
                {pesanSukses}
              </code>
            </h4>
          )}
          {pesanGagal && (
            <h4 className="text-center text-xs font-normal">
              <code className="px-1 py-0.5 rounded font-semibold text-red-500">
                {pesanGagal}
              </code>
            </h4>
          )}

          {/* Owned NFTs Info */}
          <h2 className="text-center text-xs font-normal">
            Owned: {ownedNfts?.toString() || "0"} Edition(s)
          </h2>
          <h2 className="text-center text-xs font-normal">
            Chain: {bukhariVirtualCollectibles.chain.name}
          </h2>

          {/* Claim Button */}
          <ClaimButton
            unstyled
            className="w-full rounded-lg p-2 border-2 border-solid border-zinc-950 text-zinc-950 bg-neutral-200 text-sm leading-4 font-normal uppercase my-1"
            contractAddress={bukhariVirtualCollectibles.address}
            chain={bukhariVirtualCollectibles.chain}
            client={client}
            claimParams={{
              type: "ERC1155",
              quantity: 1n,
              tokenId: tokenIdBigInt,
            }}
            onError={(error) => {
              setPesanGagal(`${error.message}`);
              setPesanSukses(null);
            }}
            onTransactionConfirmed={async () => {
              setPesanSukses("Claim successful!");
              setPesanGagal(null);
            }}>
            COLLECT IT!
          </ClaimButton>

          {/* Back Button */}
          <button
            type="button"
            className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1"
            onClick={backButton}>
            &lArr; Go Back &lArr;
          </button>
        </div>
      </div>
    </main>
  );
};

export default SouvenirDetails;
