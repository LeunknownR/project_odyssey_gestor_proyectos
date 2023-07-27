import styled from "styled-components";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import CustomButton from "src/components/CustomButton/CustomButton";

export const NewPasswordWrapper = styled(FlexFlow)`
    padding-top: 10px;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        gap: 22px;
        > :last-child {
            order: -1;
        }
    }
`;
export const UpdateButton = styled(CustomButton)`
    font-size: 20px;
    padding: 10px 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        margin-top: 20px;
    }
`;
