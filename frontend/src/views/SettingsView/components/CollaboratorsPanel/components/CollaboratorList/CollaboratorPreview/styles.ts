import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import UserImage from "src/views/components/UserImage/UserImage";
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
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 16px;
    }
`;
export const CollaboratorImage = styled(UserImage)`
  
`;
export const CollaboratorName = styled.h5`
    color: var(--white-1);
    font-size: 19px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 16px;
        max-width: 225px;
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
        font-size: 13px;
        width: 225px;
    }
`;
