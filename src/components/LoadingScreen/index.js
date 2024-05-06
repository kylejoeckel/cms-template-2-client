import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SiteDataContext } from "../../app";

const LoadingScreen = () => {
  const data = useContext(SiteDataContext);

  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "background.default",
        color: "text.primary",
        zIndex: 9999,
      }}
    >
      {data?.mainLogo && (
        <img
          src={ASSET_URL + data?.mainLogo}
          style={{ maxWidth: "300px", margin: "60px" }}
          alt="logo"
        />
      )}
      <CircularProgress />
      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Marinating the experience...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
