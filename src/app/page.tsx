"use client";

// External libraries
import React from "react";
import Image from "next/image";
import { polygon, base, baseSepolia } from "thirdweb/chains";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { detailsButton } from "@/config/details";
import { dompets } from "@/config/dompets";
import { tokeks } from "@/config/tokeks";
import { client } from "@/config/client";

// Components
import { ErrorBoundary } from "@/components/ErrorBoundary";
import FeaturedCards from "@/components/FeaturedCards";

// Assets
import art from "../../public/bukhari-fa-login-02.png";
import banner from "../../public/bukhari-fa-login-04.png";
import powered from "../../public/bukhari-fa-login-06.png";

const rantais = [polygon, base, baseSepolia];

const ConnectEmbedPage: React.FC = () => {
  // Check if wallet is connected
  const account = useActiveAccount();

  // If a wallet is connected, show only the ConnectButton in the center
  if (account) {
    return (
      <div className="flex flex-col gap-4 px-0 md:px-20 m-4 items-center h-screen">
        <div>
          <Image
            src={banner}
            alt="Bukhari Islamic Art Banner with Partners Logo."
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
              [polygon.id]: [
                "0x0015C1dEb48c3aD0f5427cBbE81Cb36366F1621D", // MEMORA ONE
              ],
              [base.id]: [
                "0x1925B991C5e2eC45BA1f34786BAd405d58202140", // MEMORA ONE
              ],
              [baseSepolia.id]: [
                "0xc3046681149f96746b362a64472fD4B1cd1E33B2", // MEMORA ZER0
                "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1", // Bukhari Virtual Collectibles
              ],
            }}
          />
        </div>
        <div className="flex flex-col gap-4 content-normal px-0 md:px-20 m-4">
          <FeaturedCards />
        </div>
        <div>
          <Image
            src={powered}
            alt="Bukhari Islamic Art Powered by VOYAGE."
            className="z-0 object-contain w-full"
            priority
          />
        </div>
      </div>
    );
  }

  // Default UI when the wallet is not connected
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

function SignInLayout(props: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      <div className="relative h-screen hidden lg:block">
        <Image
          src={art}
          alt="Bukhari Islamic Art Background for Login Page."
          className="absolute inset-0 w-full h-full object-contain"
          priority
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <div>
            <Image
              src={banner}
              alt="Bukhari Islamic Art Banner with Partners Logo."
              className="z-0 object-contain w-full"
              priority
            />
            <h1 className="flex text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
              Get Ready!
            </h1>
            <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
              Register Now to Immerse Yourself in Galeri Harmoni Istiqlal
              Digital Experience
            </h2>
          </div>
          {props.children}
          <div>
            <Image
              src={powered}
              alt="Bukhari Islamic Art Powered by VOYAGE."
              className="z-0 object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectEmbeds() {
  return (
    <div>
      <div className="w-full h-auto justify-center items-center p-4">
        <ConnectEmbed
          client={client}
          modalSize="compact"
          appMetadata={{
            name: "Login Bukhari Islamic Art Gallery",
            url: "https://galeri.harmoniistiqlal.com",
            description:
              "Login to Bukhari Islamic Art Gallery in Harmoni Istiqlal.",
            logoUrl:
              "https://galeri.harmoniistiqlal.com/bukhari-fa-login-02.png",
          }}
          wallets={dompets}
          accountAbstraction={{
            factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
            chain: base,
            sponsorGas: true,
          }}
          privacyPolicyUrl="/#"
          termsOfServiceUrl="/#"
          showThirdwebBranding={false}
          style={{
            border: "transparent",
            padding: "11px",
          }}
          className="border border-gray-300 rounded-lg max-w-sm w-full text-zinc-950"
        />
      </div>
    </div>
  );
}

export default ConnectEmbedPage;
