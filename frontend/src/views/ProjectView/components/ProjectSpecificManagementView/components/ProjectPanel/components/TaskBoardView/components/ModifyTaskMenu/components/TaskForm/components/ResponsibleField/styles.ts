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
    font-size: 12px;
    color: var(--white-1);
    background: linear-gradient(180deg, #1c3241 0%, #acacac 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 5px 10px;
    border-radius: 7px;
`;
