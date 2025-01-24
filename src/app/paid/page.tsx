"use client";

// External libraries
import React from "react";

// Components
import DynamicLoginPage from "@/components/DynamicLoginPage";
import SouvenirsList from "@/components/SouvenirsList";

const pageTitle = "Exclusive Virtual Collectibles";
const tokenIds = ["0", "1", "2"];

const PagePaid: React.FC = () => (
  <DynamicLoginPage
    ContentComponent={() => (
      <SouvenirsList tokenIds={tokenIds} title={pageTitle} />
    )}
  />
);

export default PagePaid;
