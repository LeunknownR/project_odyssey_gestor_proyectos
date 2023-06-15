import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("form"))`
    padding: 0 20px 0 0;
`;
export const Label = styled.label`
    color: var(--white-1);
    font-weight: 700;
    max-width: 90px;
`;
export const DeleteSelectedDataField = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;
    padding: 2px;
    .iconify {
        font-size: 26px;
        color: var(--gray-1);
    }
    :hover {
        background-color: var(--white-1-12);
    }
`;
