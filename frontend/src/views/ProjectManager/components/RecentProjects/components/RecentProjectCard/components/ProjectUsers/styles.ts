import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 3px;
    align-items: center;
    > :first-child {
        background-color: var(--orange-3);
        color: var(--white-1);
    }
`;
export const UserBall = styled.div`
    border-radius: 50%;
    border: 1px solid var(--orange-2);
    color: var(--orange-2);
    padding: 4px 6.07px;
`;
