import { FormControl, StandardTextFieldProps, TextField } from '@mui/material';
import React, { ChangeEvent, FocusEvent } from 'react';

interface NumericTextFieldProps extends StandardTextFieldProps {

}

export default function NumericTextField(props: NumericTextFieldProps) {
  const { name, onBlur, onChange, ...rest } = props;

  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  // TODO: for learning purpose - test the editable context thing

  const handleOnBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    setTouched(true);

  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
    setTouched(false);
  };

  return (
    <FormControl >
      <TextField 
        name={name}
        value= {value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        helperText= {touched && 'helper text here'}
        //error
        {...rest}
        type='number'
      
      />
    </FormControl>
  );
}
