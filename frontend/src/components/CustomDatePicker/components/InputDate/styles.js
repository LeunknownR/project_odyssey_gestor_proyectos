//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 14px;
    border-radius: 4px;
    color: var(--light-gray-5);
    background-color: var(--light-1);
    border: 1px solid var(--purple-4);
    transition: 0.35s;
    user-select: none;
    cursor: pointer;
    & span {
        font-size: 13px;
    }
    & svg {
        fill: var(--light-gray-5);
        transition: inherit;
    }
    &.error {
        border-color: var(--red-2);
    }
    &.disabled {
        pointer-events: none;
        color: var(--purple-4);
        border-color: var(--purple-4);
        & svg {
            fill: var(--purple-4);
        }
    }
`;