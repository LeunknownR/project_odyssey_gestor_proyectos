//#region Libraries
import styled from "styled-components";
//#endregion

type ContainerProps = {
    className?: any;
}
export const Container = styled.section<ContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #00000095;
    display: grid;
    place-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;
    z-index: 1000;
    &.open {
        opacity: 1;
        visibility: visible;
    }
`;
type ContentProps = {
    padding?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string
    className?: any;
    onMouseDown: any;
}
export const Content = styled.article<ContentProps>`
    display: grid;
    place-items: center;
    background-color: var(--white-1);
    border-radius: 10px;
    gap: 20px;
    padding: ${({ padding = "40px 60px" }) => padding};
    transform: translateY(-800px);
    width: ${({ width = "100%" }) => width};
    min-width: ${({ minWidth = "300px" }) => minWidth};
    max-width: ${({ maxWidth = "max-content" }) => maxWidth};
    transition: 0.3s;
    position: relative;
    &.opened {
        transform: translateY(0);
    }
    @media (max-width: 850px) {
        width: 80vw;
    }
`;
type ModalImgProps = {
    maxWidth?: string;
}
export const ModalImg = styled.img<ModalImgProps>`
    max-width: ${({maxWidth = "280px"}) => maxWidth};
    @media (max-width: 500px) {
        max-width: 160px;
    }
`;
