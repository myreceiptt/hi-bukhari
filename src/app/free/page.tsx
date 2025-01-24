"use client";

// External libraries
import React from "react";

// Components
import DynamicLoginPage from "@/components/DynamicLoginPage";
import SouvenirsList from "@/components/SouvenirsList";

const pageTitle = "Freemium Virtual Collectibles";
const tokenIds = ["3", "4", "5"];

const PageFree: React.FC = () => (
  <DynamicLoginPage
    ContentComponent={() => (
      <SouvenirsList tokenIds={tokenIds} title={pageTitle} />
    )}
  />
);

export default PageFree;
