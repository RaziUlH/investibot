import { Box, CustomLoadingButton } from "@/components/common";
import Navigation from "./navigation";

const DrawerContent = () => (
  <Box mt="100px" height="100%" overflow="auto">
    <Navigation />
    <Box
      sx={{
        py: 10,
        pl: 4,
      }}
    >
      <CustomLoadingButton>Upgrade</CustomLoadingButton>
    </Box>
  </Box>
);

export default DrawerContent;
