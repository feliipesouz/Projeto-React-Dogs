import React from 'react'
import { ReactComponent as Dogs} from '../../Assets/dogs-footer.svg';
import { StyledFooter, Paragrafo } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Dogs />
      <Paragrafo>Dogs. Alguns direitos reservados.</Paragrafo>
    </StyledFooter>
  )
}

export default Footer