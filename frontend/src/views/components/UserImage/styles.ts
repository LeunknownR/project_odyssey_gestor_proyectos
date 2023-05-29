import styled from "styled-components";

export const Container = styled.div`
    &.clickable {
        cursor: pointer;
    }
`;
type UserPhoto = {
    src: any;
};
export const UserPhoto = styled.img<UserPhoto>`
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
