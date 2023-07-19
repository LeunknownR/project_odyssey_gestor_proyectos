//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    cursor: pointer;
    & svg {
        color: var(--gray-1);
        transform: rotate(90deg);
        transition: 0.35s;
        font-size: 20px;
        :hover {
            color: var(--white-1);
        }
    }
    &.first-or-last {
        cursor: not-allowed;
        & svg {
            color: var(--gray-4);
        }
    }
    &.next svg {
        transform: rotate(-90deg);
    }
    &:hover > *:last-child {
        visibility: visible;
        opacity: 1;
    }
`;