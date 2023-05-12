import styled, { keyframes } from "styled-components";

export const Text = styled.h1``;
const blink = keyframes`
    50% { border-color: transparent }
`;
export const Cursor = styled.span`
    padding-left: 10px;
    border-right: 8px solid #fff;
    animation: ${blink} .5s infinite step-end alternate;
`;
