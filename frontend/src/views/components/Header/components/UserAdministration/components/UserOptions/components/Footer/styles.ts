import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: row;
        gap: 5px;
    }
`;