//#region Libraries
import styled from "styled-components";
//#endregion
export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    &,
    & * {
        cursor: pointer;
    }
    & label {
        color: var(--gray-1);
        font-size: 12px;
        user-select: none;
    }
    input {
        display: none;
    }
`;
export const Checkbox = styled.div`
    display: inline-block;
    position: relative;
    height: 13px;
    width: 13px;
    background-color: transparent;
    border: 1px solid var(--gray-1);
    border-radius: 1px;
    &.checked {
        background-color: var(--gray-1);
        ::after {
            opacity: 1;
        }
    }
    ::after {
        content: "";
        position: absolute;
        border: solid black;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        width: 2px;
        height: 7px;
        left: 4px;
        top: 0px;
        opacity: 0;
    }
`;
