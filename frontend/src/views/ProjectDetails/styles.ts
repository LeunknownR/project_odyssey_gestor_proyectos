import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--darkblue-4);
    display: flex;
    justify-content: center;
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 50px;
    min-height: calc(100vh - 75px);
    margin-left: 75px;
    width: 80%;
    margin-top: 50px;
`;
