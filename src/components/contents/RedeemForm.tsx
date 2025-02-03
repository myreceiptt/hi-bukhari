"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { ClaimButton } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
// import { bonVoyageDrop } from "@/config/contracts";
import { b0nV0yageDrop } from "@/config/contracts";

const ClaimForm: React.FC = () => {
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
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

  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* Left Column: Image */}
      <div className="rounded-3xl overflow-hidden w-full">
        <Image
          src="/images/bon-voyage.gif"
          alt="BON VOYAGE Token Illustration"
          width={747}
          height={747}
          className="rounded-3xl w-full"
          unoptimized
        />
      </div>

      {/* Right Column: Form */}
      <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          Claim Your $BON Dosh
        </h1>
        <div className="flex flex-row gap-2">
          <h1 className="text-left text-sm font-medium text-icon-wording">
            by
          </h1>
          <span className="text-3xl leading-6 text-icon-wording">&#9673;</span>
          <h1 className="text-left text-sm font-medium text-icon-wording">
            <Link href="https://voyage.co.id/" target="_blank">
              VOYAGE.CO.ID
            </Link>
          </h1>
        </div>
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Redeem your coins rewards by claiming the $BON Dosh, the ERC20 tokens
          on the {b0nV0yageDrop.chain.name} blockchain using your Smart Account
          wallet.
        </h2>

        {/* Success or Error Messages */}
        {pesanTunggu && (
          <h4 className="text-left text-sm font-normal text-hitam-judul-body">
            <code className="px-1 py-0.5 rounded font-normal text-hitam-judul-body">
              {pesanTunggu}
            </code>
          </h4>
        )}
        {pesanSukses && (
          <h4 className="text-left text-sm font-normal text-hitam-judul-body">
            <code className="px-1 py-0.5 rounded font-normal text-hitam-judul-body">
              {pesanSukses}
            </code>
          </h4>
        )}
        {pesanGagal && (
          <h4 className="text-left text-sm font-normal text-hitam-judul-body">
            <code className="px-1 py-0.5 rounded font-normal text-hitam-judul-body">
              {pesanGagal}
            </code>
          </h4>
        )}

        {/* Amount Input */}
        <div className="w-full grid grid-cols-2">
          <label
            htmlFor="amount"
            className="w-full text-left text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body place-content-center">
            Amount (1-11)
          </label>
          <div className="w-full flex bg-box-icon items-center justify-center px-4 py-2 rounded-lg">
            <FaSackDollar className="w-5 h-5 text-hitam-judul-body" />
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min="1"
              max="11"
              className="ml-2 w-full bg-transparent outline-none text-xs md:text-sm text-hitam-judul-body placeholder-icon-wording"
            />
          </div>
        </div>

        {/* Claim Button */}
        <ClaimButton
          unstyled
          className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
            ${
              isProcessing
                ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body"
            }
          `}
          contractAddress={b0nV0yageDrop.address}
          chain={b0nV0yageDrop.chain}
          client={client}
          claimParams={{
            type: "ERC20",
            quantity: amount,
          }}
          disabled={isProcessing}
          onClick={() => {
            setIsProcessing(true);
            setPesanTunggu("Bismillah! Processing...");
            setPesanSukses(null);
            setPesanGagal(null);
          }}
          onTransactionSent={() => {
            setIsProcessing(true);
            setPesanTunggu("Bismillah! Processing...");
            setPesanSukses(null);
            setPesanGagal(null);
          }}
          onError={(error) => {
            setPesanGagal(`${error.message}`);
            setPesanSukses(null);
            setIsProcessing(false);
            setPesanTunggu(null);
          }}
          onTransactionConfirmed={async () => {
            setPesanSukses("Alhamdulillah! Successful!");
            setPesanGagal(null);
            setIsProcessing(false);
            setPesanTunggu(null);
          }}>
          Claim Now
        </ClaimButton>
      </div>
    </div>
  );
};

export default ClaimForm;
