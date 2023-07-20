//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.span`
    background-color: var(--darkblue-2);
    border: 1px solid var(--light-2);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transition: 0.35s;
    position: relative;
    user-select: none;
    cursor: pointer;
    & span {
        color: var(--white-1);
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &.selected {
        background-color: ${({ color = "var(--red-2)" }) => color};
        span {
            color: var(--darkblue-2);
        }
    }
`;