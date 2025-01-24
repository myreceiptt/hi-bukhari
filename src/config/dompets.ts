// config/dompets.ts
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const dompets = [
  inAppWallet({
    auth: { options: ["email", "passkey", "google", "apple", "facebook", "telegram", "x" ] },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];
