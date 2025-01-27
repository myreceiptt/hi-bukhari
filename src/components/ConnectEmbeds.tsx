// External libraries
import React from "react";
import Image from "next/image";
import { ConnectEmbed, lightTheme } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { base } from "@/config/rantais";

// Logins libraries
import GoogleFlow from "./logins/Google";

const ConnectEmbeds: React.FC = () => {
  const embedStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    // maxWidth: "474px",
  };

  return (
    <div
      id="logins"
      className="w-full h-auto flex flex-col justify-center items-center py-4">
      {/* <div className="w-full"> */}
      {/* Tombol Login */}
      {/* <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GoogleFlow />
            <button className="flex gap-4 items-center justify-start bg-transparent border border-gray-300 text-sm text-zinc-950 px-4 rounded-lg shadow-sm hover:bg-slate-100">
              <Image
                src="/logos/apple.svg"
                alt="Apple"
                width={27}
                height={27}
                className="object-contain"
              />
              Apple Login
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
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
      </div> */}
      <ConnectEmbed
        client={client}
        modalSize="compact"
        header={{
          title: "",
          // titleIcon: "/logo/oslo.png",
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
          sponsorGas: true,
        }}
        privacyPolicyUrl="/privacy"
        termsOfServiceUrl="/terms"
        showThirdwebBranding={false}
        theme={lightTheme({
          colors: {
            // accentButtonBg: string;
            // accentButtonText: string;
            // accentText: string;
            // borderColor: string;
            // connectedButtonBg: string;
            // connectedButtonBgHover: string;
            // danger: string;
            // inputAutofillBg: string;
            // modalBg: string;
            // modalOverlayBg: string;
            // primaryButtonBg: string;
            // primaryButtonText: string;
            primaryText: "#707070",
            // scrollbarBg: string;
            // secondaryButtonBg: string;
            // secondaryButtonHoverBg: string;
            secondaryButtonText: "#707070",
            // secondaryIconColor: string;
            // secondaryIconHoverBg: string;
            // secondaryIconHoverColor: string;
            secondaryText: "#707070",
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
