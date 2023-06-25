import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { Content, LensContainer, TextField } from "src/components/CustomTextField/styles";
import styled from "styled-components";

export const ChatTextField = styled(CustomTextField)`
    ${Content} {
        border: none;
        background-color: var(--darkblue-3);
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
