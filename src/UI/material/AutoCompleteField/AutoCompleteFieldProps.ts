import { AutocompleteProps } from "@mui/material/Autocomplete";
import { GridFieldProps } from "../Types";

export interface AutoCompleteFieldProps
  extends AutocompleteProps<any, any, any, any>,
    GridFieldProps {}

export * from "@mui/material/Autocomplete";
