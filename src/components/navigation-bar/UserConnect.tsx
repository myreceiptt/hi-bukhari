"use client";

import { client } from "@/consts/client";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";

const dompets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "email",
        "passkey",
        "apple",
        "facebook",
        "x",
        "telegram",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];

export function UserConnect() {
  return (
    <>
      <ConnectButton
        client={client}
        accountAbstraction={{
          factoryAddress: "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468",
          chain: base,
          gasless: true,
        }}
        chains={[ethereum, polygon, base, baseSepolia]}
        supportedTokens={{
          [ethereum.id]: [
            {
              address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
              name: "USD Coin",
              symbol: "USDC",
              icon: "/erc20-icons/usdc.png",
            },
          ],
          [polygon.id]: [
            {
              address: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df",
              name: "OiOi Token",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
            {
              address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
              name: "USD Coin",
              symbol: "USDC",
              icon: "/erc20-icons/usdc.png",
            },
          ],
          [base.id]: [
            {
              address: "0xba0032620d88D9b16752CbDE75593c080C3d38de",
              name: "OiOi Token",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
            {
              address: "0xAbb6f5F95A11a4c91a409074B30e4523B4E100fb",
              name: "MEMORA Token",
              symbol: "MMR",
              icon: "/erc20-icons/memora.png",
            },
            {
              address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
              name: "USD Coin",
              symbol: "USDC",
              icon: "/erc20-icons/usdc.png",
            },
          ],
          [baseSepolia.id]: [
            {
              address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53",
              name: "OiOi T0ken",
              symbol: "OiOi",
              icon: "/erc20-icons/oioi.png",
            },
            {
              address: "0x358428dd56867b4481637FF8E393D08755c55c82",
              name: "MEMORA T0ken",
              symbol: "MMR",
              icon: "/erc20-icons/memora.png",
            },
          ],
        }}
        connectButton={{
          label: "LOG IN",
          style: { height: "56px", border: "2px solid #ededed" },
        }}
        wallets={dompets}
        theme={darkTheme({
          colors: {
            primaryText: "#ededed",
            secondaryText: "#ededed",
            accentText: "#ededed",
            danger: "#ededed",
            success: "#ededed",
            accentButtonBg: "#ededed",
            accentButtonText: "#0a0a0a",
            primaryButtonBg: "#0a0a0a",
            primaryButtonText: "#ededed",
            modalBg: "#0a0a0a",
            tooltipBg: "#ededed",
            tooltipText: "#0a0a0a",
            secondaryIconColor: "#ededed",
            secondaryIconHoverBg: "#ededed",
            secondaryIconHoverColor: "#0a0a0a",
            connectedButtonBgHover: "#0a0a0a",
          },
        })}
        connectModal={{
          size: "compact",
          title: "Please LOG IN!",
          titleIcon: "/memora-logo.gif",
          showThirdwebBranding: false,
          termsOfServiceUrl: "/terms",
          privacyPolicyUrl: "/policy",
        }}
      />
    </>
  );
}
