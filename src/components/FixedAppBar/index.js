import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { StyledButton } from "../StyledButton";
import { PhoneInTalk, Restaurant } from "@mui/icons-material";
import { useMobileView } from "../../hooks/useMobileView";
import { SiteDataContext } from "../../app";

function ElevationScroll({ children }) {
  const mobile = useMobileView("md");
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Adding animation
      background: trigger || mobile ? "rgba(0,0,0,0.6)" : "transparent",
      boxShadow: trigger
        ? "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
        : "none",
    },
  });
}

export const FixedAppBar = () => {
  const data = useContext(SiteDataContext);
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const mobile = useMobileView("md"); // Using the custom hook

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    data && (
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll>
          <AppBar elevation={0} position="fixed">
            <Toolbar
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <div>
                <StyledButton
                  color="secondary"
                  id="basic-button"
                  variant="text"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Restaurant style={{ marginRight: mobile ? "0" : "4px" }} />
                  {mobile ? "" : data?.header?.ctaList[0].cta}
                </StyledButton>
                <Menu
                  id="basic-menu"
                  sx={{ marginTop: "36px", marginLeft: "12px" }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}
                >
                  {data?.header?.ctaList[0].ctaMenuOpts.map((opt, i) => (
                    <MenuItem>
                      <a
                        key={i}
                        style={{ textDecoration: "none" }}
                        href={opt.link}
                        target="_self"
                      >
                        {opt.title}
                      </a>
                    </MenuItem>
                  ))}
                </Menu>
              </div>

              {data?.navLogo && (
                <img
                  style={{
                    maxHeight: mobile ? "80px" : "100px",
                    cursor: "pointer",
                  }}
                  src={`${ASSET_URL}${data?.header?.logoUrl}`}
                  onClick={() => window.open("/", "_self")}
                  alt={`${data?.fullName} Logo`}
                />
              )}
              <div style={{ display: "flex" }}>
                <StyledButton
                  color="secondary"
                  variant="text"
                  href={`${data?.header?.ctaList[1].ctaLink}`}
                >
                  <PhoneInTalk style={{ marginRight: mobile ? "0" : "4px" }} />
                  {!mobile && data?.header?.ctaList[1].cta}
                </StyledButton>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
    )
  );
};
