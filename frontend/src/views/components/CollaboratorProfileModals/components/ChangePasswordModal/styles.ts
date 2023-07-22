import CustomButton from "src/components/CustomButton/CustomButton";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    ${Content} {
        display: flex;
        place-items: unset;
        background-color: var(--darkblue-3);
        padding: 40px 70px;
        flex-direction: column;
    }
`;
export const SubtitleTextModal = styled.h3`
    color: var(--cream-1);
    font-size: 18px;
    font-weight: 700;
`;
export const ActualPassWrapper = styled(FlexFlow)`
    gap: 25px;
`;
export const PasswordTextField = styled(CustomTextField)`
    gap: 15px;
    label.primary {
        font-size: 16px;
        font-weight: 400;
        color: var(--cream-1);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
        width: 100%;
    }
`;
export const NewPasswordWrapper = styled(FlexFlow)`
    padding-top: 15px;
    gap: 30px;
`;
export const UpdateButton = styled(CustomButton)`
    font-size: 20px;
    padding: 10px 30px;
`;