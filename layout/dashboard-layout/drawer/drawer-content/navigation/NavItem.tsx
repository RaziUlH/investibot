import { ForwardedRef, forwardRef, useEffect } from "react";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "@/components/common";

interface ListItemProps {
  url: string;
  target: string;
}

export default function NavItem({ item }: { item: any }) {
  const pathname = usePathname();

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }
  const drawerOpen = true;
  const isSelected = item.url === pathname;

  console.log(pathname, isSelected);
  type AnchorRef = ForwardedRef<HTMLAnchorElement>;
  let listItemProps = {
    component: forwardRef((props, ref: AnchorRef) => (
      <Link ref={ref} {...props} href={item.url} target={itemTarget} />
    )),
  };

  listItemProps.component.displayName = "ListItemLink";

  const itemHandler = () => {};

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? "1rem" : "1.25rem" }} />
  ) : (
    false
  );

  useEffect(() => {
    if (pathname.includes(item.url)) {
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = "#747474 !important";
  const iconSelectedColor = "#fff";

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={itemHandler}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: 4,
        py: 2,
        "&.Mui-selected": {
          backdropFilter: "opacity(0.15)",
          background:
            "linear-gradient(270deg, rgb(255 26 196 / 15%) 0%, rgb(172 71 255 / 15%)  100%)",
          borderRadius: "0px 50px 50px 0px",
          width: "80%",
          color: iconSelectedColor,
          "&:hover": {
            color: iconSelectedColor,
            bgcolor: "primary.lighter",
          },
        },
        "&:hover": {
          "& svg": {
            fill: iconSelectedColor,
          },
          "& span": {
            color: iconSelectedColor,
          },
        },
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            my: 0.5,
            color: textColor,
            fill: textColor,
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}

      <ListItemText
        sx={{
          color: isSelected ? iconSelectedColor : textColor,
          fontSize: "17px",
        }}
        primary={item.title}
      />
    </ListItemButton>
  );
}
