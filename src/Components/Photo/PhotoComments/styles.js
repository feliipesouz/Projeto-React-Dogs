import styled from "styled-components";

export const Comments = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: ${(props) => props.single ? "0px" : "0 2rem"};
`;

export const Li = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
