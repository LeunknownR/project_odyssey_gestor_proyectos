import styled from "styled-components";

export const Container = styled.div`
    &.clickable {
        cursor: pointer;
    }
`;
type UserPhoto = {
    src: any;
};
export const UserPhoto = styled.img<UserPhoto>``;
