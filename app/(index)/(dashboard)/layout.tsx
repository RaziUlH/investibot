"use client";

import { Box } from "@/components/common";
// import DashboardLayoutMain from "@/layout/dashboard-layout";
import MainDrawer from "@/layout/dashboard-layout/drawer";
import Header from "@/layout/dashboard-layout/header";
import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <Box className="bg-theme bg-fixed" sx={{ display: "flex", width: "100%" }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <MainDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          width: "100%",
          flexGrow: 1,
          pt: "100px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
