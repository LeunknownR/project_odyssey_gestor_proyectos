import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
    width: 65%;
    height: calc(100vh - var(--main-header-height));
    align-self: center;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--darkblue-4);
    background-color: var(--darkblue-3);
`;