"use client";

// External libraries
import React from "react";

// Components libraries
import SouvenirDetails from "@/components/contents/SouvenirDetails";
import DynamicLoginPage from "@/components/logins/DynamicLoginPage";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <SouvenirDetails />} />
);

export default PageToken;
