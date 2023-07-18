import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("li"))``;
export const Wrapper = styled(FlexFlow)``;
export const NameDateWrapper = styled(FlexFlow)``;
export const Collaborator = styled.h5`
    color: var(--white-1);
    font-size: 16px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 170px;
    }
`;
export const Date = styled.span`
    font-weight: 700;
    color: var(--white-2);
    font-size: 12px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 11px;
    }
`;
export const Content = styled.p`
    font-weight: 300;
    color: var(--white-1);
    font-size: 14px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
    }
`;
