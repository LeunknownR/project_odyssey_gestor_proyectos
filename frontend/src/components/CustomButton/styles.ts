import styled from "styled-components";

type ContainerProps = {
    alignSelf?: string;
    width?: string;
    weight?: string;
    padding?: string;
    maxWidth?: string;
};
export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.35s;
    user-select: none;
    cursor: pointer;
    border: 0;
    align-self: ${({ alignSelf }) => alignSelf};
    width: ${({ width }) => width};
    font-weight: ${({ weight }) => weight};
    padding: ${({ padding }) => padding};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &.main {
        color: var(--white-1);
        background-color: var(--dark-2);
        padding: 13px 50px;
        font-size: 22px;
        border-radius: 10px;
        font-weight: 700;
        :disabled {
            background-color: var(--gray-3);
            color: var(--dark-1);
        }
    }
    &.user-options-config {
        color: var(--white-1);
        background-color: #162834;
        border-radius: 3px;
        padding: 8px;
        :hover {
            color: #162834;
            background-color: var(--white-1);
        }
    }
    &.user-options-logout {
        color: var(--white-1);
        background-color: #8e4229;
        border-radius: 3px;
        padding: 8px;
        font-weight: 700;
        :hover {
            color: #8e4229;
            background-color: var(--white-1);
        }
    }
`;
type IconContainerProps = {
    isIconAfterText?: boolean;
};
export const IconContainer = styled.span<IconContainerProps>`
    display: flex;
    align-items: center;
    order: ${({ isIconAfterText }) => (isIconAfterText ? "1" : "0")};
`;
