import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        color: var(--white-1);
        font-size: 36px;
    }
`;
export const Title = styled.h2`
    color: var(--white-1);
`;
export const AddMemberButton = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: rgba(222, 222, 222, 0.15);
    outline: none;
    border: 2.5px dashed var(--white-1-50);
    border-spacing: 20px;
    border-radius: 10px;
    color: var(--white-2);
    gap: 8px;
    font-weight: 700;
    font-size: 14px;
    padding: 3px 12px;
    .iconify {
        display: flex;
        font-size: 24px;
    }
`;