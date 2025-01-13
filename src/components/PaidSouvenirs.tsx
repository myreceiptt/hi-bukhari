"use client";

import React from "react";
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

const PaidSouvenirs: React.FC = () => {
  const smartAccount = useActiveAccount();
  const [pesanSukses, setPesanSukses] = React.useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = React.useState<string | null>(null);

  const [quantity, setQuantity] = React.useState<bigint>(1n);
  return (
    <main className="grid grid-col gap-4 item-center">
      <div className="flex flex-col gap-2 item-center">
        <h1 className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal">
          Affordable Exclusive Digital Souvenir
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 content-center">
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
  return (
    <>
      <div className="w-full justify-items-center p-2 rounded-3xl">
        {isNftLoading ? (
          <h2 className="text-center text-lg font-normal">
            <code className="px-1 py-0.5 rounded font-normal">Loading...</code>
          </h2>
        ) : (
          <>
            {nft ? (
              <MediaRenderer
                client={client}
                src={nft.metadata.image}
                className="rounded-3xl w-full max-w-xs"
              />
            ) : null}
            {props.receiverAddress ? (
              <>
                <div className="grid grid-col p-2">
                  <h2 className="text-center text-xs font-normal uppercase">
                    {nft?.metadata.name}
                  </h2>
                  <h2 className="text-center text-xs font-normal">
                    0.0011 $ETH / EDITION
                  </h2>
                  <h2 className="text-center text-sm font-normal">
                    You own {ownedNfts?.toString() || "0"} edition on{" "}
                    {props.dropContract.chain.name}
                  </h2>
                </div>
                <ClaimButton
                  unstyled
                  className="rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out items-center justify-center text-lg leading-9 font-normal uppercase"
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
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default PaidSouvenirs;
