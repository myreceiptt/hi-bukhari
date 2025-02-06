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

  const tokenId = params.tokenId;
  const smartAccount = useActiveAccount();

  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = React.useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = React.useState<string | null>(null);

  const tokenIdString = Array.isArray(tokenId) ? tokenId[0] : tokenId ?? "0";
  const tokenIdBigInt = BigInt(tokenIdString);
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: bukhariVirtualCollectibles,
    tokenId: tokenIdBigInt,
  });

  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: bukhariVirtualCollectibles,
    owner: smartAccount?.address ?? "",
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
        // if (tokenIdNumber > 22 && tokenIdNumber < 46) {
        return (0.0011 * ethPrice).toFixed(2); // Multiply and format to 2 decimal places
      } else if ([3, 4, 5].includes(tokenIdNumber)) {
        // } else if (tokenIdNumber >= 0 && tokenIdNumber < 23) {
        return (0 * ethPrice).toFixed(2); // Price is 0, but still formatted
      }
    }
    return null; // Fallback in case ethPrice is not available
  };

  const [isProcessing, setIsProcessing] = useState(false);

  React.useEffect(() => {
    if (!tokenId) {
      router.push("/"); // Redirect to the main page
    }
  }, [tokenId, router]);

  if (!tokenId || isNftLoading) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Loading...
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
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
          <h2 className="text-left text-sm font-medium text-icon-wording">
            No data available
          </h2>
        )}

        {/* Right Column */}
        <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
          {/* Title */}
          <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
            {nft?.metadata.name || "Souvenir Details"}
          </h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-left text-sm font-medium text-icon-wording">
              by
            </h1>
            <span className="text-3xl leading-6 text-icon-wording">
              &#9673;
            </span>
            <h1 className="text-left text-sm font-medium text-icon-wording">
              <Link href="https://bukharicreative.group/" target="_blank">
                Bukhari Creative Group
              </Link>
            </h1>
          </div>
          <h1 className="text-left text-sm font-medium text-icon-wording">
            {nft?.metadata.description}
          </h1>

          {/* Success or Error Messages */}
          {pesanTunggu && (
            <h4 className="text-left text-sm font-medium text-icon-wording">
              {pesanTunggu}
            </h4>
          )}
          {pesanSukses && (
            <h4 className="text-left text-sm font-medium text-icon-wording">
              {pesanSukses}
            </h4>
          )}
          {pesanGagal && (
            <h4 className="text-left text-sm font-medium text-icon-wording">
              {pesanGagal}
            </h4>
          )}

          {/* Owned NFTs Info */}
          <div className="w-full grid grid-cols-3">
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Price
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Edition
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Owned
            </h2>
            {loading ? (
              <h2 className="text-left text-sm font-medium text-icon-wording">
                Loading...
              </h2>
            ) : ethPrice ? (
              <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
                ${calculatePrice()}
              </h2>
            ) : (
              <h2 className="text-left text-sm font-medium text-icon-wording">
                Failed
              </h2>
            )}
            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              1899
            </h2>
            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              {ownedNfts?.toString() || "0"}
            </h2>
          </div>

          {/* Claim Button */}
          <ClaimButton
            unstyled
            className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
              ${
                isProcessing
                  ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                  : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body"
              }
            `}
            contractAddress={bukhariVirtualCollectibles.address}
            chain={bukhariVirtualCollectibles.chain}
            client={client}
            claimParams={{
              type: "ERC1155",
              quantity: 1n,
              tokenId: tokenIdBigInt,
            }}
            disabled={isProcessing}
            onClick={() => {
              setIsProcessing(true);
              setPesanTunggu("Bismillah! Be patient and wait.");
              setPesanSukses(null);
              setPesanGagal(null);
            }}
            onTransactionSent={() => {
              setIsProcessing(true);
              setPesanTunggu("Bismillah! Be patient and wait.");
              setPesanSukses(null);
              setPesanGagal(null);
            }}
            onError={(error) => {
              setPesanGagal(`${error.message}`);
              setPesanSukses(null);
              setIsProcessing(false);
              setPesanTunggu(null);
            }}
            onTransactionConfirmed={async () => {
              setPesanSukses("Alhamdulillah! Successful!");
              setPesanGagal(null);
              setIsProcessing(false);
              setPesanTunggu(null);
            }}>
            {Number(calculatePrice()) > 0 ? "Buy Now" : "Collect Now"}
          </ClaimButton>
          <h4 className="text-left text-xs font-medium text-icon-wording">
            &#42;Maximum 2 edition per owner.
          </h4>
        </div>
      </div>
    </main>
  );
};

export default SouvenirDetails;
