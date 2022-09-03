import styled from 'styled-components'

export const Photo = styled.li`
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;
    &:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
        @media only screen and (max-width: 40rem){
            grid-column: initial;
            grid-row: initial;
        }
    }
`; 

export const Img = styled.div`
    grid-area: 1/1;
`;

export const Span = styled.span`
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    /* display: none; */
    &::before {
        width: 16px;
        height: 10px;
        content: '';
        display: inline-block;
        margin-right: .25rem;
        background-image: url('../../../Assets/visualizacao.svg') no-repeat;
    }
    &:hover {
        display: flex;
    }
   
`;