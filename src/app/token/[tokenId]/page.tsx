"use client";

// External libraries
import React from "react";

// Components
import DynamicLoginPage from "@/components/DynamicLoginPage";
import SouvenirDetails from "@/components/SouvenirDetails";

const SouvenirDetailsPage: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <SouvenirDetails />} />
);

export default SouvenirDetailsPage;
