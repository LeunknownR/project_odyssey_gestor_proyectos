import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(8, 27, 40, 0.7);
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
        font-size: 18px;
        margin: 0;
        color: var(--white-1);
        user-select: none;
        translate: 0 -20px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--white-1);
`;
export const Blades = styled.img`
    animation: linear ${spinnerAnimation} 1.2s infinite;
`;
