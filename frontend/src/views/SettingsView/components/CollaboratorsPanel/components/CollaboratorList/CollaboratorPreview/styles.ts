import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("li"))`
    cursor: pointer;
    transition: 0.25s;
    padding: 8px 12px;
    border-radius: 5px;
    user-select: none;
    &.active, :hover {
        background-color: var(--white-1-12);
    }
`;
export const CollaboratorName = styled.h5`
    color: var(--white-1);
    font-size: 19px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 14px;
        max-width: 175px;
    }
`;
export const Date = styled.span`
    font-weight: 700;
    color: var(--white-2);
    font-weight: 300;
    font-size: 13px;
    white-space: nowrap;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 11px;
    }
`;
export const Email = styled.p`
    font-weight: 300;
    color: var(--white-1);
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
    white-space: nowrap;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
        width: 230px;
    }
`;
