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
    border-radius: 3px;
    align-self: ${({ alignSelf }) => alignSelf};
    width: ${({ width }) => width};
    font-weight: ${({ weight }) => weight};
    padding: ${({ padding }) => padding};
    &:disabled {
        pointer-events: none;
    }
    &.main {
        color: var(--white-1);
        background-color: var(--dark-2);
        border-radius: 10px;
        font-weight: 700;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 2px solid transparent;
        :disabled {
            background-color: var(--gray-3);
            color: var(--dark-1);
            pointer-events: none;
        }
        &.big {
            font-size: 22px;
            padding: 13px 50px;
        }
        &.normal {
            padding: 8px;
            min-width: 110px;
        }
        &.small {
            padding: 5px 22px;
        }
        &.supersmall {
            padding: 5px 12px;
            .iconify {
                font-size: 18px;
            }
        }
        :hover {
            background-color: var(--white-1);
            color: var(--dark-2);
            border: 2px solid var(--dark-2);
        }
    }
    &.main-2 {
        background-color: transparent;
        border: 1px solid var(--gray-3);
        border-radius: 10px;
        color: var(--gray-3);
        font-weight: 700;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &.normal {
            padding: 8px;
            min-width: 110px;
        }
        :hover {
            color: var(--dark-4);
            border-color: var(--dark-4);
        }
    }
    &.user-options-config {
        color: var(--white-1);
        background-color: #162834;
        padding: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        :hover {
            color: #162834;
            background-color: var(--white-1);
        }
    }
    &.user-options-logout {
        color: var(--white-1);
        background-color: #8e4229;
        padding: 8px;
        font-weight: 700;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        :hover {
            color: #8e4229;
            background-color: var(--white-1);
        }
    }
    &.blue-modal {
        color: var(--white-1);
        background-color: var(--darkblue-2);
        border: 1px solid transparent;
        font-size: 17px;
        font-weight: 700;
        padding: 8px;
        min-width: 125px;
        :hover {
            background-color: var(--darkblue-1);
        }
        &:disabled {
            background-color: var(--darkblue-0);
        }
    }
    &.blue-modal-2 {
        background-color: transparent;
        border: 1px solid var(--darkblue-2);
        font-size: 17px;
        font-weight: 700;
        color: var(--darkblue-2);
        padding: 8px;
        min-width: 125px;
        :hover {
            border-color: transparent;
        }
    }
    &.red-modal {
        background-color: var(--red-2);
        color: var(--white-1);
        font-weight: 700;
        padding: 6px;
        min-width: 110px;
        :hover {
            background-color: var(--red-3);
        }
    }
    &.red-modal-2 {
        background-color: transparent;
        color: var(--dark-2);
        border: 1px solid var(--dark-2);
        font-weight: 700;
        padding: 6px;
        min-width: 110px;
        :hover {
            border-color: transparent;
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
