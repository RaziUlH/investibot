import { LoadingButtonOwnProps, LoadingButtonProps } from "@mui/lab";
import { TableCellProps } from "@mui/material/TableCell";
import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export interface CustomLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

export interface CustomLinkButtonProps extends LoadingButtonOwnProps {
  to: string;
}

export interface CustomLinkButtonProps extends LoadingButtonProps {
  to: string;
}

export interface CustomCounterProps {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  disableDec: boolean;
}

export interface OtherPros {
  label: string;
}

export interface CustomTableProps {
  columns: any;
  data: any;
}

export interface PaginationProps {
  count: number;
  currentPage: number;
  setCurrentPage: any;
}
