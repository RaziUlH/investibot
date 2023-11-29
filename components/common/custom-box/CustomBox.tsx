import { Box as BoxComp, BoxProps } from "@mui/material";
import React from "react";

export default function Box(props: BoxProps) {
  return <BoxComp {...props}>{props.children}</BoxComp>;
}
