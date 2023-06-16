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
export const Check = styled.span`
    display: flex;
    cursor: pointer;
    .iconify {
        border-radius: 50%;
        color: var(--white-1);
        font-size: 20px;
    }
`;
