import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    @media (min-width: 600px) {
        &.in-sidebar {
            display: none;
        }
    }
`;
