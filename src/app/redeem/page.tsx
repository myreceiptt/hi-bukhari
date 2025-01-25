"use client";

// External libraries
import React from "react";

// Components
import DynamicLoginPage from "@/components/DynamicLoginPage";
import CoinDetails from "@/components/CoinRedeem";

const PageRedeem: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <CoinDetails />} />
);

export default PageRedeem;
