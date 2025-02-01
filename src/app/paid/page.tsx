"use client";

// External libraries
import React from "react";

// Components
import DynamicLoginPage from "@/components/DynamicLoginPage";
import SouvenirsList from "@/components/SouvenirsList";

const pageTitle1 = "Exclusive";
const pageTitle2 = "Virtual Collectibles";
const tokenIds = ["0", "1", "2"];

const PagePaid: React.FC = () => (
  <DynamicLoginPage
    ContentComponent={() => (
      <SouvenirsList
        tokenIds={tokenIds}
        title1={pageTitle1}
        title2={pageTitle2}
      />
    )}
  />
);

export default PagePaid;
