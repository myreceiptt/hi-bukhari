// External libraries
import React from "react";
import { base } from "thirdweb/chains";
import { ConnectEmbed } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";

const ConnectEmbeds: React.FC = () => {
  const embedStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "474px",
  };

  return (
    <div>
      <div className="w-full h-auto justify-center items-center py-4">
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
          privacyPolicyUrl="/privacy"
          termsOfServiceUrl="/terms"
          showThirdwebBranding={false}
          style={embedStyle}
        />
      </div>
    </div>
  );
};

export default ConnectEmbeds;
