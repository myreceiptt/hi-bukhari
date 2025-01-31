"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ClaimButton } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
// import { bonVoyageDrop } from "@/config/contracts";
import { b0nV0yageDrop } from "@/config/contracts";

const ClaimForm: React.FC = () => {
  const router = useRouter();
  const backButton = () => {
    router.back();
  };

  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  const [amount, setAmount] = useState<string>("1");
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the input is a number and within the range 1 to 11
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 11) {
        setAmount(value); // Valid number within range
      } else if (value === "") {
        setAmount(""); // Allow empty input for clearing the field
      }
    }
  };

  return (
    <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Left Column: Image */}
      <div className="rounded-3xl overflow-hidden w-full">
        <Image
          src="/images/bon-voyage.gif"
          alt="BON VOYAGE Token Illustration"
          width={747}
          height={747}
          className="rounded-3xl w-full object-cover bg-zinc-950"
        />
      </div>

      {/* Right Column: Form */}
      <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start justify-center h-full">
        <h1 className="text-center lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          Claim Your $BON Dosh
        </h1>
        <h1 className="text-center lg:text-left text-xs font-normal">
          by &#9673;{" "}
          <Link href="https://voyage.co.id/" target="_blank">
            VOYAGE.CO.ID
          </Link>
        </h1>
        <h2 className="text-center lg:text-left text-xs font-normal">
          Redeem your coins rewards by claiming the $BON Dosh, the ERC20 tokens
          on the {b0nV0yageDrop.chain.name} blockchain using your Smart Account
          wallet.
        </h2>

        {/* Success or Error Messages */}
        {pesanSukses && (
          <h4 className="text-center text-xs font-normal">
            <code className="px-1 py-0.5 rounded font-semibold text-blue-500">
              {pesanSukses}
            </code>
          </h4>
        )}
        {pesanGagal && (
          <h4 className="text-center text-xs font-normal">
            <code className="px-1 py-0.5 rounded font-semibold text-red-500">
              {pesanGagal}
            </code>
          </h4>
        )}

        {/* Amount Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-center text-xs font-normal">
            Amount to Claim (1-11)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="1"
            max="11"
            className="w-full p-3 text-center text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        {/* Claim Button */}
        <ClaimButton
          unstyled
          className="w-full rounded-lg p-2 border-2 border-solid border-zinc-950 text-zinc-950 bg-neutral-200 text-sm leading-4 font-normal uppercase my-1"
          contractAddress={b0nV0yageDrop.address} // contract address of the Token Drop
          chain={b0nV0yageDrop.chain}
          client={client}
          claimParams={{
            type: "ERC20",
            quantity: amount,
          }}
          onError={(error) => {
            setPesanGagal(`${error.message}`);
            setPesanSukses(null);
          }}
          onTransactionConfirmed={async () => {
            setPesanSukses("Claim successful!");
            setPesanGagal(null);
          }}
          payModal={{
            metadata: {
              name: "Van Gogh Starry Night",
              image: "https://unsplash.com/starry-night.png",
            },
          }}>
          CLAIM IT!
        </ClaimButton>

        {/* Back Button */}
        <button
          type="button"
          className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1"
          onClick={backButton}>
          &lArr; Go Back &lArr;
        </button>
      </div>
    </div>
  );
};

export default ClaimForm;
