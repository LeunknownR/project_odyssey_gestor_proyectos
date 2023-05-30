import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 43px;
    border-radius: 30px;
    @media (min-width: 600px) {
        background-color: var(--white-1-12);
        border: 3px solid var(--white-1-50);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 60px 60px 80px;
    }
`;
