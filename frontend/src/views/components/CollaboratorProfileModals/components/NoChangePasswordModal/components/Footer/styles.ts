import { MOBILE_WIDTH } from "src/config/constants";
import {
    CancelRedModalButton,
    ConfirmRedModalButton,
} from "src/views/ProjectView/components/styles";
import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-self: flex-end;
    gap: 20px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const CustomCancelRedModalButton = styled(CancelRedModalButton)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 10px;
        min-width: 60px;
    }
`;
export const CustomConfirmRedModalButton = styled(ConfirmRedModalButton)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 10px;
        min-width: 60px;
    }
`;
