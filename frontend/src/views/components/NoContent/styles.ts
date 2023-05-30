//#region Libraries
import styled from "styled-components";
//#endregion
export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;
export const Image = styled.img`
    width: 250px;
    &.small {
        width: 140px;
    }
    &.medium {
        width: 180px;
    }
    &.big {
        width: 350px;
    }
    &.custom-size {
        width: ${({ width = "unset" }) => width};
    }
    @media (max-width: 500px) {
        width: 245px;
        &.custom-size {
            width: ${({ width = "unset" }) => `calc(${width}/1.5)`};
        }
    }
`;
export const Title = styled.h3`
    color: ${({ color }) => color};
    font-size: 22px;
    margin-top: 30px;
    &.small {
        font-size: 14px;
    }
    &.no-title {
        margin-top: 0;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;
export const Subtitle = styled.p`
    color: ${({ color }) => color};
    font-size: 15px;
    margin-top: 15px;
    text-align: center;
    &.small {
        font-size: 12px;
    }
    @media (max-width: 500px) {
        font-size: 12px;
    }
`;
