"use client";

import { ProfileSection } from "@/components/profile-page/Profile";
import { client } from "@/consts/client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useActiveAccount, useConnectModal } from "thirdweb/react";

export default function ProfilePage() {
  const account = useActiveAccount();
  const { connect } = useConnectModal();

  useEffect(() => {
    // If there's no active account and the connect function is available
    if (!account && connect) {
      connect({ client }).catch(() => {
        // Swallow errors silently since modal closure is not an error case
      });
    }
  }, [account, connect]);

  // If no account is active, prompt the user to log in
  if (!account) {
    return (
      <Box>
        <Flex>
          <Heading m="auto">Log in to continue</Heading>
        </Flex>
      </Box>
    );
  }

  // Render the profile section when the user is logged in
  return <ProfileSection address={account.address} />;
}
