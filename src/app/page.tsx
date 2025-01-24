"use client";

// External libraries
import React from "react";

// Components
import FeaturedCards from "@/components/FeaturedCards";
import DynamicLoginPage from "@/components/DynamicLoginPage";

const PageHome: React.FC = () => (
  <DynamicLoginPage ContentComponent={FeaturedCards} />
);

export default PageHome;
