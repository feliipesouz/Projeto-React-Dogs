import React from 'react'
import { StylesWrapper, Label, StyledInput, Error } from './styles';
const Input = ({ label, type, name }) => {
  return (
    <StylesWrapper>
        <Label htmlFor={name}>{label}</Label>
        <StyledInput id={name} type={type} name={name}/>
        <Error>{'Deu erro'}</Error>
    </StylesWrapper>
  )
}

export default Input 