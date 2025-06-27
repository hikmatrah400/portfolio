"use client";

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { memo, useId, useState } from "react";
import { InputSelectProps } from "./InputSelectProps";
import { RenderGoupBtnWithIcon } from "../Functions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import { SvgIconComponent } from "@mui/icons-material";
import { renderSxPropsArray } from "@/UI/Functions";

const InputSelect = memo(
  ({
    gridSize = 12,
    gridProps,
    label,
    displayEmpty = true,
    children,
    inputGroup = false,
    inputGroupProps,
    groupBtnProps,
    noItemSelectedElement,
    hideNoItemElement = false,
    renderWithForm,
    renderWithFormProps,
    ...props
  }: InputSelectProps) => {
    const fieldID = useId();
    const [value, setValue] = useState("");

    const renderInput = (
      <FormControl fullWidth>
        {label && (
          <InputLabel
            id={fieldID}
            shrink={displayEmpty}
            className={
              displayEmpty ? "MuiInputLabel-shrink MuiFormLabel-filled" : ""
            }
          >
            {label}
          </InputLabel>
        )}

        <Select
          fullWidth
          displayEmpty={displayEmpty}
          {...props}
          IconComponent={SelectIconComponent}
          slotProps={{
            ...props?.slotProps,
            input: { required: true, ...props?.slotProps?.input },
          }}
          label={label}
          className={`inputSelect-root ${
            props?.className ? props.className : ""
          }`}
          id={`${fieldID} ${props?.id || ""}`}
          labelId={fieldID || props?.labelId}
          value={props?.value === undefined ? value : props?.value}
          onChange={(e, v) =>
            props?.onChange?.(e, v) || setValue(String(e.target.value))
          }
          sx={[
            () => ({ fontSize: "0.9rem" }),
            ...renderSxPropsArray(props?.sx),
          ]}
        >
          {!hideNoItemElement ? (
            noItemSelectedElement ? (
              <MenuItem value="" disabled>
                <span className="noItemSelectedElement">
                  {noItemSelectedElement}
                </span>
              </MenuItem>
            ) : (
              <MenuItem value="" disabled>
                <em>Choose...</em>
              </MenuItem>
            )
          ) : null}
          {children}
        </Select>
      </FormControl>
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

    return (
      <Grid
        size={gridSize}
        {...gridProps}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        {renderWithForm ? renderInputWidthForm : renderFullInput}
      </Grid>
    );
  }
);

export const SelectIconComponent = (props: SvgIconComponent | null) => {
  return (
    <KeyboardArrowDownRounded
      {...props}
      sx={{
        fontSize: "1.25rem",
        marginLeft: "0.5rem",
        transition: "all 0.2s ease",
      }}
    />
  );
};

export default InputSelect;
