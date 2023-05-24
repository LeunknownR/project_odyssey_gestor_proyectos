import styled from "styled-components";
type ContainerProps = {
    className?: any;
    onMouseDown: any;
};
export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--cream-1);
    user-select: none;
    font-size: 28px;
    min-width: 64px;
    min-height: 64px;
    max-width: 67px;
    max-height: 67px;
    width: 100%;
    height: 100%;
    &.clickable {
        cursor: pointer;
        font-size: 22px;
        min-width: 42px;
        min-height: 42px;
    }
`;
type NameInitialsProps = {
    className?: any;
};
export const NameInitials = styled.span<NameInitialsProps>`
    color: var(--dark-1);
    font-weight: 700;
    &.bigger {
        font-size: 32px;
    }
`;
type UserPhoto = {
    src: any;
};
export const UserPhoto = styled.img<UserPhoto>``;
