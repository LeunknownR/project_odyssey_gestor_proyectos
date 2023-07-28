import CustomButton from "src/components/CustomButton/CustomButton";
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
        padding: 55px 60px;
        gap: 40px;
        flex-direction: column;
        min-width: 47%;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        ${Content} {
            padding: 25px 22px 45px;
            gap: 25px;
        }
    }
`;
export const UserContainer = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 32px;
    }
`;
export const UserDataContainer = styled(FlexFlow)`
    gap: 14px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const UserData = styled(FlexFlow)`
    gap: 5px;
    flex-direction: column;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const NamesWrapper = styled(FlexFlow)`
    gap: 20px;
    span {
        max-width: 130px;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        gap: 10px;
    }
`;
export const ChangePasswordButton = styled(CustomButton)`
    background-color: transparent;
    color: var(--red-0);
    font-size: 16px;
    font-weight: 700;
    transition: 0.3s;
    justify-content: normal;
    padding: 0;
    padding-top: 15px;
    .iconify {
        font-size: 20px;
        color: var(--red-0);
        transition: 0.3s;
    }
    :hover {
        color: var(--red-4);
        .iconify {
            color: var(--red-4);
        }
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
        padding-top: 7px;
        .iconify {
            font-size: 15px;
        }
    }
`;
