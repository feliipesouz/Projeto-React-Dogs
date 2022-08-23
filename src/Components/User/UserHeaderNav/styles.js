import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const A = styled.a`
  //Esse terá que ser aplicado aos 'a' e aos 'button'
  background: ${(props) => (props.isActive ? "#000000" : "#eee")};
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  transition: 500ms all;

  &&:hover,
  :focus {
    //Esse terá que ser aplicado aos 'a' e aos 'button'
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  &&:active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  &&:global(.active) svg > * {
    fill: #fb1;
  }
`;

export const MobileButton = styled.button`
  background: ${(props) => (props.isActive ? "#000000" : "#eee")};
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  transition: 500ms all;

  &&::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }

  &&:hover, :focus{
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &&:active::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
 
`;


export const NavMobile = styled.nav`
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 1;
`;

export const AMobile =styled.a`
  display: flex;
  align-items: center;
  background: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  padding: .5rem 0;
  cursor: pointer;

`;