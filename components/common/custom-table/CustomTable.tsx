import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CustomTableProps } from "@/utils/interface";

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
  return (
    <TableContainer component={Paper} className="bg-transparent text-white">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column: any) => (
              <TableCell
                className="text-white"
                key={column.id}
                align={column.align || "left"}
              >
                {column.headerRender ? column.headerRender() : column.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.id} // use a unique identifier for the key
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column: any) => (
                <TableCell
                  className="text-white"
                  key={column.id}
                  align={column.align || "left"}
                  component={column.component || "td"}
                  scope={column.scope || "row"}
                >
                  {column.render ? column.render(row) : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
