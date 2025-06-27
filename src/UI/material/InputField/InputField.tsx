"use client";

import "./InputField.scss";
import Grid from "@mui/material/Grid";
import { memo, useId, useMemo, useState } from "react";
import { InputFieldProps } from "./InputFieldProps";

import TextField from "@mui/material/TextField";
import FormLabelUI from "../FormLabelUI";
import { RenderGoupBtnWithIcon } from "../Functions";

const InputField = memo(
  ({
    gridSize = 6,
    inputLabel,
    inputLabelProps,
    gridProps,
    disableInputLabel,
    inputGroup = false,
    inputGroupProps,
    groupBtnProps,
    renderWithForm,
    renderWithFormProps,
    ...props
  }: InputFieldProps) => {
    const fieldID = useId();
    const [value, setValue] = useState(props?.type === "number" ? 0 : "");

    const renderInput = (
      <TextField
        autoComplete="off"
        type="text"
        fullWidth
        required
        {...props}
        value={props?.value === undefined ? value : props?.value}
        onChange={(e) => props?.onChange?.(e) || setValue(e.target.value)}
        className={`inputField-root ${props.className || ""}`}
        id={`${fieldID} ${props?.id || ""}`}
      />
    );

    const renderInputGroup = (
      <RenderGoupBtnWithIcon
        {...{ groupBtnProps, inputGroup, inputGroupProps }}
      >
        {renderInput}
      </RenderGoupBtnWithIcon>
    );

    const renderFullInput = inputGroup ? renderInputGroup : renderInput;
    const renderInputWidthForm = (
      <form {...renderWithFormProps}>{renderFullInput}</form>
    );

    const renderLabel = useMemo(
      () => (
        <FormLabelUI
          {...inputLabelProps}
          style={{ transform: "unset", ...inputLabelProps?.style }}
          htmlFor={`${fieldID} ${inputLabelProps?.htmlFor || ""}`}
        >
          {inputLabel}
        </FormLabelUI>
      ),
      [inputLabel, inputLabelProps]
    );

    return (
      <Grid
        size={gridSize}
        {...gridProps}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {!disableInputLabel && inputLabel && renderLabel}
        {renderWithForm ? renderInputWidthForm : renderFullInput}
      </Grid>
    );
  }
);

export default InputField;
