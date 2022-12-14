import styled from "styled-components";
import visualizacao from "../../../Assets/visualizacao-black.svg";

export const Photo = styled.div`
  margin: auto;
  height: ${(props) => props.single ? "auto" : "36rem"};;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  /* grid-template-columns: 36rem 20rem; */
  grid-template-columns: ${(props) => props.single ? "1fr" : "36rem 20rem"};
  background: white;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;
  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
  @media (max-width: 64rem) {
    height: auto;
    max-width: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const Img = styled.img`
    grid-row: 1/4;
    @media (max-width: 64rem){
        grid-row: 1;
    }
`;

export const Details = styled.div`
  padding: ${props => props.single ? '1rem 0px 0px' : '2rem 2rem 0 2rem'};
`;

export const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &&:link {
    text-decoration: underline;
  }
`;

export const Visualizacoes = styled.span`
  content: "";
  display: inline-block;
  width: 16px;
  height: 10px;
  margin-right: 0.5rem;
  background: url(${visualizacao});
`;

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Li = styled.li`
  margin-right: 2rem;
  &&:before {
    content: "";
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: black;
    margin-top: 5px;
  }
`;

export const Title = styled.h1``;
