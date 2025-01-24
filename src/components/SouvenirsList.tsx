"use client";

// External libraries
import React from "react";
import Link from "next/link";
import { ThirdwebContract } from "thirdweb";
import { balanceOf, getNFT } from "thirdweb/extensions/erc1155";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { bukhariVirtualCollectibles } from "@/config/contracts";
import { client } from "@/config/client";

type SouvenirsListProps = {
  title: string;
  tokenIds: string[];
};

const SouvenirsList: React.FC<SouvenirsListProps> = ({ title, tokenIds }) => {
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
      <div className="flex flex-col gap-2 items-center w-full">
        <Link href="/">
          <button
            type="button"
            className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1">
            Back to Home
          </button>
        </Link>
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
              <h2 className="text-center text-xs font-normal">
                On {props.dropContract.chain.name}
              </h2>
              <h2 className="text-center text-xs font-normal">
                Own {ownedNfts?.toString() || "0"} Edition
              </h2>

              <Link href={`/free/${props.tokenId}`}>
                <button className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1">
                  VIEW DETAILS!
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
