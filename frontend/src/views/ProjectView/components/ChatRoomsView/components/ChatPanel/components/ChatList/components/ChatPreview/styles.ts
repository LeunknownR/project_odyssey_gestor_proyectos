import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("li"))`
    cursor: pointer;
    transition: 0.25s;
    padding: 8px 12px;
    border-radius: 5px;
    user-select: none;
    :hover {
        background-color: var(--white-1-12);
    }
`;
export const Wrapper = styled(FlexFlow)`
    width: 100%;
`;
export const NameDateWrapper = styled(FlexFlow)`
    width: 100%;
    justify-content: space-between;
`;
type ChatPreviewTitleProps = {
    maxWidth: string;
};
export const ChatPreviewTitle = styled.h5<ChatPreviewTitleProps>`
    color: var(--white-1);
    font-size: 19px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: ${({ maxWidth }) => maxWidth};
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
    font-weight: 300;
    font-size: 13px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 11px;
    }
`;
export const Content = styled.p`
    font-weight: 300;
    color: var(--white-1);
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
    white-space: nowrap;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
    }
`;
