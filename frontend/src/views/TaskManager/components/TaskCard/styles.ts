import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 18px 8px 18px 18px;
    border: 1px solid var(--gray-3);
    border-radius: 10px;
    max-width: 360px;
`;
export const IconContainer = styled.span`
    display: flex;
    cursor: pointer;
    .iconify {
        color: var(--white-1);
        font-size: 30px;
    }
`;
export const TaskCardName = styled.h3`
    font-size: 22px;
    font-weight: 700;
    align-self: center;
    color: var(--white-1);
`;
export const DateText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: var(--white-1);
`;
export const StateSwordTag = styled.img`
    width: 100px;
`;