// External libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { detailsButton } from "@/config/details";
import { polygon, base, baseSepolia } from "@/config/rantais";
import { tekeks } from "@/config/tekeks";
import { tokeks } from "@/config/tokeks";

// Components libraries
import ConnectEmbeds from "./ConnectEmbeds";
import { ErrorBoundary } from "./ErrorBoundary";
import SignInLayout from "./SignInLayout";

const chains = [polygon, base, baseSepolia];

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
        <div id="headers">
          <Link href="/">
            <Image
              src="/bukhari-fa-login-04.png"
              alt="Bukhari Islamic Art Banner with Partners Logo."
              width={474}
              height={474}
              className="z-0 object-contain w-full"
              priority
            />
          </Link>
        </div>
        <div id="connected">
          <ConnectButton
            client={client}
            chains={chains}
            supportedTokens={tokeks}
            detailsButton={detailsButton}
            detailsModal={{
              assetTabs: ["token", "nft"],
            }}
            supportedNFTs={tekeks}
          />
        </div>
        <div className="flex flex-col gap-4 content-normal px-0 md:px-20 m-4">
          <ContentComponent />
        </div>
        <div id="footers">
          <Link href="https://voyage.co.id/" target="_blank">
            <Image
              src="/bukhari-fa-login-06.png"
              alt="Bukhari Islamic Art Powered by VOYAGE."
              width={474}
              height={474}
              className="z-0 object-contain w-full"
              priority
            />
          </Link>
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
