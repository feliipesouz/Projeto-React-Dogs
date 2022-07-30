import styled from 'styled-components';

export const StylesWrapper = styled.div`
    margin-bottom: 1px;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.2s;
`;

export const StyledInput = styled.input`
    &:focus,
    &:hover {
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    }
`;

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
`;  

export const Error = styled.p`
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`;
