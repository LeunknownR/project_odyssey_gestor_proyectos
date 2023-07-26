import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow)``;
export const TextFieldsWrapper = styled(FlexFlow)`
    max-width: 416px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const PasswordWrapper = styled(FlexFlow)`
    & .custom-checkbox {
        align-self: flex-end;
        translate: 30px;
    }
`;