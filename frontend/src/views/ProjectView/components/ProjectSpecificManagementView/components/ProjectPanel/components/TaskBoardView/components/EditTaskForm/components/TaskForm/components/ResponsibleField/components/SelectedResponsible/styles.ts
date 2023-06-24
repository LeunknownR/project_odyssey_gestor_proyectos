import styled from "styled-components";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";

export const Container = styled(FlexFlow)`
    background-color: var(--white-1-12);
    align-items: center;
    gap: 10px;
    padding: 8px 14px 8px 10px;
    border-radius: 10px;
    width: max-content;
    position: relative;
    & > span {
        display: block;
        width: 90%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: var(--white-1);
        font-weight: 700;
        @media (max-width: ${MOBILE_WIDTH}px) {
            max-width: 110px;
            font-size: 13px;
        }
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 2px 10px;
    }
`;
