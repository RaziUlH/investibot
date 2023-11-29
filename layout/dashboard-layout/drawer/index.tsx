import { useMemo } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery } from "@mui/material";

import MiniDrawerStyled from "./MiniDrawerStyled";
import { drawerWidth } from "config";
import DrawerContent from "./drawer-content";
import DrawerHeader from "./drawer-header";

interface MainDrawerProps {
  open: boolean;
  handleDrawerToggle: () => void;
  window?: any;
}

export default function MainDrawer(props: MainDrawerProps) {
  const { open, handleDrawerToggle, window } = props;
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
      aria-label="mailbox folders"
    >
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={open}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="persistent"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: "none",
              backgroundColor: "#1A1A1A",
              boxShadow: "inherit",
            },
          }}
        >
          {open && drawerHeader}
          {open && drawerContent}
        </Drawer>
      )}
    </Box>
  );
}
