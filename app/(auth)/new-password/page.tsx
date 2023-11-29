import {
  Box,
  CustomLoadingButton,
  CustomPasswordInput,
} from "@/components/common";
import React from "react";

export default function NewPasswordPage() {
  return (
    <Box className="container-flex-col h-[calc(100%_-_80px)] max-md:text-center">
      <Box className="text-white mt-6">
        <Box className="header">
          Create New Password
        </Box>
      </Box>
      <Box className="mt-10">
        <CustomPasswordInput label="New Password" placeholder="New Password" />
        <CustomPasswordInput
          label="Confirm Password"
          placeholder="Confirm Password"
        />
      </Box>
      <Box className="text-white mt-4">
        <CustomLoadingButton href="/password-updated">
          Create
        </CustomLoadingButton>
      </Box>
    </Box>
  );
}
