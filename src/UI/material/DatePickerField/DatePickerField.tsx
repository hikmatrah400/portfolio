import "./DatePickerField.scss";
import {
  LocalizationProvider,
  DatePicker,
  DatePickerProps,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import { memo, useId, useMemo } from "react";
import { DatePickerFieldProps } from "./DatePickerFieldProps";
import FormLabelUI from "../FormLabelUI";
import { renderSxPropsArray } from "@/UI/Functions";

const DatePickerField = memo(
  ({
    gridSize = 6,
    inputLabel,
    disableInputLabel,
    component: Component = DatePicker,
    inputLabelProps,
    useRangePicker,
    gridProps,
    ...props
  }: DatePickerFieldProps<DatePickerProps>) => {
    const fieldID = useId();

    const renderDatePicker = (
      <Component
        views={["year", "month", "day"]}
        format="MMM-DD-YYYY"
        {...props}
        className={`muiDatePicker ${props?.className || ""}`}
        sx={[
          () => ({
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#DEE2E6",
            },
            "& .MuiFormLabel-root": {
              fontSize: "1.1rem",
              top: "-0.75rem",
              left: "-0.7rem",
            },
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      />
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
      [inputLabelProps, inputLabel]
    );

    return (
      <>
        <Grid
          size={gridSize}
          {...gridProps}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {!disableInputLabel && inputLabel && renderLabel}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {useRangePicker ? (
              renderDatePicker
            ) : (
              <DemoContainer
                components={[
                  "DatePicker",
                  "DateTimePicker",
                  "MobileDatePicker",
                  "MobileDateTimePicker",
                  "DesktopDatePicker",
                  "DesktopDateTimePicker",
                  "StaticDatePicker",
                  "StaticDateTimePicker",
                ]}
              >
                {renderDatePicker}
              </DemoContainer>
            )}
          </LocalizationProvider>
        </Grid>
      </>
    );
  }
);

export default DatePickerField;
