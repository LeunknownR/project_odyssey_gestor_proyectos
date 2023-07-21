import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    ${Content} {
        display: flex;
        background-color: var(--darkblue-3);
        padding: 40px 70px;
        flex-direction: column;
        align-items: flex-start;
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
export const NotificationContainer = styled(FlexFlow.withComponent("section"))`
    padding: 9px 12px;
    align-items: center;
    background-color: #ffe0b2;
    border-radius: 10px;
    color: var(--darkblue-2);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-items: center;
    gap: 5px;
    .iconify {
        font-size: 24px;
        color: var(--darkblue-2);
    }
`;
export const SubtitleTextModal = styled.h3`
    color: #ffe0b2;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const PasswordConfirmationContainer = styled(FlexFlow.withComponent("div"))`
    flex-direction: row;
    gap: 25px;
`;
export const NewPasswordConfirmationContainer = styled(FlexFlow.withComponent("div"))`
    padding-top: 15px;
    flex-direction: row;
    gap: 40px;
`;
export const IndividualRequirement = styled(FlexFlow.withComponent("div"))`
    color: var(--red-2);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 7px;
    .iconify {
        font-size: 15px;
    }
`;
export const ContentRequirements = styled(FlexFlow.withComponent("ol"))`
    flex-direction: column;
    gap: 5px;
    min-width: 160px;
`;
