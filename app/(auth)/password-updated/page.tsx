import { Box, CustomLinkButton } from "@/components/common";
import React from "react";

export default function PasswordUpdatedPage() {
  return (
    <Box className="container-flex-col h-[calc(100%_-_80px)] max-md:text-center mt-10">
      <Box className="text-white mt-6">
        <Box className="header">
          Password updated
        </Box>
      </Box>

      <Box className="text-white mt-4">
        <CustomLinkButton to="/login">Sign In</CustomLinkButton>
      </Box>
    </Box>
  );
}
