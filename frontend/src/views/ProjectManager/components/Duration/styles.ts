import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;
export const Label = styled.label`
    color: ${({color}) => color};
    font-size: 20px;
    font-weight: 700;
`;