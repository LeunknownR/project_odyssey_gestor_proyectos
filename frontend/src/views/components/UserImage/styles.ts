import styled from "styled-components";

export const Container = styled.div`
    &.clickable {
        cursor: pointer;
    }
`;
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
    &.medium {
        font-size: 28px;
    }
    &.small {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        font-size: 22px;
        &.big {
            font-size: 26px;
        }
        &.small {
            font-size: 12px;
        }   
    }
`;
