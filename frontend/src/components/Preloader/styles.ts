import styled, { keyframes } from "styled-components";

export const Container = styled.section` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #151515cc;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    transition: opacity 0.35s, visibility 0.35s;
    visibility: visible;
    opacity: 1;
    &.hidden {
        visibility: hidden;
        opacity: 0;
    }
    & h6 {
        font-size: 14px;
        margin: 0;
        color: var(--white-1);
        user-select: none;
    }
`;

const spinnerAnimation = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;
export const Spinner = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: var(--white-1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    & span {
        width: calc(72px/2);
        height: calc(72px/2);
        border-radius: inherit;
        border: 4px solid var(--orange-3);
        border-bottom-color: transparent;
        animation: linear ${spinnerAnimation} 0.65s infinite;
    }
`;