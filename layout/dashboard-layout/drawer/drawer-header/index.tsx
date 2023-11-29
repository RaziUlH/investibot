import { useTheme } from "@mui/material/styles";
import { Box } from "@/components/common";
import Image from "next/image";
import { AppBar } from "@mui/material";

interface DrawerHeaderProps {
  open: boolean;
}

export default function DrawerHeader(props: DrawerHeaderProps) {
  const { open } = props;
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent={open ? "flex-start" : "center"}
      pt={1}
      pb={1}
      pl={open ? 4 : 0}
      position={open ? "fixed" : "relative"}
      top={0}
      height="100px"
      bgcolor="#1A1A1A"
    >
      <Image
        src={"/icons/logo.svg"}
        alt="Investibot"
        width={200}
        height={200}
      />
    </Box>
  );
}
