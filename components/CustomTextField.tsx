import { StandardTextFieldProps, TextField } from '@mui/material';
import React, { ChangeEvent, FocusEvent } from 'react';

interface NumericTextFieldProps extends StandardTextFieldProps {
  isValid: boolean;
  errorMessage: string;
  customOnChange:  (fieldName: string, value: any) => void
}

export default function CustomTextField(props: NumericTextFieldProps) {
  const { name, onChange, errorMessage, isValid, customOnChange, ...rest } = props;

  const [value, setValue] = React.useState('');
  // TODO: for learning purpose - test the editable context thing

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);

    if (customOnChange) customOnChange(name || '---', event.target.value);
  };

  return (
    <TextField 
      name={name}
      value= {value}
      onChange={handleOnChange}
      helperText= {errorMessage}
      error={!isValid}
      {...rest}
      
    />
  );
}
