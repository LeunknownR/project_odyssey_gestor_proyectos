import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--darkblue-4);
    display: flex;
    justify-content: center;
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-height: calc(100vh - var(--main-header-height));
    width: 80%;
    padding: 50px 0;
`;
