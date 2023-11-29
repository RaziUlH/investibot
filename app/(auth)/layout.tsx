"use client";
import { Box } from "@/components/common";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import "../../styles/common.css";
import { AuthLayoutProps } from "@/utils/interface";

export default function AuthLayout({ children }: AuthLayoutProps) {
  const path = usePathname();
  const [data, setData] = useState({
    img: "",
    text: "",
  });
  useEffect(() => {
    switch (path) {
      case "/login":
        setData({
          img: "bg-login",
          text: "Enter the virtual world of AI trading with a single click",
        });
        break;
      case "/sign-up":
        setData({
          img: "bg-signup",
          text: "Welcome to Investibot - Where Smart Investment Begins. Join and unlock exclusive features instantly.",
        });
        break;
      case "/forgot-password":
        setData({
          img: "bg-forgotPassword",
          text: "Reset your password with ease to regain control of your account",
        });
        break;
      case "/verification-code":
        setData({
          img: "bg-verificationCode",
          text: "Enter the verification code sent to your device for a quick and secured login experience.",
        });
        break;
      case "/new-password":
        setData({
          img: "bg-newPassword",
          text: "Your new password must be different from your previous passwords.",
        });
        break;
      case "/password-updated":
        setData({
          img: "bg-passwordUpdated",
          text: "Success! Your password has been updated.",
        });
        break;
      default:
        break;
    }
  }, [path]);

  console.log("payhh", path);

  return (
    <main className="bg-theme bg-gray-50 dark:bg-[#101520] ">
      <Suspense fallback={<Loading />}>
        <Box
          className={`flex  ${
            path == "/forgot-password" ||
            path == "/verification-code" ||
            path == "/new-password" ||
            path == "/password-updated"
              ? "h-screen"
              : "h-screen"
          }`}
        >
          <Box className="flex w-1/2 max-md:w-full  max-md:hidden">
            <Box
              className={`bg-cover bg-no-repeat bg-center w-full rounded-r-[50px] max-md:rounded-t-[20px] max-md:rounded-b-none ${data?.img}`}
            >
              <Box className="flex-center-center text-2xl text-white h-full px-10 left-section-theme rounded-r-[50px]  max-md:rounded-t-[20px] max-md:rounded-b-none max-md:text-xl">
                {data?.text}
              </Box>
            </Box>
          </Box>
          <Box className="w-1/2 pr-5 py-10 max-md:w-full">
            <Box className="fixed top-10 pl-5 max-md:relative max-md:top-0">
              <Image
                src={"/icons/logo.svg"}
                alt="Investibot"
                width={200}
                height={200}
              />
            </Box>
            {children}
          </Box>
        </Box>
      </Suspense>
    </main>
  );
}
