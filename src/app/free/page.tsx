// /src/app/free/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import SouvenirsList from "@/components/contents/SouvenirsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const pageTitle1 = "Freemium";
const pageTitle2 = "Virtual Collectibles";
const tokenIds = ["3", "4", "5"];

const PageFree: React.FC = () => (
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

export default PageFree;
