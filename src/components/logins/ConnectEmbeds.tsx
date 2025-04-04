// /src/components/logins/ConnectEmbeds.tsx

// External libraries
import React from "react";
import { ConnectEmbed, lightTheme } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { base } from "@/config/rantais";
import { baseSepolia } from "@/config/rantais";

const chains = [base, baseSepolia];

const ConnectEmbeds: React.FC = () => {
  const embedStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
  };

  return (
    <div
      id="logins"
      className="w-full h-auto flex flex-col justify-center items-center">
      <ConnectEmbed
        client={client}
        modalSize="compact"
        header={{
          title: " ",
        }}
        appMetadata={{
          name: "Login Bukhari Islamic Art Gallery",
          url: "https://galeri.harmoniistiqlal.com",
          description:
            "Login to Bukhari Islamic Art Gallery in Harmoni Istiqlal.",
          logoUrl: "https://galeri.harmoniistiqlal.com/logo/oslo.png",
        }}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          chain: base,
          // chain: baseSepolia,
          sponsorGas: true,
        }}
        chains={chains}
        privacyPolicyUrl="/privacy"
        termsOfServiceUrl="/terms"
        showThirdwebBranding={false}
        theme={lightTheme({
          colors: {
            accentButtonBg: "#171717", // Button for Retry & Try Again
            accentButtonText: "#707070", // Button for Retry & Try Again
            accentText: "#171717", // Hyperlink text for Terms & Privacy
            borderColor: "#DFDFDF", // All border color
            // connectedButtonBg: string;
            // connectedButtonBgHover: string;
            // danger: string;
            // inputAutofillBg: string;
            // modalBg: string;
            // modalOverlayBg: string;
            // primaryButtonBg: string;
            // primaryButtonText: string;
            primaryText: "#707070", // Passkey & Connect a Wallet text
            // scrollbarBg: string;
            // secondaryButtonBg: string;
            // secondaryButtonHoverBg: string;
            secondaryButtonText: "#707070", // Google & Apple text
            // secondaryIconColor: string;
            // secondaryIconHoverBg: string;
            // secondaryIconHoverColor: string;
            // secondaryText: string;
            selectedTextBg: "#707070",
            selectedTextColor: "#F9F9F9",
            // separatorLine: string;
            // skeletonBg: string;
            // success: string;
            // tertiaryBg: string;
            // tooltipBg: string;
            // tooltipText: "#707070",
          },
        })}
        style={embedStyle}
      />
    </div>
  );
};

export default ConnectEmbeds;
