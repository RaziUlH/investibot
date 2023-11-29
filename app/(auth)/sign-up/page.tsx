import React from "react";
import {
  Box,
  CustomCheckbox,
  CustomInput,
  CustomLink,
  CustomLoadingButton,
  CustomPasswordInput,
} from "@/components/common";

function SignUpPage() {
  return (
    <Box className="container h-[calc(100%_-_80px)]">
      <Box className="header-container">
        <Box className="header">Sign Up</Box>
      </Box>
      <Box className="mt-16 max-md:mt-10">
        <CustomInput label="Full Name" placeholder="Enter Your Full Name" />
        <CustomInput
          label="Email Address"
          placeholder="Enter Your Email Address"
        />
        <CustomPasswordInput label="Password" placeholder="Min 8 Chars" />
        <CustomPasswordInput
          label="Confirm Password"
          placeholder="Retype Password"
        />
      </Box>
      <Box className="flex-between-center-white-base mb-4 max-md:justify-center">
        <CustomCheckbox label="I agree to the terms & Services" />
      </Box>
      <Box className="flex max-md:justify-center">
        <CustomLoadingButton href="/verification-code">
          Sign Up
        </CustomLoadingButton>
      </Box>
      <Box className="text-white mt-4 flex gap-8 max-md:flex-col max-md:gap-2 max-md:items-center max-md:mt-6">
        Already have an account? <CustomLink href="/login">Sign in</CustomLink>
      </Box>
    </Box>
  );
}

export default SignUpPage;
