import CustomButton from "src/components/CustomButton/CustomButton";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        color: var(--white-1);
        font-size: 36px;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        .iconify {
            font-size: 24px;
        }
    }
`;
export const Wrapper = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 5px;
    }
`;
export const Title = styled.h2`
    color: var(--white-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
    }
`;
export const DashedAddButton = styled(CustomButton)`
    background-color: rgba(222, 222, 222, 0.15);
    border: 2.5px dashed var(--white-1-50);
    border-radius: 10px;
    color: var(--white-2);
    gap: 8px;
    font-weight: 700;
    font-size: 14px;
    padding: 3px 12px;
    .iconify {
        display: flex;
        font-size: 24px;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 11px;
        gap: 5px;
        padding: 3px 5px;
    }
`;
