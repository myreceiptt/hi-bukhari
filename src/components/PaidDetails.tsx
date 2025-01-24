"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { balanceOf, getNFT } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { bukhariVirtualCollectibles } from "@/config/contracts";
import { client } from "@/config/client";
import { ThirdwebContract } from "thirdweb";
import { FetchEthereumPrice } from "@/config/ethers";

const PaidSouvenirs: React.FC = () => {
  const smartAccount = useActiveAccount();
  const [pesanSukses, setPesanSukses] = React.useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = React.useState<string | null>(null);

  return (
    <main className="grid gap-4 place-items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal">
          Exclusive Virtual Collectibles
        </h1>
        {pesanSukses && (
          <h4 className="px-1 py-0.5 rounded text-base font-semibold text-blue-500 text-center">
            {pesanSukses}
          </h4>
        )}
        {pesanGagal && (
          <h4 className="bg-foreground dark:bg-background px-1 py-0.5 rounded text-base font-[family-name:var(--font-geist-mono)] font-semibold text-red-500">
            {pesanGagal}
          </h4>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <NFTClaimer
          receiverAddress={smartAccount?.address}
          dropContract={bukhariVirtualCollectibles}
          tokenId={0n}
          padaSukses={() => {
            setPesanSukses("Claim successful!");
            setPesanGagal(null);
          }}
          padaGagal={(error) => {
            setPesanGagal(`Failed: ${error.message}`);
            setPesanSukses(null);
          }}
        />
        <NFTClaimer
          receiverAddress={smartAccount?.address}
          dropContract={bukhariVirtualCollectibles}
          tokenId={1n}
          padaSukses={() => {
            setPesanSukses("Claim successful!");
            setPesanGagal(null);
          }}
          padaGagal={(error) => {
            setPesanGagal(`Failed: ${error.message}`);
            setPesanSukses(null);
          }}
        />
        <NFTClaimer
          receiverAddress={smartAccount?.address}
          dropContract={bukhariVirtualCollectibles}
          tokenId={2n}
          padaSukses={() => {
            setPesanSukses("Claim successful!");
            setPesanGagal(null);
          }}
          padaGagal={(error) => {
            setPesanGagal(`Failed: ${error.message}`);
            setPesanSukses(null);
          }}
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Link href="/">
          <button
            type="button"
            className="rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

type NFTClaimerProps = {
  receiverAddress?: string;
  dropContract: ThirdwebContract;
  tokenId: bigint;
  padaSukses: () => void;
  padaGagal: (error: Error) => void;
};

const NFTClaimer: React.FC<NFTClaimerProps> = (props: NFTClaimerProps) => {
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: props.dropContract,
    tokenId: props.tokenId,
  });
  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: props.dropContract,
    owner: props.receiverAddress!,
    tokenId: props.tokenId,
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
      return (0.0011 * ethPrice).toFixed(2); // Multiply and format to 2 decimal places
    }
    return null;
  };

  return (
    <>
      <div className="w-full p-2 rounded-3xl">
        {isNftLoading ? (
          <h2 className="text-center text-xs font-normal">
            <code className="px-1 py-0.5 rounded font-normal">Loading...</code>
          </h2>
        ) : (
          <>
            {nft ? (
              <MediaRenderer
                client={client}
                src={nft.metadata.image}
                className="rounded-3xl w-full"
              />
            ) : null}
            {props.receiverAddress ? (
              <>
                <div className="grid grid-col p-2">
                  <h2 className="text-center text-xs font-normal uppercase">
                    {nft?.metadata.name}
                  </h2>
                  <h2 className="text-center text-xs font-normal">
                    {loading ? (
                      <h2 className="text-center text-xs font-normal">
                        <code className="px-1 py-0.5 rounded font-normal">
                          Loading...
                        </code>
                      </h2>
                    ) : ethPrice ? (
                      `$${calculatePrice()} on ${props.dropContract.chain.name}`
                    ) : (
                      <h2 className="text-center text-xs font-normal">
                        <code className="px-1 py-0.5 rounded font-normal">
                          Failed
                        </code>
                      </h2>
                    )}
                  </h2>
                  <h2 className="text-center text-xs font-normal">
                    Own {ownedNfts?.toString() || "0"} Edition
                  </h2>

                  <ClaimButton
                    unstyled
                    className="rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1"
                    contractAddress={props.dropContract.address}
                    chain={props.dropContract.chain}
                    client={props.dropContract.client}
                    claimParams={{
                      type: "ERC1155",
                      quantity: 1n,
                      tokenId: props.tokenId,
                    }}
                    onError={(error) => {
                      props.padaGagal(error);
                    }}
                    onTransactionConfirmed={async () => {
                      props.padaSukses();
                    }}>
                    COLLECT IT!
                  </ClaimButton>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default PaidSouvenirs;
