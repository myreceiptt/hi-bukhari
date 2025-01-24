// components/DynamicLoginPage.tsx
import React from "react";
import Image from "next/image";
import { polygon, base, baseSepolia } from "thirdweb/chains";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/config/client";
import { detailsButton } from "@/config/details";
import { tokeks } from "@/config/tokeks";

import SignInLayout from "./SignInLayout";
import ConnectEmbeds from "./ConnectEmbeds";
import { ErrorBoundary } from "./ErrorBoundary";

const rantais = [polygon, base, baseSepolia];

interface DynamicLoginPageProps {
  ContentComponent: React.FC;
}

const DynamicLoginPage: React.FC<DynamicLoginPageProps> = ({
  ContentComponent,
}) => {
  const account = useActiveAccount();

  if (account) {
    return (
      <div className="flex flex-col gap-4 px-0 md:px-20 m-4 items-center h-screen">
        <div>
          <Image
            src="/bukhari-fa-login-04.png"
            alt="Bukhari Islamic Art Banner with Partners Logo."
            width={474}
            height={474}
            className="z-0 object-contain w-full"
            priority
          />
        </div>
        <div id="connected">
          <ConnectButton
            client={client}
            chains={rantais}
            supportedTokens={tokeks}
            detailsButton={detailsButton}
            detailsModal={{
              assetTabs: ["token", "nft"],
            }}
            supportedNFTs={{
              [polygon.id]: ["0x0015C1dEb48c3aD0f5427cBbE81Cb36366F1621D"],
              [base.id]: ["0x1925B991C5e2eC45BA1f34786BAd405d58202140"],
              [baseSepolia.id]: [
                "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
                "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1",
              ],
            }}
          />
        </div>
        <div className="flex flex-col gap-4 content-normal px-0 md:px-20 m-4">
          <ContentComponent />
        </div>
        <div>
          <Image
            src="/bukhari-fa-login-06.png"
            alt="Bukhari Islamic Art Powered by VOYAGE."
            width={474}
            height={474}
            className="z-0 object-contain w-full"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="p-2">
        <SignInLayout>
          <ConnectEmbeds />
        </SignInLayout>
      </div>
    </ErrorBoundary>
  );
};

export default DynamicLoginPage;
