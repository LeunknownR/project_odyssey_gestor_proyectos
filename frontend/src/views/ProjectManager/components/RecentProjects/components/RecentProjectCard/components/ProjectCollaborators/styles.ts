import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 6px;
    align-items: center;
    user-select: none;
    > :first-child {
        background-color: var(--orange-3);
        color: var(--white-1);
    }
`; 
export const UserBall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--orange-2);
    color: var(--orange-2);
    width: 2em;
    height: 2em;
    @media (max-width: 600px) {
        font-size: 10px;
    }
`;
