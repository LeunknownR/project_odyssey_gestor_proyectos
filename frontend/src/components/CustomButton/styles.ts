import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

type ContainerProps = {
    alignSelf?: string;
    width?: string;
    weight?: string;
    padding?: string;
    maxWidth?: string;
    backgroundColor?: string;
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
            @media (max-width: ${MOBILE_WIDTH}px) {
                padding: 5px 12px;
                font-size: 12px;
                gap: 5px;
                .iconify {
                    font-size: 18px;
                }
            }
        }
        :hover {
            background-color: var(--white-1);
            color: var(--dark-2);
            border: 2px solid var(--dark-2);
        }
    }
    &.secondary {
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
`;
type IconContainerProps = {
    isIconAfterText?: boolean;
};
export const IconContainer = styled.span<IconContainerProps>`
    display: flex;
    align-items: center;
    order: ${({ isIconAfterText }) => (isIconAfterText ? "1" : "0")};
`;
