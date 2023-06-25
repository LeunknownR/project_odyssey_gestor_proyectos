import CustomButton from "src/components/CustomButton/CustomButton";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const SubtaskTextField = styled(CustomTextField)`
    padding: 0;
    color: var(--white-2);
    font-weight: 300;
    font-size: 16px;
    transition: 0.35s;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 14px;
    }
`;
export const Text = styled.p`
    color: var(--white-2);
    font-weight: 300;
    font-size: 16px;
`;
export const Container = styled(FlexFlow.withComponent("li"))`
    list-style: none;
    border: 1px solid var(--gray-3);
    border-radius: 3px;
    transition: 0.35s;
    &.checked {
        opacity: 0.4;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 8px;
    }
`;
export const Skull = styled(CustomButton)`
    color: var(--gray-3);
    transition: 0.3s;
    padding: 0;
    background: transparent;
    .iconify {
        font-size: 19px;
    }
    :hover {
        color: var(--red-3);
    }
`;
