import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

export const StyledButton = ({ children, color, href, ...props }) => {
    const customTheme = useTheme();
    return (
      <Button
        variant={"outlined"}
        color={color || "primary"}
        sx={{ marginY: "12px" }}
        href={href}
        style={{
          borderColor:
            color === "primary"
              ? customTheme.palette?.action?.active
              : customTheme.palette?.primary?.main,
          color:
            color === "primary"
              ? customTheme.palette?.action.active
              : customTheme.palette?.primary.main,
        }}
        {...props}
      >
        {children}
      </Button>
    );
  };