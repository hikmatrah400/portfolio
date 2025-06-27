import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { LinearProgressUIProps } from "./LinearProgressUIProps";
import { renderSxPropsArray } from "@/UI/Functions";

const LinearProgressUI = ({
  colorPrimaryStyle,
  barStyle,
  ...props
}: LinearProgressUIProps) => {
  return (
    <LinearProgress
      {...props}
      sx={[
        (theme) => ({
          height: 5,
          borderRadius: 5,
          [`& .${linearProgressClasses.colorPrimary}`]: colorPrimaryStyle,
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "#222B35",
            ...theme.applyStyles("dark", {
              backgroundColor: "#308fe8",
            }),
            ...barStyle,
          },
        }),
        ...renderSxPropsArray(props?.sx),
      ]}
    />
  );
};

export default LinearProgressUI;
