import styled from "styled-components";
import img from "../../Assets/login.jpg";

export const LoginStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;
  &&::before {
    display: block;
    content: "";
    background-image: url(${img});
    background-size: cover;
    @media (max-width: 40rem) {
      display: none;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
