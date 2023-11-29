import { Box } from "@/components/common";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box className="flex justify-center items-center w-full h-[100vh_-_40px]">
      <CircularProgress />
    </Box>
  );
}
