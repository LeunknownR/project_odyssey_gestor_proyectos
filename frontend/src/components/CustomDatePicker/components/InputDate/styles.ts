//#region Libraries
import styled from "styled-components";
//#endregion

type ContainerProps = {
    onClick?: any;
};
export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    border-radius: 5px;
    color: var(--white-1);
    background-color: var(--darkblue-1);
    transition: 0.35s;
    user-select: none;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    & span {
        color: var(--white-1);
        font-size: 14px;
        font-weight: 400;
    }
    &.error {
        border-color: var(--red-2);
    }
    &.disabled {
        pointer-events: none;
        color: var(--purple-4);
        border-color: var(--purple-4);
        & .iconify {
            color: var(--purple-4);
        }
    }
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        color: var(--light-gray-5);
        transition: inherit;
        font-size: 24px;
    }
`;
