import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("li"))`
    list-style: none;
    border: 1px solid var(--gray-3);
    border-radius: 3px;
    &.checked {
        opacity: 0.4;
    }
`;
export const SubtaskTextField = styled(CustomTextField)`
    padding: 0;
    color: var(--white-2);
    font-weight: 300;
    font-size: 16px;
    width: 300px;
`;
export const Check = styled.span`
    display: flex;
    cursor: pointer;
    .iconify {
        border-radius: 50%;
        color: var(--white-1);
        font-size: 20px;
    }
`;
export const Text = styled.p`
    color: var(--white-2);
    font-weight: 300;
    font-size: 16px;
`;
export const Skull = styled.p`
    display: flex;
    color: var(--gray-3);
    cursor: pointer;
    transition: 0.3s;
    .iconify {
        font-size: 19px;
    }
    :hover {
        color: var(--red-3);
    }
`;
