"use client";

import React, { useState } from "react";
import Box from "../custom-box/CustomBox";

interface toggleGroupProps {
  width?: string;
  toggleData?: { title: String; value: any }[];
  className?: string;
  title?: string;
}

export const CustomToggle: React.FC<toggleGroupProps> = ({
  width,
  toggleData,
  className,
  title,
}) => {
  const [checked, setChecked] = useState(Number);

  const toggleGroupItemClasses = `${className} rounded-full w-full text-[#747474] text-center font-medium py-2 px-2 text-xs hover:bg-white hover:text-[#343434] hover:py-2 hover:px-2 hover:rounded-full hover:font-medium`;
  const selectedToggleGroupItemClasses = `${toggleGroupItemClasses} text-[#fff] dark:text-white bg-[#343434] rounded-full`;

  const handleItemClick = (index: number) => {
    setChecked(index);
  };

  return (
    <Box>
      <Box className="text-lg mb-3">{title}</Box>
      <Box
        className={`cursor-pointer border border-[#343434] flex justify-center rounded-full ${width}`}
      >
        {toggleData?.map((tog: any, index) => {
          return (
            <Box
              key={index}
              className={
                checked == index
                  ? selectedToggleGroupItemClasses
                  : toggleGroupItemClasses
              }
              onClick={() => handleItemClick(index)}
            >
              {tog?.title}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
