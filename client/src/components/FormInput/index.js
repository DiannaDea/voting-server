import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const FormInput = (props) => {
  const {
    fieldLabelName, fieldName, fieldValue, onChangeHandler,
  } = props;

  return (
    <FormControl margin='normal' required fullWidth>
      <InputLabel htmlFor={fieldName}>{fieldLabelName}</InputLabel>
      <Input
        name={fieldName}
        type={fieldName}
        id={fieldName}
        value={fieldValue}
        {...(onChangeHandler)
          ? { onChange: event => onChangeHandler(event, fieldName) }
          : null
        }
      />
    </FormControl>
  );
};

export default FormInput;
