import styled from "styled-components";
import BackgroundImage from "./temporal-fondo-borrar.png";
import { MOBILE_WIDTH } from "src/config/constants";

export const Container = styled.section`
    background: url(${BackgroundImage}) no-repeat;
    background-size: cover;
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
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 85%;
        padding: 40px 0 25px;
    }
`;
