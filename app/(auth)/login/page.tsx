"use client";
import Image from "next/image";
import {
  Box,
  CustomCheckbox,
  CustomDivider,
  CustomInput,
  CustomLinkButton,
  CustomLoadingButton,
  CustomPasswordInput,
} from "@/components/common";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleRouteForgotPassword = () => {
    router.push("/forgot-password");
  };
  return (
    <Box className="container h-[calc(100%_-_40px)]">
      <Box className="header-container">
        <Box className="header">Sign In</Box>
        <Box className="description">
          Enter Your Credentials to access your account
        </Box>
      </Box>
      <Box className="max-md:px-5">
        <Box className="flex-center-center border border-cowboy  gap-2 h-16 mt-7 w-72 rounded-md cursor-pointer max-md:w-full max-md:mt-5">
          <Image
            src={"/icons/google.svg"}
            alt="Investibot"
            width={20}
            height={20}
          />
          <Box className="white-xl">Login with Google</Box>
        </Box>
      </Box>
      <CustomDivider className="my-6">or</CustomDivider>
      <Box>
        <CustomInput
          label="Email Address"
          placeholder="Enter Your Email Address"
        />
        <CustomPasswordInput label="Password" placeholder="Min 8 Chars" />
      </Box>
      <Box className="flex-between-center-white-base mb-4">
        <CustomCheckbox label="Remember me" />
        <Box onClick={handleRouteForgotPassword}>Forgot Password</Box>
      </Box>
      <Box className="flex gap-8 max-md:justify-center max-md:shadow-none">
        <CustomLoadingButton>Login</CustomLoadingButton>
        <CustomLinkButton to="/sign-up">Sign Up</CustomLinkButton>
      </Box>
    </Box>
  );
}
