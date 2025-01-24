"use client";

// External libraries
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getNFT, balanceOf } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { bukhariVirtualCollectibles } from "@/config/contracts";
import { client } from "@/config/client";

const SouvenirDetails: React.FC = () => {
  const router = useRouter();
  const params = useParams();
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
      <div className="w-auto md:w-3/4 grid grid-cols-1 gap-2 items-center">
        <h1 className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal">
          {nft?.metadata.name || "Souvenir Details"}
        </h1>
        {pesanSukses && (
          <h4 className="px-1 py-0.5 rounded text-base font-semibold text-blue-500 text-center">
            {pesanSukses}
          </h4>
        )}
        {pesanGagal && (
          <h4 className="px-1 py-0.5 rounded text-base font-semibold text-red-500 text-center">
            {pesanGagal}
          </h4>
        )}
        {nft ? (
          <MediaRenderer
            client={client}
            src={nft.metadata.image}
            className="rounded-3xl w-full"
          />
        ) : (
          <h2 className="text-center text-xs font-normal">No data available</h2>
        )}
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-center text-xs font-normal">
            Owned: {ownedNfts?.toString() || "0"} Edition(s)
          </h2>
          <h2 className="text-center text-xs font-normal">
            Chain: {bukhariVirtualCollectibles.chain.name}
          </h2>

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
        </div>
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

export default SouvenirDetails;
