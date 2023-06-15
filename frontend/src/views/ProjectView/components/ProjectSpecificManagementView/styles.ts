import styled from "styled-components";
import BackgroundImage from "./temporal-fondo-borrar.png";
import { MOBILE_WIDTH } from "src/config/constants";

export const Container = styled.section`
    background-color: var(--darkblue-4);
    background: url(${BackgroundImage}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    min-height: calc(100vh - var(--main-header-height));;
    padding: 5vw 8vw; 
    padding-top: 3vw;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 5vh 10vw;
        min-height: calc(100vh - var(--main-sidebar-height-mobile));
    }
`;