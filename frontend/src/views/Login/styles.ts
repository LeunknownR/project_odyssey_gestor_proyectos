import styled from "styled-components";
import BackgroundImage from "./temporal-fondo-borrar.png";
import { MOBILE_WIDTH } from "src/config/constants";
export const Container = styled.section`
    display: flex;
    height: 100vh;
    padding: 0 269px 0 190px;
    gap: 100px;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;
export const Slogan = styled.div`
    flex: 1;
    h1 {
        font-size: 45px;
        color: #fff;
    }
    @media (max-width: ${MOBILE_WIDTH}) {
        display: none;
    }
`;
export const Logo = styled.img`
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 50px;
`;
