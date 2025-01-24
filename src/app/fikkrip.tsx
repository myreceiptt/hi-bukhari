"use client";

// External libraries
import React from "react";
import Image from "next/image";
import { polygon, base, baseSepolia } from "thirdweb/chains";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import {
  useActiveWallet,
  useAutoConnect,
  useConnect,
  useConnectModal,
  useDisconnect,
} from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

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
      <div className="">
        <SignInLayout>
          <div className="flex items-center pt-3 px-[3rem] w-full">
            <div className="w-full space-y-6">
              {/* Tombol Login */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-slate-100">
                    <Image
                      src="/erc20-icons/mem0ra.png"
                      alt="Google"
                      width={40} // Ganti dengan lebar yang sesuai
                      height={45} // Ganti dengan tinggi yang sesuai
                      className="object-contain"
                    />
                    Log in with Google
                  </button>
                  <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-slate-100">
                    <Image
                      src="/erc20-icons/mem0ra.png"
                      alt="Apple"
                      width={40} // Ganti dengan lebar yang sesuai
                      height={45} // Ganti dengan tinggi yang sesuai
                      className="object-contain"
                    />
                    Log in with Apple
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-slate-100">
                    <Image
                      src="/erc20-icons/mem0ra.png"
                      alt="Facebook"
                      width={40} // Ganti dengan lebar yang sesuai
                      height={45} // Ganti dengan tinggi yang sesuai
                      className="object-contain"
                    />
                    Log in with Facebook
                  </button>
                  <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-slate-100">
                    <Image
                      src="/erc20-icons/mem0ra.png"
                      alt="Twitter"
                      width={40} // Ganti dengan lebar yang sesuai
                      height={45} // Ganti dengan tinggi yang sesuai
                      className="object-contain"
                    />
                    Log in with Twitter
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <hr className="flex-grow border-gray-300" />
                <span className="text-sm text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Form */}
              <div className="space-y-4">
                {/* <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                /> */}
                <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 py-1.5 rounded-xl flex items-center gap-2 w-full shadow-sm hover:bg-slate-100">
                  <Image
                    src="/erc20-icons/mem0ra.png"
                    alt="Twitter"
                    width={40} // Ganti dengan lebar yang sesuai
                    height={45} // Ganti dengan tinggi yang sesuai
                    className="object-contain"
                  />
                  Email Address
                </button>
                <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 py-1.5 rounded-xl flex items-center gap-2 w-full shadow-sm hover:bg-slate-100">
                  <Image
                    src="/erc20-icons/mem0ra.png"
                    alt="Twitter"
                    width={40} // Ganti dengan lebar yang sesuai
                    height={45} // Ganti dengan tinggi yang sesuai
                    className="object-contain"
                  />
                  Phone Number
                </button>
                <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 py-1.5 rounded-xl flex items-center gap-2 w-full shadow-sm hover:bg-slate-100">
                  <Image
                    src="/erc20-icons/mem0ra.png"
                    alt="Twitter"
                    width={40} // Ganti dengan lebar yang sesuai
                    height={45} // Ganti dengan tinggi yang sesuai
                    className="object-contain"
                  />
                  Passkey
                </button>
                <button className="bg-transparent border text-sm border-gray-300 text-gray-700 px-4 py-1.5 rounded-xl flex items-center gap-2 w-full shadow-sm hover:bg-slate-100">
                  <Image
                    src="/erc20-icons/mem0ra.png"
                    alt="Twitter"
                    width={40} // Ganti dengan lebar yang sesuai
                    height={45} // Ganti dengan tinggi yang sesuai
                    className="object-contain"
                  />
                  Connect Wallet
                </button>
              </div>

              {/* Footer */}
              <div className="text-xs text-gray-500 text-left">
                By connecting, you agree to the{" "}
                <a href="/terms" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>{" "}
                &{" "}
                <a href="/privacy" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
          {/* <ConnectEmbeds /> */}
        </SignInLayout>
      </div>
    </ErrorBoundary>
  );
};

function SignInLayout(props: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:grid-cols-[55%_45%]">
      <div className="relative h-screen hidden lg:block">
        <Image
          src={art}
          alt="Bukhari Islamic Art Background for Login Page."
          className="absolute inset-0 w-full h-full object-fill"
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
            <h1 className="flex text-left text-xl md:text-2xl lg:text-3xl xl:text-5xl font-normal tracking-tighter justify-start align-middle px-[3rem] pb-4">
              Get Ready!
            </h1>
            <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg tracking-tighter justify-start align-middle px-[3rem]">
              Register now to immerse yourself in Galeri Harmoni Istiqlal
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

// Create a custom login flow with social login
function GoogleFlow() {
  // Get active account and wallet
  const account = useActiveAccount();
  const connectedWallet = useActiveWallet();

  // Get connect and disconnect functions
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  // Create In-App Wallet with social login and connect
  const handleLogin = async () => {
    await connect(async () => {
      const wallet = inAppWallet();
      await wallet.connect({
        client: client,
        strategy: "google",
      });
      return wallet;
    });
  };

  return (
    <div className="flex flex-col items-center mb-10 md:mb-10">
      {account && connectedWallet ? (
        <button
          className="bg-red-500 text-white-400 px-4 rounded-xl"
          onClick={() => disconnect(connectedWallet)}>
          Disconnect
        </button>
      ) : (
        <>
          <button
            className="bg-transparent px-4 rounded-xl border border-gray-600"
            onClick={handleLogin}>
            Log in with Google
          </button>
        </>
      )}
    </div>
  );
}

// Create a custom login flow with social login
function AppleFlow() {
  // Get active account and wallet
  const account = useActiveAccount();
  const connectedWallet = useActiveWallet();

  // Get connect and disconnect functions
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  // Create In-App Wallet with social login and connect
  const handleLogin = async () => {
    await connect(async () => {
      const wallet = inAppWallet();
      await wallet.connect({
        client: client,
        strategy: "apple",
      });
      return wallet;
    });
  };

  return (
    <div className="flex flex-col items-center mb-10 md:mb-10">
      {account && connectedWallet ? (
        <button
          className="bg-red-500 text-white-400 px-4 rounded-xl"
          onClick={() => disconnect(connectedWallet)}>
          Disconnect
        </button>
      ) : (
        <>
          <button
            className="bg-transparent px-4 rounded-xl border border-gray-600"
            onClick={handleLogin}>
            Log in with Apple
          </button>
        </>
      )}
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
