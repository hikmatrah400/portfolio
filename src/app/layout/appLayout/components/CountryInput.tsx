import AutoCompleteField, {
  AutoCompleteFieldProps,
} from "@/UI/material/AutoCompleteField";
import { countries } from "../data";
import InputField from "@/UI/material/InputField";

const CountryInput = ({
  ...props
}: Omit<AutoCompleteFieldProps, "options" | "renderInput">) => {
  return (
    <>
      <AutoCompleteField
        gridSize={{ xs: 12, sm: 6 }}
        {...props}
        options={countries
          .sort((a, b) => -b.label.localeCompare(a.label))
          .map((elm) => `${elm.label} (${elm.code}) +${elm.phone}`)}
        groupBy={(option) => option[0]}
        renderInput={(params) => (
          <InputField
            gridSize={12}
            label="Country"
            placeholder="Choose Country"
            name="country"
            {...params}
          />
        )}
      />
    </>
  );
};

export default CountryInput;
