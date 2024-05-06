import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ id, name, label, type, value, onChange, multiline, rows }) => {
  return (
    <TextField
      autoFocus
      required
      margin="dense"
      id={id}
      name={name}
      label={label}
      type={type}
      InputLabelProps={{ sx: { color: 'black' } }}
      value={value}
      onChange={onChange}
      fullWidth
      multiline={multiline}
      rows={rows}
    />
  );
};

export default CustomTextField;
