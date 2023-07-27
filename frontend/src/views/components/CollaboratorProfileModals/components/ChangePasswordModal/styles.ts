import CustomTextField from "src/components/CustomTextField/CustomTextField";
import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    ${Content} {
        display: flex;
        place-items: unset;
        background-color: var(--darkblue-3);
        padding: 40px 70px;
        flex-direction: column;
        @media (max-width: ${MOBILE_WIDTH}px) {
            padding: 35px 25px;
        }
    }
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
