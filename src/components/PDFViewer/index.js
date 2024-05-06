import React, { useContext } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // For annotation layer CSS
import { SiteDataContext } from "../../app";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

const HomeButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: "12px" }}
      onClick={goToHome}
    >
      <ChevronLeft /> Back
    </Button>
  );
};

const PDFViewer = ({ file }) => {
  const data = useContext(SiteDataContext);
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  return (
    data && (
      <div
        style={{
          backgroundColor: "#f0f0f0", // Lighter background for better contrast
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center vertically in the viewport
          minHeight: "100vh", // Full view height
          padding: "20px 0", // Uniform padding
          boxSizing: "border-box",
          backgroundImage: `url(${ASSET_URL}${data?.pdfPageBg})`, // Background image
          backgroundSize: "cover", // Cover the entire viewport
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "80%",
            marginTop: "80px",
          }}
        >
          <HomeButton />
        </div>

        <iframe
          src={file}
          style={{
            marginTop: "12px", // Some spacing from the top
            width: "80%", // Responsive width
            height: "80vh", // Responsive height based on viewport
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Soft shadow for 3D effect
            border: "1px solid #ddd", // Subtle border
            background: "white",
            transition: "all 0.3s ease-in-out", // Smooth transition for interactions
          }}
          title="PDF Viewer"
          frameBorder="0" // Remove default border
        />
      </div>
    )
  );
};

export default PDFViewer;
