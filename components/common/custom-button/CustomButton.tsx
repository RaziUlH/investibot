"use client";
import Link, { LinkProps } from "next/link";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { IconButton, IconButtonProps } from "@mui/material";
import { ReactNode } from "react";
import "./CustomButton.css";
import { useRouter } from "next/navigation";
import { CustomLinkButtonProps, CustomLinkProps } from "@/utils/interface";

export function CustomLoadingButton(props: LoadingButtonProps) {
  const { className = "", children } = props;
  return (
    <LoadingButton {...props} className={`custom-button ${className}`}>
      {children}
    </LoadingButton>
  );
}
export function CustomLinkButton(props: CustomLinkButtonProps) {
  const router = useRouter();
  const { className = "", children } = props;

  const onClick = () => {
    router.push(props.to);
  };
  return (
    <LoadingButton
      {...props}
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {children}
    </LoadingButton>
  );
}

export function CustomIconButton(props: IconButtonProps) {
  const { className = "", children } = props;
  return (
    <IconButton {...props} className={`custom-icon-button ${className}`}>
      {children}
    </IconButton>
  );
}

export function CustomLink(props: CustomLinkProps) {
  const { className = "" } = props;
  return (
    <Link
      {...props}
      className={`text-purple text-base underline hover:!text-purple ${className}`}
    >
      {props.children}
    </Link>
  );
}
