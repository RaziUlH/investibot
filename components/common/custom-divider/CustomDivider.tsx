import React from "react";
import "./CustomDivider.css";
import { Divider, DividerProps } from "@mui/material";

export default function CustomDivider(props: DividerProps) {
  const { className = "" } = props;
  return (
    <Divider {...props} className={`custom-divider ${className}`}>
      {props.children}
    </Divider>
  );
}
