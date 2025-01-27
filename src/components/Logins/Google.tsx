"use client";

// External libraries
import Image from "next/image";
import { useActiveAccount, useConnect } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

// Blockchain configurations
import { client } from "@/config/client";
import { base } from "@/config/rantais";

// Login flow using Googledfscx
export default function GoogleFlow() {
  // Get active account and wallet
  const account = useActiveAccount();

  // Get connect and disconnect functions
  const { connect } = useConnect();

  // Create In-App Wallet with social login and connect
  const handleLogin = async () => {
    await connect(async () => {
      const wallet = inAppWallet({
        smartAccount: {
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          chain: base,
          sponsorGas: true,
        },
        metadata: {
          image: {
            src: "/logo/oslo.png",
            alt: "My logo",
            width: 100,
            height: 100,
          },
        },
      });
      const account = await wallet.connect({
        client: client,
        chain: base,
        strategy: "google",
      });
      return wallet;
    });
  };

  return (
    <>
      <button
        className="flex gap-4 items-center justify-start bg-transparent border border-gray-300 text-sm text-zinc-950 px-4 rounded-lg shadow-sm hover:bg-slate-100"
        onClick={handleLogin}>
        <Image
          src="/logos/google.svg"
          alt="Apple"
          width={27}
          height={27}
          className="object-contain"
        />
        Google Login
      </button>
    </>
  );
}
