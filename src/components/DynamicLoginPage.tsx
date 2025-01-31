// External libraries
import React from "react";
import { useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { base, baseSepolia } from "@/config/rantais";

// Components libraries
import ConnectEmbeds from "./ConnectEmbeds";
import { ErrorBoundary } from "./ErrorBoundary";
import Footer from "./FooterSection";
import Header from "./HeaderSection";
import LoginLayout from "./LoginLayout";

const chains = [base, baseSepolia];

interface DynamicLoginPageProps {
  ContentComponent: React.FC;
}

const DynamicLoginPage: React.FC<DynamicLoginPageProps> = ({
  ContentComponent,
}) => {
  const account = useActiveAccount();

  if (account) {
    return (
      <div className="flex flex-col gap-4 items-center h-screen">
        {/* Headersss */}
        <Header />
        <div className="flex flex-col gap-4 content-normal px-0 md:px-20 m-4">
          <ContentComponent />
        </div>
        {/* Footersss */}
        <Footer />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="p-2">
        <LoginLayout>
          <ConnectEmbeds />
        </LoginLayout>
      </div>
    </ErrorBoundary>
  );
};

export default DynamicLoginPage;
