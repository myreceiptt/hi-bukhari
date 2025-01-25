"use client";

// External libraries
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";

// Components libraries
import TokenCheck from "./OwnershipCheck";
import ClaimForm from "./RedeemForm";
import AccessMessage from "./AccessMessage";
import Loader from "./ReusableLoader";

const CoinRedeem: React.FC = () => {
  const router = useRouter();
  const smartAccount = useActiveAccount();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  if (!smartAccount?.address) {
    return (
      <main className="grid place-items-center h-screen">
        <h2 className="text-center text-lg font-semibold">
          Please log in first.
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <TokenCheck
        userAddress={smartAccount.address}
        onAccessChange={setHasAccess}
      />
      {hasAccess === null && <Loader message="Checking Access..." />}
      {hasAccess === false && (
        <AccessMessage
          onRedirect={() => router.push("/free")}
          message="You don't have access."
        />
      )}
      {hasAccess && <ClaimForm />}
    </main>
  );
};

export default CoinRedeem;
