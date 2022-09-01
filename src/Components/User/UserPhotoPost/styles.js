import styled from 'styled-components';

export const PhotoPost = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
`;

export const File = styled.input`
    margin: 1rem 0;
`;

export const Preview = styled.div`
    border-radius: 1rem;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.preview });
    &&::after {
        content: '';
        display: block;
        height: 0;
        padding-bottom: 100%;
    }
`;