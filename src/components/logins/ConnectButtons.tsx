// External libraries
import React from "react";
import { FaWallet } from "react-icons/fa6";
import { ConnectButton } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import {
  avalanche,
  base,
  baseSepolia,
  ethereum,
  optimism,
  zora,
} from "@/config/rantais";
import { tekeks } from "@/config/tekeks";
import { tokeks } from "@/config/tokeks";

const chains = [avalanche, base, baseSepolia, ethereum, optimism, zora];

const ConnectButtons: React.FC = () => {
  return (
    <div id="connected">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Login Bukhari Islamic Art Gallery",
          url: "https://galeri.harmoniistiqlal.com",
          description:
            "Login to Bukhari Islamic Art Gallery in Harmoni Istiqlal.",
          logoUrl: "https://galeri.harmoniistiqlal.com/bukhari-fa-login-02.png",
        }}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          chain: baseSepolia,
          sponsorGas: true,
        }}
        chains={chains}
        supportedTokens={tokeks}
        supportedNFTs={tekeks}
        detailsButton={{
          displayBalanceToken: {
            [base.id]: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
            [baseSepolia.id]: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
          },
          render: () => (
            <button className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
              <FaWallet />
            </button>
          ),
        }}
        detailsModal={{
          // assetTabs: ["token", "nft"],
          assetTabs: [],
        }}
        theme="light"
      />
    </div>
  );
};

export default ConnectButtons;
