import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Content } from "src/components/CustomTextArea/styles";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const ChatInputContainer= styled(FlexFlow)`
    background-color: var(--darkblue-3);
    padding: 25px 40px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 20px 25px;
        bottom: var(--main-sidebar-height-mobile);
        width: 100%;
    }
`;
export const ChatInput = styled(CustomTextArea)`
    border-radius: 8px;
    &.primary {
        background-color: var(--darkblue-2);
    }
    ${Content} {
        border: none;
        min-height: unset;
    }
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
    .iconify {
        font-size: 35px;
        color: var(--darkblue-5);
        transition: 0.3s;
    }
    :hover {
        .iconify {
            color: var(--orange-3);
        }
    }
`;