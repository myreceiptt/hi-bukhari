// External libraries
import { defineChain } from "thirdweb";

/**
 * All chains should be exported from this file.
 */
export {
  ethereum,
  polygon,
  avalanche,
  zora,
  base,
  baseSepolia,
  optimism,
} from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`.
 */
export const customChain01 = defineChain(0.001); // Not exist. Don't actually use this!
