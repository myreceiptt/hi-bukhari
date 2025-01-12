import { defineChain } from "thirdweb";

/**
 * All chains should be exported from this file.
 */
export { ethereum, polygon, base, baseSepolia } from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`, OiOi!
 */
export const customChain47 = defineChain(47.47); // Not exist. Don't actually use this.
