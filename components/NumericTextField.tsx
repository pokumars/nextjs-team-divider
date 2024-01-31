import { StandardTextFieldProps, TextField } from '@mui/material';
import React, { ChangeEvent, FocusEvent } from 'react';

interface NumericTextFieldProps extends StandardTextFieldProps {
  isValid: boolean;
  errorMessage: string;
  customOnChange:  (fieldName: string, value: any) => void
}

export default function NumericTextField(props: NumericTextFieldProps) {
  const { name, onBlur, onChange, errorMessage, isValid, customOnChange, ...rest } = props;

  const [value, setValue] = React.useState('');
  // TODO: for learning purpose - test the editable context thing

  const handleOnBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {

  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);

    if (customOnChange) customOnChange(name || '', event.target.value);
  };

  return (
    <TextField 
      name={name}
      value= {value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      helperText= {errorMessage}
      error={!isValid}
      {...rest}
      type='number'
      
    />
  );
}
