"use client";

// External libraries
import React from "react";
import Image from "next/image";
import { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { dompets } from "@/config/dompets";
import { client } from "./client";

// Assets
import art from "../../public/bukhari-fa-login-02.png";
import banner from "../../public/bukhari-fa-login-04.png";
import powered from "../../public/bukhari-fa-login-06.png";

import { ErrorBoundary } from "@/components/ErrorBoundary";

const rantais = [ethereum, polygon, base, baseSepolia];

const ConnectEmbedPage: React.FC = () => {
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
              className="z-0 object-contain w-full"
              src={banner}
              alt="Bukhari Islamic Art Banner with Partners Logo."
            />
            <h1 className="flex text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
              Get Ready!
            </h1>
            <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh] pb-[1vh]">
              Register Now to Immerse Yourself in Galeri Harmoni Istiqlal
              Digital Experience
            </h2>
          </div>
          {props.children}
          <div>
            <Image
              className="z-0 object-contain w-full"
              src={powered}
              alt="Bukhari Islamic Art Powered by VOYAGE."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectEmbeds() {
  // Check if wallet is connected
  const account = useActiveAccount();

  return (
    <div className="grid justify-center">
      <div className="flex flex-col items-center mb-20 md:mb-20">
        <div className="max-w-lg w-full h-auto">
          <ConnectEmbed
            client={client}
            chains={rantais}
            wallets={dompets}
            accountAbstraction={{
              factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
              chain: base,
              sponsorGas: true,
            }}
            privacyPolicyUrl="/#"
            termsOfServiceUrl="/#"
            showThirdwebBranding={false}
          />
        </div>
        {account && <ConnectButton client={client} />}
      </div>
    </div>
  );
}

export default ConnectEmbedPage;
