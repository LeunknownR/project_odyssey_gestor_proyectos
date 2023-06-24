import styled from "styled-components";
import {
    LabelContent,
    Content as TextArea,
} from "src/components/CustomTextArea/styles";
import { MOBILE_WIDTH } from "src/config/constants";

export const Wrapper = styled.div`
    ${LabelContent} {
        font-size: 16px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 13px;
        }
    }
    ${TextArea} {
        background-color: transparent;
        border-color: var(--gray-3);
        textarea {
            min-height: 50px;
        }
    }
`;
