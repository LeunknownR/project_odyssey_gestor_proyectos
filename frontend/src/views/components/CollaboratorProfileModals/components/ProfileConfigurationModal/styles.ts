import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    ${Content} {
        display: flex;
        background-color: var(--darkblue-3);
        padding: 65px 70px;
        gap: 40px;
        flex-direction: column;
    }
`;
export const Modalheader = styled(FlexFlow.withComponent("header"))`
    gap: 100px;
    .iconify {
        cursor: pointer;
        font-size: 40px;
        color: var(--white-1);
        transition: 0.3s;
    }
    &:hover {
        .iconify {
            color: var(--yellow-1);
        }
    }
`;
export const TitleModal = styled.h2`
    color: var(--white-1);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const UserContainer = styled(FlexFlow.withComponent("div"))`
    gap: 70px;
`;
export const UserDataContainer = styled(FlexFlow.withComponent("div"))`
    gap: 14px;
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: repeat(2, auto);
`;
export const UserData = styled(FlexFlow.withComponent("div"))`
    gap: 5px;
    flex-direction: column;
`;
export const UserDataSubtitle = styled.h3`
    color: var(--yellow-1);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const UserDataModal = styled.p`
    font-size: 16px;
    color: var(--white-1);
    text-align: start;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 14px;
    }
`;
export const ProfileChangeConfigurationButton = styled(FlexFlow.withComponent("button"))`
    gap: 7px;
    background-color: transparent;
    border-color: transparent;
    color: var(--red-2);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    .iconify {
        font-size: 19px;
        color: var(--red-2);
    }
    &:hover {
        color: var(--red-4);
        .iconify {
            color: var(--red-4);
        }
    }
`;
