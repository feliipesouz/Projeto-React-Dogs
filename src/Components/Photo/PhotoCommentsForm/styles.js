import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: ${props => props.single ? '1rem 0' : '1rem'};
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;
  &&:focus,
  :hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  &&:focus, :hover {
    outline: none;
  }
  &&:focus svg path,
  :hover svg path {
    fill: #fea;
    stroke: #fb1;
  }
  &&:focus svg g,
  :hover svg g {
    animation: latir .6s infinite; 
  }
  @keyframes latir{
    from{
      opacity: 0
    }
    to {
      opacity: 1;
    }
  }
`;
