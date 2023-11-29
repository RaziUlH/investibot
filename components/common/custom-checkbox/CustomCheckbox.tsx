import "./CustomCheckbox.css";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

export default function CustomCheckbox(
  props: CheckboxProps & { label?: string }
) {
  const { className = "" } = props;
  return (
    <FormControlLabel
      label={props.label}
      control={
        <Checkbox
          {...props}
          className={`custom-checkbox font-aeonik ${className} `}
          icon={<RadioButtonUncheckedRoundedIcon />}
          checkedIcon={<CheckCircleOutlineRoundedIcon />}
        />
      }
    />
  );
}
