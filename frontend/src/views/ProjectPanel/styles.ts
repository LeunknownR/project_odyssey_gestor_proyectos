import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--darkblue-4);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: calc(100vh - var(--main-header-height));
    width: 85%;
    margin-top: 50px;
    margin-bottom: 30px;
    @media (max-width: 600px) {
        margin-bottom: 0;
    }
`;
