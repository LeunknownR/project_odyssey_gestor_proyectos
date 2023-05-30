import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    padding: 5px 10px;
`;
export const Ball = styled.div`
    border-radius: 50%;
    background-color: ${({ color }) => color};
    height: 15px;
    width: 15px;
`;
export const State = styled.span`
    color: ${({ color }) => color};
`;