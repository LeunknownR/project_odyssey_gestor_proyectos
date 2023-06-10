import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--darkblue-2);
    padding: 30px;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 15px;
    }
`;
export const Wrapper = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const TitleModal = styled.h1`
    font-size: 30px;
    color: var(--white-1);
    font-weight: bold;
    margin: 0 auto;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 15px;
    }
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        font-size: 34px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 26px;
        }
    }
`;
