import { Box, CustomSubHeaderTable, CustomToggle } from "@/components/common";
import React from "react";
import "@/styles/common.css";
import Image from "next/image";
import { botData, toggleData } from "@/utils/dashboard";

export default function AvailableBotsPage() {
  return (
    <Box className="py-7 px-10 text-white">
      <Box className="text-xl pb-10">Hi John</Box>
      <Box className="flex-between-center">
        <Box className="flex-center-center gap-5">
          <Box>
            <CustomToggle
              width="w-[230px]"
              toggleData={toggleData}
              title="Strategy Type"
            />
          </Box>
          <Box>
            <CustomToggle
              width="w-[200px]"
              toggleData={botData}
              title="Select Bot Type"
            />
          </Box>
        </Box>
        <Box className="flex items-center gap-4 pt-6 ">
          <Box className="cursor-pointer flex-center-center bg-[#343434] border-2 !border-[#343434] rounded-full w-10 h-10">
            <Image src="icons/list-view.svg" alt="" width={24} height={24} />
          </Box>
          <Box className="cursor-pointer flex-center-center  border-2 !border-[#343434] rounded-full w-10 h-10">
            <Image src="icons/grid-view.svg" alt="" width={12} height={12} />
          </Box>
        </Box>
      </Box>
      <Box className="mt-16">
        <CustomSubHeaderTable />
      </Box>
    </Box>
  );
}
