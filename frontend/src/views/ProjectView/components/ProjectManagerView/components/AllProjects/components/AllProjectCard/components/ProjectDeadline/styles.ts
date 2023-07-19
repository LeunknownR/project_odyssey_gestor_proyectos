import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--white-1);
    font-size: 15px;
    background-color: var(--white-1-30);
    border-radius: 6px;
    padding: 8px 13px;
    width: 100%;
    gap: 10px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
        padding: 4px 10px;
        width: max-content;
        &.short {
            white-space: nowrap;
        }
    }
`;
export const Label = styled.label`
    color: var(--gray-1);
    font-weight: bold;
`;
export const Value = styled.span``;