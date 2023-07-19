import CustomButton from "src/components/CustomButton/CustomButton";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { Content, LensContainer, TextField } from "src/components/CustomTextField/styles";
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    border-radius: 5px;
    background-color: var(--darkblue-3);
`;
export const ChatTextField = styled(CustomTextField)`
    ${Content} {
        border: none;
        :focus-within {
            background-color: var(--darkblue-3);
        }
    }
    ${TextField} {
        color: var(--white-1);
        ::placeholder {
            color: var(--white-1-50);
        }
    }
    ${LensContainer} {
        order: -1;
        color: var(--white-1);
        margin: 0;
        padding-left: 20px;
    }
`;
export const CleanChatBtn = styled(CustomButton)`
    background-color: transparent;
    color: var(--white-1);
    font-size: 24px;
    .iconify {
        transition: 0.3s;
        border-radius: 50%;
        padding: 2px;
    }
    :hover .iconify {
        background-color: var(--white-1-12);
    }
`;