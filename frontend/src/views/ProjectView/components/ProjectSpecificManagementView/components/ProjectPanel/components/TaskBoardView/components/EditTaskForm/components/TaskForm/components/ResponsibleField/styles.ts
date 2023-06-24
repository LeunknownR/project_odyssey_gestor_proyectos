import CustomButton from "src/components/CustomButton/CustomButton";
import { Content } from "src/components/CustomTextField/styles";
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    gap: 20px;
    ${Content} {
        background-color: var(--white-1-12);
        border: none;
        border-radius: 10px;
        color: var(--gray-1);
        input::placeholder {
            color: var(--gray-2);
        }
        .iconify {
            color: var(--gray-1);
        }
    }
`;
export const SelfAssignmentButton = styled(CustomButton)`
    font-size: 11px;
    color: var(--white-1);
    text-decoration: underline;
    background: none;
    font-weight: 700;
`;
