"use client";
import React, { useEffect, useState } from "react";
import Box from "../custom-box/CustomBox";
import {
  CustomIconButton,
  CustomLinkButton,
} from "../custom-button/CustomButton";
import {
  DeleteOutlineRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import CustomPagination from "../custom-pagination/CustomPagination";
import { dashboardData } from "@/utils/dashboard";

const CustomSubHeaderTable = () => {
  const [dataPerPage, setDataPerPage] = useState<any[]>(dashboardData);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setDataPerPage(dashboardData);
  }, [currentPage]);

  return (
    <Box>
      {dataPerPage?.map((el) => {
        return (
          <Box key={el.id}>
            <Box className="white-xl font-medium pb-2">{el?.title}</Box>
            {el?.option?.map((opt: any) => {
              return (
                <>
                  <Box className="flex flex-row items-center w-full justify-between">
                    <Box className="flex flex-col">
                      <Box className="text-[#747474] text-sm">Crypto</Box>
                      <Box className="text-white text-sm">{opt?.crypto}</Box>
                    </Box>
                    <Box className="flex flex-col">
                      <Box className="text-[#747474] text-xs">Buy</Box>
                      <Box className="text-white text-sm">{opt?.buy}</Box>
                    </Box>
                    <Box className="flex flex-col">
                      <Box className="text-[#747474] text-xs">Single Pair</Box>
                      <Box className="text-white text-sm">
                        {opt?.singlePair}
                      </Box>
                    </Box>
                    <Box className="flex flex-col">
                      <Box className="text-[#747474] text-xs">+25%</Box>
                      <Box className="text-white text-sm">{opt?.plus1}</Box>
                    </Box>
                    <Box className="flex flex-col">
                      <Box className="text-[#747474] text-xs">+25%</Box>
                      <Box className="text-white text-sm">{opt?.plus2}</Box>
                    </Box>
                    <Box className="">{opt?.chart}</Box>
                    <Box className="flex gap-2">
                      <CustomLinkButton
                        to=""
                        className="!bg-none !bg-[#343434] !shadow-none"
                      >
                        {opt?.button1}
                      </CustomLinkButton>
                      <CustomLinkButton
                        to=""
                        className="!bg-none !bg-[#343434] !shadow-none"
                      >
                        {opt?.button2}
                      </CustomLinkButton>
                    </Box>

                    <Box className=" cursor-pointer">
                      <DeleteOutlineRounded />
                    </Box>
                    <Box className="">
                      <CustomIconButton>
                        <KeyboardArrowRightRounded className=" stroke-white fill-white" />
                      </CustomIconButton>
                    </Box>
                  </Box>
                  <Box className="h-px my-4 w-full bg-[#292929] rounded-xl "></Box>
                </>
              );
            })}
          </Box>
        );
      })}
      <Box className="mt-10">
        <CustomPagination
          count={dataPerPage?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Box>
  );
};

export default CustomSubHeaderTable;
