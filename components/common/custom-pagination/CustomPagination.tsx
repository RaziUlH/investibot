"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import Box from "../custom-box/CustomBox";
import { PaginationProps } from "@/utils/interface";

const CustomPagination: React.FC<PaginationProps> = ({
  count,
  currentPage,
  setCurrentPage,
}) => {
  const handleChangePage = (value: any, page: number) => {
    setCurrentPage(page);
  };
  return (
    <Box className="flex  justify-center">
      <Pagination
        count={count}
        variant="outlined"
        page={currentPage}
        onChange={handleChangePage}
        renderItem={(item) => {
          const isPrevNextButton =
            item.type === "previous" || item.type === "next";
          return (
            <PaginationItem
              {...item}
              className={`${
                isPrevNextButton ? "border-[#FF1AC4]" : "border-[#343434]"
              } text-white ${
                item.selected
                  ? "!bg-[#FF1AC4] hover:bg-[#FF1AC4]"
                  : "hover:bg-[#FF1AC4] hover:text-black"
              }`}
            />
          );
        }}
      />
    </Box>
  );
};

export default CustomPagination;
