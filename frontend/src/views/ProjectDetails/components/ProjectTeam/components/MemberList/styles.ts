import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    row-gap: 30px;
    column-gap: 5px;
    padding: 0;
    max-width: 100%;
`;