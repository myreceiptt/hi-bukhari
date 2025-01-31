"use client";

// External libraries
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThirdwebContract } from "thirdweb";
import { balanceOf, getNFT } from "thirdweb/extensions/erc1155";
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
  title: string;
  tokenIds: string[];
};

const SouvenirsList: React.FC<SouvenirsListProps> = ({ title, tokenIds }) => {
  const router = useRouter();
  const backButton = () => {
    router.back();
  };
  const smartAccount = useActiveAccount();

  return (
    <main className="grid gap-4 place-items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tokenIds.map((tokenId) => (
          <NFTLister
            key={tokenId}
            receiverAddress={smartAccount?.address}
            dropContract={bukhariVirtualCollectibles}
            tokenId={tokenId}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2 items-center w-full">
        <button
          type="button"
          className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1"
          onClick={backButton}>
          &lArr; Go Back &lArr;
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
  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: props.dropContract,
    owner: props.receiverAddress!,
    tokenId: tokenIdBigInt,
    queryOptions: { enabled: !!props.receiverAddress },
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
    <div className="w-full p-2 rounded-3xl">
      {isNftLoading ? (
        <h2 className="text-center text-xs font-normal">
          <code className="px-1 py-0.5 rounded font-normal">Loading...</code>
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
          ) : null}
          {props.receiverAddress ? (
            <div className="grid grid-cols-1 p-2">
              <h2 className="text-center text-xs font-normal uppercase">
                {nft?.metadata.name}
              </h2>
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
                  <code className="px-1 py-0.5 rounded font-normal">
                    Failed
                  </code>
                </h2>
              )}
              <h2 className="text-center text-xs font-normal">
                Own {ownedNfts?.toString() || "0"} Edition on{" "}
                {props.dropContract.chain.name}
              </h2>

              <Link href={`/token/${props.tokenId}`}>
                <button className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1">
                  VIEW DETAILS
                </button>
              </Link>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default SouvenirsList;
