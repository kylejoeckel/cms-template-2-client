import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@mui/material";
import CustomTextField from "../CustomTextField";
import { useSnackbar } from "../../hooks/useSnackbar";
import { SiteDataContext } from "../../app";

export const ContactModal = ({ open, setOpen }) => {
  const initialState = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const data = useContext(SiteDataContext);

  const validateForm = useCallback(() => {
    const isValid =
      formValues.name.trim() &&
      formValues.email.includes("@") &&
      formValues.message.trim();
    setIsFormValid(isValid);
  }, [formValues.name, formValues.email, formValues.message]);

  useEffect(() => {
    validateForm();
  }, [formValues, validateForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues(initialState);
    setIsFormValid(false);
  };

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const sendMail = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SMTP_ENDPOINT}dev/send_email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from_address: `Website Message <mail@${data?.domainName}>`,
            to_address: data?.contactEmail,
            subject: `${formValues.name} - ${formValues.email}`,
            body: formValues.message,
          }),
        }
      );

      const resData = await response.json();
      if (!response.ok)
        throw new Error(resData.message || "Failed to send email.");
      enqueueSnackbar("Message sent successfully!", { variant: "success" });
      handleClose();
    } catch (error) {
      enqueueSnackbar(error.message || "Error sending message.", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: sendMail,
          noValidate: true,
          sx: {
            backgroundColor: "white",
            margin: "12px",
            borderRadius: "16px",
            padding: "16px 0 0",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", margin: "8px 12px" }}>
          How can we help?
        </DialogTitle>
        <DialogContent
          sx={{ borderTop: "solid 2px rgba(0,0,0,0.3)", padding: "32px" }}
        >
          <DialogContentText sx={{ color: "black", marginTop: "24px" }}>
            Send us a note with your contact info and we'll get back to you as
            soon as we can!
          </DialogContentText>
          <CustomTextField
            id="name"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <CustomTextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <CustomTextField
            id="message"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions sx={{ padding: "12px 32px" }}>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            color="primary"
          >
            {isLoading ? <CircularProgress size={24} /> : "Send"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
