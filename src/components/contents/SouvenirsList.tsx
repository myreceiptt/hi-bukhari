"use client";

// External libraries
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ThirdwebContract } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc1155";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariVirtualCollectibles } from "@/config/contracts";
import { FetchEthereumPrice } from "@/config/ethers";

type SouvenirsListProps = {
  title1: string;
  title2: string;
  tokenIds: string[];
};

const SouvenirsList: React.FC<SouvenirsListProps> = ({
  title1,
  title2,
  tokenIds,
}) => {
  const smartAccount = useActiveAccount();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(tokenIds.length / itemsPerPage);

  // Get the tokens for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTokenIds = tokenIds.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-full flex flex-col gap-2 sm:items-start items-center px-0 sm:px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          {title1}
        </h1>
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          {title2}
        </h2>
      </div>

      {/* Pagination inside this <div>, max 6 tokenId per page */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {paginatedTokenIds.map((tokenId) => (
          <NFTLister
            key={tokenId}
            receiverAddress={smartAccount?.address}
            dropContract={bukhariVirtualCollectibles}
            tokenId={tokenId}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-back-ground bg-hitam-judul-body text-base font-semibold rounded-lg disabled:opacity-50">
          Previous
        </button>
        <span className="text-sm font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-back-ground bg-hitam-judul-body text-base font-semibold rounded-lg disabled:opacity-50">
          Next
        </button>
      </div>
    </main>
  );
};

type NFTListerProps = {
  receiverAddress?: string;
  dropContract: ThirdwebContract;
  tokenId: string;
};

const NFTLister: React.FC<NFTListerProps> = (props: NFTListerProps) => {
  const tokenIdBigInt = BigInt(props.tokenId);
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: props.dropContract,
    tokenId: tokenIdBigInt,
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
      const tokenIdNumber = parseInt(props.tokenId, 10); // Convert tokenId to a number for comparison
      if ([0, 1, 2].includes(tokenIdNumber)) {
        return (0.0011 * ethPrice).toFixed(2); // Multiply and format to 2 decimal places
      } else if ([3, 4, 5].includes(tokenIdNumber)) {
        return (0 * ethPrice).toFixed(2); // Price is 0, but still formatted
      }
    }
    return null; // Fallback in case ethPrice is not available
  };

  return (
    <div className="w-full grid grid-cols-1 gap-4 p-4 border border-solid border-border-tombol rounded-3xl">
      {isNftLoading ? (
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Loading...
        </h2>
      ) : (
        <>
          {nft ? (
            <Link href={`/token/${props.tokenId}`}>
              <MediaRenderer
                client={client}
                src={nft.metadata.image}
                className="rounded-3xl w-full"
              />
            </Link>
          ) : (
            <h2 className="text-left text-sm font-medium text-icon-wording">
              No data available
            </h2>
          )}
          {props.receiverAddress ? (
            <>
              <div className="grid grid-cols-1 gap-2">
                <h2 className="text-left text-base font-semibold text-hitam-judul-body">
                  {nft?.metadata.name}
                </h2>
                {loading ? (
                  <h2 className="text-left text-sm font-medium text-icon-wording">
                    Loading...
                  </h2>
                ) : ethPrice ? (
                  <h2 className="text-left text-sm font-medium text-icon-wording">
                    Price ${calculatePrice()}
                  </h2>
                ) : (
                  <h2 className="text-left text-sm font-medium text-icon-wording">
                    Failed
                  </h2>
                )}
              </div>
              <Link href={`/token/${props.tokenId}`}>
                <button className="w-full rounded-lg p-2 text-back-ground bg-hitam-judul-body text-base font-semibold">
                  {Number(calculatePrice()) > 0 ? "Buy Now" : "Collect Now"}
                </button>
              </Link>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default SouvenirsList;
