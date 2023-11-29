"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import {
  Box,
  CustomLink,
  CustomLoadingButton,
} from "@/components/common";

export default function VerificationCodePage() {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newValue: string) => {
    setOtp(newValue);
  };
  console.log("otp", otp);

  return (
    <Box className="container-flex-col h-[calc(100%_-_80px)] max-md:text-center">
      <Box className="text-white max-md:mt-6">
        <Box className="text-3xl font-medium max-md:text-3xl">
          Enter your Verification Code
        </Box>
      </Box>
      <Box className="mt-12 max-md:flex max-md:justify-center">
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={4}
          shouldAutoFocus
          renderInput={(props) => (
            <input
              {...props}
              className="bg-transparent text-white border border-[#747474] !w-10 h-10  rounded-md mr-4 max-md:mr-0"
            />
          )}
        />
      </Box>
      <Box className="white-sm mt-5">
        We sent a four digit verification code to your email xxxer@gmail.com.
      </Box>
      <Box className="white-sm">Please check your inbox</Box>
      <Box className="white-sm mt-5 flex gap-2 max-md:justify-center max-md:gap-2">
        I didn’t recieve the code?{" "}
        <CustomLink className="text-sm" href="/login">
          Send again
        </CustomLink>
      </Box>
      <Box className="text-white mt-7">
        <CustomLoadingButton href="/new-password">Verify</CustomLoadingButton>
      </Box>
    </Box>
  );
}
