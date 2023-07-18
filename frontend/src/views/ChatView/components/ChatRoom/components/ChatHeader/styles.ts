import CustomButton from "src/components/CustomButton/CustomButton";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("header"))`
    align-items: center;
    padding: 15px 50px;
    background-color: var(--darkblue-3);
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
        padding: 15px 10px;
        justify-content: unset;
    }
`;
export const BackBtn = styled(CustomButton)`
    background: transparent;
    color: var(--white-1);
    font-size: 35px;
    padding: 0;
`;
export const ChatTitle = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: var(--white-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 215px;
    }
`;
export const ChatSubtitle = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: var(--white-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
    }
`;
export const CloseBtn = styled(CustomButton)`
    display: flex;
    background-color: transparent;
    align-items: center;
    align-items: center;
    justify-content: center;
    .iconify {
        font-size: 40px;
        color: var(--white-1);
        border-radius: 100%;
        transition: 0.3s;
        padding: 3px;
        :hover {
            background-color: var(--white-1-12);
        }
    }
`;
