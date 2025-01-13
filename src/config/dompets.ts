// config/dompets.ts
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const dompets = [
  inAppWallet({
    auth: { options: ["google", "email", "passkey", "apple"] },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];
