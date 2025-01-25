"use client";

// External libraries
import React from "react";

// Components
import DynamicLoginPage from "@/components/DynamicLoginPage";
import SouvenirDetails from "@/components/SouvenirDetails";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <SouvenirDetails />} />
);

export default PageToken;
