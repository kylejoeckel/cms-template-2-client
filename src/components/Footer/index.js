import { Typography } from "@mui/material";
import { useContext } from "react";
import { SiteDataContext } from "../../app";

export const Footer = () => {
  const data = useContext(SiteDataContext);

  return (
    <footer className="footer">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} {data?.fullName}. All rights reserved.
      </Typography>
    </footer>
  );
};
