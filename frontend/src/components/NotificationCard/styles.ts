import styled from "styled-components";

type ContainerProps = {
    progress?: number;
    transition?: string;
};
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    flex: grid;
    gap: 10px;
    position: fixed;
    left: 0;
    bottom: 15%;
    z-index: 1000;
    padding: 45px 60px 45px 30px;
    background-color: #1e1e1e;
    transition: 0.4s;
    translate: -105%;
    border: 1px solid var(--white-1-50);
    border-left: 0;
    border-radius: 0px 5px 5px 0px;
    overflow: hidden;
    &.visible {
        translate: 0;
    }
    ::before {
        content: "";
        position: absolute;
        width: ${({ progress }) => `${progress}%`};
        height: 7px;
        background-color: ${({ color }) => color};
        transition: 0.4s;
        top: 0;
        left: 0;
    }
`;
export const CloseIconContainer = styled.span`
    display: flex;
    position: absolute;
    top: 15px;
    right: 10px;
    .iconify {
        font-size: 26px;
        color: var(--white-1-50);
        cursor: pointer;
    }
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    .iconify {
        font-size: 24px;
        color: ${({ color }) => color};
    }
`;
export const TitleModal = styled.h3`
    font-size: 20px;
    color: ${({ color }) => color};
    font-weight: 700;
    text-align: start;
`;
export const TextModal = styled.p`
    font-size: 17px;
    width: 100%;
    font-weight: 300;
    color: var(--white-1-50);
`;
