import { Box } from "@/components/common";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Box className="flex justify-center items-center w-screen h-screen">
      <CircularProgress />
    </Box>
  );
}
