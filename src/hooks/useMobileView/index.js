import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";

// Custom Hook for handling mobile view
export const useMobileView = (breakpoint) => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.screen.width <= theme.breakpoints.values[breakpoint]);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [theme.breakpoints.values, breakpoint]);

  return isMobile;
};
