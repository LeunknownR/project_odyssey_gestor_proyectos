import styled from 'styled-components';

export const GoHome = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: 2px solid transparent;
    color: var(--white-1);
    font-size: 20px;
    font-weight: 700;
    gap: 5px;
    transition: 0.25s;
    border-radius: 10px;
    padding: 5px 15px;
    user-select: none;
    :hover {
        border: 2px solid var(--white-1);
    }
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        font-size: 30px;
    }
`;