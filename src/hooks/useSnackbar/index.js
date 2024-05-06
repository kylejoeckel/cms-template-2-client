import React, { useState, useCallback } from "react";
import FeedbackSnackbar from "../../components/FeedbackSnackbar"; // Adjust the import path as needed

export const useSnackbar = () => {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  const enqueueSnackbar = useCallback((message, severity) => {
    setSnackPack((prev) => [
      ...prev,
      { message, severity, key: new Date().getTime() },
    ]);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  const handleExited = useCallback(() => {
    setMessageInfo(undefined);
  }, []);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const renderSnackbar = () => (
    <FeedbackSnackbar
      open={open}
      handleClose={handleClose}
      message={messageInfo ? messageInfo.message : ""}
      severity={messageInfo ? messageInfo.severity : "info"}
      onExited={handleExited}
    />
  );

  return { enqueueSnackbar, renderSnackbar };
};
