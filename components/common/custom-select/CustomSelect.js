import "./CustomSelect.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CustomSelect(props) {
  const { label, options, className = "" } = props;
  return (
    <FormControl className={`custom-input w-44 ${className}`} variant="filled">
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select {...props}>
        {options?.map((option, index) => (
          <MenuItem key={index} value={option?.value}>
            {option?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
