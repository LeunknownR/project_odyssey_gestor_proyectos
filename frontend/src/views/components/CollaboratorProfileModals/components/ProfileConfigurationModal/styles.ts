import CustomButton from "src/components/CustomButton/CustomButton";
import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import { FlexFlow } from "src/components/styles";
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
`;
export const Modalheader = styled(FlexFlow.withComponent("header"))``;
export const CloseBtn = styled(CustomButton)`
    background: transparent;
    .iconify {
        font-size: 40px;
        color: var(--white-1);
        transition: 0.3s;
        :hover {
            color: var(--yellow-1);
        }
    }
`;
export const TitleModal = styled.h2`
    color: var(--white-1);
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
`;
export const UserContainer = styled(FlexFlow)``;
export const UserDataContainer = styled(FlexFlow)`
    gap: 14px;
`;
export const UserData = styled(FlexFlow)`
    gap: 5px;
    flex-direction: column;
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
`;
