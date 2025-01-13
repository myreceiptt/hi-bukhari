"use client";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { client } from "./client";
import { SignInLayout } from "@/components/SignInLayout";

const ConnectEmbedPage: React.FC = () => {
  return (
    <div className="p-2">
      <SignInLayout>
        <ConnectEmbeds />
      </SignInLayout>
    </div>
  );
};

function ConnectEmbeds() {
  return (
    <div className="grid justify-center">
      <CustomThemeConnectEmbed />
    </div>
  );
}

// Customize modal theme in ConnectEmbed
function CustomThemeConnectEmbed() {
  // Check if wallet is connected
  const account = useActiveAccount();

  const dompets = [
    inAppWallet({
      auth: {
        options: ["google", "email", "passkey", "apple"],
      },
    }),
    createWallet("io.metamask"),
    createWallet("app.phantom"),
    createWallet("com.okex.wallet"),
    createWallet("com.coinbase.wallet"),
  ];

  return (
    <div className="flex flex-col items-center mb-20 md:mb-20">
      <p className="text-base mb-4 md:mb-4">Social Login</p>
      <ConnectEmbed
        client={client}
        // chain={baseSepolia}
        chains={[ethereum, polygon, base, baseSepolia]}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          chain: baseSepolia,
          sponsorGas: true,
        }}
        // Customize modal theme
        style={{}}
        // theme={darkTheme({
        //   colors: {
        //     primaryText: "#F6F8FF",
        //     secondaryText: "#2B333D",
        //     accentText: "#F6F8FF",
        //     modalOverlayBg: "#DAE8FC",
        //     modalBg: "#010101",
        //     accentButtonBg: "#2469DA",
        //     accentButtonText: "#F6F8FF",
        //     secondaryButtonBg: "#010101",
        //     secondaryButtonText: "#F6F8FF",
        //     secondaryButtonHoverBg: "#2469DA",
        //     separatorLine: "#2B333D",
        //     borderColor: "#2B333D",

        //     primaryButtonBg: "#2469DA",
        //     primaryButtonText: "#F6F8FF",

        //     connectedButtonBg: "#010101",
        //     connectedButtonBgHover: "#2469DA",
        //   },
        //Customize font
        //   fontFamily: "Arial Black",
        // })}
        privacyPolicyUrl="/#"
        termsOfServiceUrl="/#"
        showThirdwebBranding={false}
        // connectModal={{
        //   size: "compact",
        //   title: "Please LOG IN!",
        //   titleIcon: "/memora-logo.gif",
        //   showThirdwebBranding: false,
        //   termsOfServiceUrl: "/terms",
        //   privacyPolicyUrl: "/policy",
        // }}
      />
      {/* Show ConnectButton in connect state when wallet is connected */}
      {account && <ConnectButton client={client} />}
    </div>
  );
}

export default ConnectEmbedPage;
