import CustomButton from "src/components/CustomButton/CustomButton";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const CloseFormBtn = styled(CustomButton)`
    background: transparent;
    position: absolute;
    color: var(--white-1);
    font-size: 39px;
    right: 5%;
    top: 5%;
    .iconify {
        display: flex;
        border-radius: 50%;
        padding: 3px;
        transition: 0.3s;
        :hover {
            background-color: var(--white-1-12);
        }
    }
`;
export const MobileHeader = styled(FlexFlow.withComponent("header"))`
    padding: 20px 0 0 10px;
    h2 {
        color: var(--cream-1);
        font-size: 21px;
    }
`;
export const BackBtn = styled(CustomButton)`
    background: transparent;
    .iconify {
        color: var(--white-1);
        font-size: 32px;
        border-radius: 50%;
        transition: 0.3s;
        :hover {
            background-color: var(--white-1-12);
        }
    }
`;
export const Container = styled(FlexFlow)`
    height: calc(100vh - var(--main-header-height));
    border-top: 2px solid var(--darkblue-4);
    padding: 50px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        border-top: unset;
        flex-direction: column;
        padding: 60px 35px;
        gap: 40px;
        justify-content: space-between;
    }
`;
export const ContentWrapper = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 40px;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    }
`;
export const PhotoUploaderWrapper = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        order: 1;
    }
`;
export const DataForm = styled(FlexFlow.withComponent("form"))`
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
    }
`;
export const FormSectionTitle = styled.h3`
    color: var(--white-1);
    font-size: 19px;
    translate: -8px;
`;
export const FormTextField = styled(CustomTextField)`
    gap: 15px;
    label.primary {
        font-size: 16px;
        font-weight: 400;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
