"use client";

// External libraries
import React from "react";

// Components libraries
import FeaturedCards from "@/components/contents/FeaturedCards";
import DynamicLoginPage from "@/components/logins/DynamicLoginPage";

const PageHome: React.FC = () => (
  <DynamicLoginPage ContentComponent={FeaturedCards} />
);

export default PageHome;
