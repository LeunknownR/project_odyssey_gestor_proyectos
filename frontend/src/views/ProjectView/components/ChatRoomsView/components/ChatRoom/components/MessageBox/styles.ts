import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Content } from "src/components/CustomTextArea/styles";
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const ChatInputContainer= styled(FlexFlow)`
    background-color: var(--darkblue-3);
    padding: 25px 40px;
`;
export const ChatInput = styled(CustomTextArea)`
    background-color: var(--darkblue-2);
    border-radius: 10px;
    ${Content} {
        border: none;
        min-height: unset;
    }
`;
export const IconContainer = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    .iconify {
        font-size: 35px;
        color: var(--darkblue-5);
    }
`;