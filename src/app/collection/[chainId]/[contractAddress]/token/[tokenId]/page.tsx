"use client";

import { use } from "react";
import { Token } from "@/components/token-page/TokenPage";

export default function ListingPage(props: {
  params: Promise<{ tokenId: string }>;
}) {
  const params = use(props.params);
  const { tokenId } = params;
  if (!tokenId) {
    throw new Error("Missing tokenId, OiOi!");
  }
  return <Token tokenId={BigInt(tokenId)} />;
}
