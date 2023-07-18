//#region Libraries
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    border-radius: 5px;
    color: var(--white-1);
    background-color: var(--darkblue-1);
    border: 1px solid transparent;
    transition: 0.35s;
    user-select: none;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    & span {
        color: var(--white-1);
        font-size: 14px;
        font-weight: 700;
    }
    &.disabled {
        pointer-events: none;
        background-color: #4f6b7d;
        span {
            color: var(--white-1-50);
        }
    }
    &.error {
        border: 1px solid var(--red-3);
        background-color: transparent;
        span {
            color: var(--red-3);
        }
        &.disabled {
            opacity: 0.5;
        }
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 5px 10px;
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
