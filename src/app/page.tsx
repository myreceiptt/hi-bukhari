"use client";

// External libraries
import React from "react";

// Components libraries
import DynamicLoginPage from "@/components/DynamicLoginPage";
import FeaturedCards from "@/components/FeaturedCards";

const PageHome: React.FC = () => (
  <DynamicLoginPage ContentComponent={FeaturedCards} />
);

export default PageHome;
