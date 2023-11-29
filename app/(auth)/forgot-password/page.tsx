import React from "react";
import { Box, CustomInput, CustomLoadingButton } from "@/components/common";

export default function ForgotPasswordPage() {
  return (
    <Box className="container-flex-col h-[calc(100%_-_80px)]  max-md:text-center">
      <Box className="text-white mt-6">
        <Box className="header">Email Verification</Box>
        <Box className="description mb-10">
          Please enter your email address to receive a verification code
        </Box>
      </Box>
      <Box>
        <CustomInput
          label="Email Address"
          placeholder="Enter Your Email Address"
        />
      </Box>
      <Box className="text-white mt-4">
        <CustomLoadingButton>Send</CustomLoadingButton>
      </Box>
    </Box>
  );
}
