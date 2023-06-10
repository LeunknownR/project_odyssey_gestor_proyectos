import styled from "styled-components";
import {
    LabelContent,
    Content as TextArea,
} from "src/components/CustomTextArea/styles";

export const Wrapper = styled.div`
    ${LabelContent} {
        font-size: 16px;
    }
    ${TextArea} {
        background-color: transparent;
        border-color: var(--gray-3);
        textarea {
            min-height: 50px;
        }
    }
`;
