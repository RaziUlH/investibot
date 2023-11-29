import { Box, Typography } from "@mui/material";
import NavItem from "./NavItem";
import MenuItem1 from "@/public/icons/menu_item1.svg";
import MenuItem2 from "@/public/icons/menu_item2.svg";
import MenuItem3 from "@/public/icons/menu_item3.svg";
import MenuItem4 from "@/public/icons/menu_item4.svg";
import MenuItem5 from "@/public/icons/menu_item5.svg";
import MenuItem6 from "@/public/icons/menu_item6.svg";
import MenuItem7 from "@/public/icons/menu_item7.svg";
import MenuItem8 from "@/public/icons/menu_item8.svg";
import MenuItem9 from "@/public/icons/menu_item9.svg";
import MenuItem10 from "@/public/icons/menu_item10.svg";
import MenuItem11 from "@/public/icons/menu_item11.svg";
import MenuItem12 from "@/public/icons/menu_item12.svg";
import MenuItem13 from "@/public/icons/menu_item13.svg";
import MenuItem14 from "@/public/icons/menu_item14.svg";

const icons = {
  MenuItem1,
  MenuItem2,
  MenuItem3,
  MenuItem4,
  MenuItem5,
  MenuItem6,
  MenuItem7,
  MenuItem8,
  MenuItem9,
  MenuItem10,
  MenuItem11,
  MenuItem12,
  MenuItem13,
  MenuItem14,
};

const items = [
  {
    id: 1,
    title: "Available Bots",
    url: "/available-bots",
    icon: icons.MenuItem1,
  },
  {
    id: 2,
    title: "Market Place",
    url: "/market-place",
    icon: icons.MenuItem2,
  },
  {
    id: 3,
    title: "My Strategies",
    url: "/my-strategies",
    icon: icons.MenuItem3,
  },
  {
    id: 4,
    title: "Create Rule",
    url: "/create-rule",
    icon: icons.MenuItem4,
  },
  {
    id: 5,
    title: "Available Bots",
    url: "/available-bots-2",
    icon: icons.MenuItem5,
  },
  {
    id: 6,
    title: "Brokers",
    url: "/brokers",
    icon: icons.MenuItem6,
  },
  {
    id: 7,
    title: "Backtesting",
    url: "/backtesting",
    icon: icons.MenuItem7,
  },
  {
    id: 8,
    title: "Paper Trading",
    url: "/paper-trading",
    icon: icons.MenuItem8,
  },
  {
    id: 9,
    title: "Live Trade",
    url: "/live-trade",
    icon: icons.MenuItem9,
  },
  {
    id: 10,
    title: "Reports",
    url: "/reports",
    icon: icons.MenuItem10,
  },
  {
    id: 11,
    title: "Python Build",
    url: "/python-build",
    icon: icons.MenuItem11,
  },
  {
    id: 12,
    title: "Settings",
    url: "/settings",
    icon: icons.MenuItem12,
  },
  {
    id: 13,
    title: "Help",
    url: "/help",
    icon: icons.MenuItem13,
  },
  {
    id: 14,
    title: "Logout",
    url: "/logout",
    icon: icons.MenuItem14,
  },
];

const Navigation = () => {
  const navLinks = items.map((item) => {
    return <NavItem key={item.id} item={item} />;
  });

  return <Box>{navLinks}</Box>;
};

export default Navigation;
