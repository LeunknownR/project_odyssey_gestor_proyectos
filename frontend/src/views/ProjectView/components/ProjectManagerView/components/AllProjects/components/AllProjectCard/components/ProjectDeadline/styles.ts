import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--white-1);
    font-size: 15px;
    background-color: var(--white-1-50);
    border-radius: 6px;
    padding: 8px 13px;
    width: 100%;
    &.short {
        font-size: 13px;
        padding: 4px 10px;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
        width: unset;
        &.short {
            white-space: nowrap;
        }
    }
`;
