"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./CustomInput.css";
import { DatePickerProps } from "@mui/lab";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputBaseProps,
  InputLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { forwardRef, useState } from "react";
import MaskedInput from "react-text-mask";
import { OtherPros } from "@/utils/interface";

export function CustomInput(props: InputBaseProps & OtherPros) {
  const { className = "" } = props;
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink className="custom-form-label font-aeonik">
        {props.label}
      </InputLabel>
      <InputBase
        {...props}
        className={`custom-input font-aeonik ${className}`}
        fullWidth
        margin="dense"
      />
    </FormControl>
  );
}
export function CustomPasswordInput(props: InputBaseProps & OtherPros) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink className="custom-form-label font-aeonik">
        {props.label}
      </InputLabel>
      <InputBase
        {...props}
        className="custom-input font-aeonik"
        fullWidth
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="start"
            >
              {showPassword ? (
                <VisibilityOff className="stroke-[#fff] mr-4" />
              ) : (
                <Visibility className="stroke-[#fff] mr-4" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export const phoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  return <MaskedInput {...props} placeholder="" mask={phoneMask} />;
});

TextMaskCustom.displayName = "TextMaskCustom";

export function CustomPhoneNumberInput(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      className="custom-input font-aeonik"
      variant="filled"
      fullWidth
      margin="dense"
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
    />
  );
}
