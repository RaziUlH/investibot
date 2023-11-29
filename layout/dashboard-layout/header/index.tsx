import { MenuOpenRounded, MenuRounded } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import HeaderContent from "./header-content";
import { drawerWidth } from "@/config";
import { CustomIconButton, CustomLinkButton } from "@/components/common";
import Image from "next/image";

interface HeaderProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

export default function Header({ open, handleDrawerToggle }: HeaderProps) {
  return (
    <AppBar
      sx={{
        zIndex: 10,
        bgcolor: "#1A1A1A",
        height: "100px",
        width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        marginLeft: open ? `${drawerWidth}px` : "auto",
        transitionProperty: "all",
        transitionDuration: "225ms",
        TransitionTimingFunction: "cubic-bezier(0.4,0,0.6,1)",
      }}
      position="fixed"
      elevation={0}
    >
      <Toolbar
        sx={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          disableRipple
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          color="secondary"
          sx={{
            ml: { xs: 0, lg: -2 },
          }}
        >
          {!open ? (
            <MenuRounded
              sx={{
                color: "#747474",
              }}
            />
          ) : (
            <MenuOpenRounded
              className="!text-boulder"
              sx={{
                color: "#747474",
              }}
            />
          )}
        </IconButton>
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <CustomLinkButton
            startIcon={
              <Image
                src={"/icons/plus-square.svg"}
                alt="plus"
                width={16}
                height={16}
              />
            }
            to="/sign-up"
          >
            Create Account
          </CustomLinkButton>
          <CustomLinkButton
            startIcon={
              <Image
                src={"/icons/create.svg"}
                alt="plus"
                width={16}
                height={16}
              />
            }
            to="#"
          >
            Create Rule
          </CustomLinkButton>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <CustomIconButton>
              <Image
                src={"/icons/save.svg"}
                alt="plus"
                width={16}
                height={16}
              />
            </CustomIconButton>
            <CustomIconButton>
              <Image
                src={"/icons/bell.svg"}
                alt="plus"
                width={16}
                height={16}
              />
            </CustomIconButton>
            <IconButton>
              <Image
                src={"/icons/avatar.png"}
                alt="plus"
                width={40}
                height={40}
                style={{
                  borderRadius: "10000px",
                }}
              />
            </IconButton>
          </Box>
        </Box>
        {/* <HeaderContent /> */}
      </Toolbar>
    </AppBar>
  );
}
