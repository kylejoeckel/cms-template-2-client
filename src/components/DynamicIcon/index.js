import React, { useEffect, useState } from "react";
import * as icons from "@mui/icons-material";

const DynamicIcon = ({ iconName }) => {
  const [IconComponent, setIcon] = useState(icons[iconName]);

  useEffect(() => {
    if (iconName) {
      setIcon(icons[iconName]);
    }
  }, [iconName]);
  if (!IconComponent) {
    // console.error(`Icon "${iconName}" not found.`);
    return null; // Optionally, return a default icon or null
  }

  return <IconComponent style={{ margin: "0 4px" }} />;
};

export default DynamicIcon;
