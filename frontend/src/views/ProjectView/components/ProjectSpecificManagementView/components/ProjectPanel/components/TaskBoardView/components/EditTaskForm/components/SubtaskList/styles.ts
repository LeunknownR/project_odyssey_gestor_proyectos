import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
`;
export const Check = styled.span`
    display: flex;
    cursor: pointer;
    transition: 0.35s;
    .iconify {
        border-radius: 50%;
        color: var(--white-1);
        font-size: 20px;
        transition: 0.35s;
    }
`;
