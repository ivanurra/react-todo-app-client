import React from 'react';
import { SCFormItemWrapper, SCInput, SCLabel } from './Input.styled';

const Input = ({ name,
  placeholder,
  autocomplete,
  type = 'text',
  isPassword,
  disabled,
  width,
  change,
  error,
  label,
  maxLength,
  readOnly,
  registerRef,
  options,
  config,
  value,
  ...props }) => {

  return (

    <SCFormItemWrapper
      {...props}
      width={width}
    >
      <SCLabel htmlFor={name}>{label}</SCLabel>
      <SCInput
        type={type}
        onChange={(e) => {
          change && change(e.target.value);
        }}
        autoComplete={autocomplete}
        maxLength={maxLength}
        error={error}
        ref={registerRef}
        name={name}
        value={value}
        placeholder={placeholder}
        {...options}
      />

      {error
        && (
          <p>
            {error.message}
          </p>
        )}
    </SCFormItemWrapper>
  );
};

export default Input;