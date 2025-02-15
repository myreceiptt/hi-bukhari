// /src/app/paid/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import SouvenirsList from "@/components/contents/SouvenirsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const pageTitle1 = "Exclusive";
const pageTitle2 = "Virtual Collectibles";
const tokenIds = ["0", "2", "3", "7", "8", "9", "10", "23", "24", "25", "26", "27", "28"];

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
