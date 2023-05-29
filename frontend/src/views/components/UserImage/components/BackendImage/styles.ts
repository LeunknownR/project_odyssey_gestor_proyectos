import styled from "styled-components";

type ImageProps = {
    src: any;
}
export const Image = styled.img<ImageProps>`
    width: 2em;
    height: 2em;
    font-size: 28px;
    border-radius: 100%;
    &.big {
        font-size: 32px;
    }
    &.small {
        font-size: 14px;
    }
`;
