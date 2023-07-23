import CustomButton from "src/components/CustomButton/CustomButton";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Modalheader = styled(FlexFlow.withComponent("header"))``;
export const TitleModal = styled.h2`
    color: var(--white-1);
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 21px;
    }
`;
export const CloseBtn = styled(CustomButton)`
    background: transparent;
    padding: 0;
    .iconify {
        font-size: 40px;
        color: var(--white-1);
        transition: 0.3s;
        :hover {
            color: var(--yellow-1);
        }
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 28px;
        }
    }
`;
