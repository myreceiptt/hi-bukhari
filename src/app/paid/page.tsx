"use client";

// External libraries
import React from "react";
import Image from "next/image";
import { polygon, base, baseSepolia } from "thirdweb/chains";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { dompets } from "@/config/dompets";
import { tokeks } from "@/config/tokeks";
import { client } from "@/config/client";

// Components
import { ErrorBoundary } from "@/components/ErrorBoundary";
import FeaturedCards from "@/components/FeaturedCards";
import PaidSouvenirs from "@/components/PaidSouvenirs";

// Assets
import art from "../../../public/bukhari-fa-login-02.png";
import banner from "../../../public/bukhari-fa-login-04.png";
import powered from "../../../public/bukhari-fa-login-06.png";

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
        <div>
          <ConnectButton
            client={client}
            chains={rantais}
            supportedTokens={tokeks}
          />
        </div>
        <div className="flex flex-col gap-4 content-normal px-0 md:px-20 m-4">
          <PaidSouvenirs />
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
      <div className="w-full h-auto justify-center items-center py-4">
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
            chain: baseSepolia,
            sponsorGas: true,
          }}
          privacyPolicyUrl="/#"
          termsOfServiceUrl="/#"
          showThirdwebBranding={false}
        />
      </div>
    </div>
  );
}

export default ConnectEmbedPage;
