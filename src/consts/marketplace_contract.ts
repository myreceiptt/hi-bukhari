import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * We need a marketplace contract on each of the chain we want to support.
 * Only list one marketplace contract address for each chain.
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  // {
  //   address: "0x...", // ENDHONESA DIGITAL
  //   chain: ethereum,
  // },
  // {
  //   address: "0xC979B5AA97C513d8fCd48DDbe908C998455530d8", // ENDHONESA DIGITAL
  //   chain: polygon,
  // },
  // {
  //   address: "0x1C204Fe1021a7B73478150b027eBa6D61f268b48", // ENDHONESA DIGITAL
  //   chain: base,
  // },
  // {
  //   address: "0x32B238561648A9395Bed8840378c4ba6053F8D8F", // ENDHONESA DIGITAL
  //   chain: baseSepolia,
  // },
  {
    address: "0x...", // MEMORA MARKETPLACE
    chain: ethereum,
  },
  {
    address: "0x292111D4B26878F67Bae7941C5d0BD7bB272D5A1", // MEMORA MARKETPLACE
    chain: polygon,
  },
  {
    address: "0xc12c7E270685211A2ddcaD741e9378882762CdB1", // MEMORA MARKETPLACE
    chain: base,
  },
  {
    address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // MEM0RA MARKETPLACE
    chain: baseSepolia,
  },
];
