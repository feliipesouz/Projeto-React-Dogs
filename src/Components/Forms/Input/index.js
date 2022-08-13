import React from "react";
import { StylesWrapper, Label, StyledInput, Error } from "./styles";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <StylesWrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </StylesWrapper>
  );
};

export default Input;
