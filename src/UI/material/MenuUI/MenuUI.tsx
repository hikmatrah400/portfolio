import { MenuUIProps } from "./MenuUIProps";
import Menu from "@mui/material/Menu";
import { arrowPlaceMentStyleMethods } from "./arrowPlacementMethods";
import { renderSxPropsArray } from "@/UI/Functions";

const MenuUI = ({
  children,
  disableArrow = false,
  arrowPlacement = "top",
  arrowStyles = {
    light: undefined,
    dark: undefined,
  },
  ...props
}: MenuUIProps) => {
  return (
    <Menu
      {...props}
      sx={[
        (theme) => ({
          "& .MuiPaper-root": {
            ...(disableArrow
              ? {}
              : {
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    ...arrowPlaceMentStyleMethods(arrowPlacement),

                    width: "0.8rem",
                    height: "0.8rem",
                    background: "#fff",
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    zIndex: -1,
                    boxShadow: "inset 0 0 1px rgba(0,0,0,0.2)",
                    ...arrowStyles.light,

                    ...theme.applyStyles("dark", {
                      background: "#000",
                      ...arrowStyles.dark,
                    }),
                  },
                }),
          },
        }),
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      {children}
    </Menu>
  );
};

export default MenuUI;
