import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    cursor: pointer;
    transition: 0.3s;
    span {
        color: var(--white-1);
        font-size: 12px;
        font-weight: 700;
    }
    &.active, &:hover {
        background-color: var(--white-1);
        span {
            color: var(--darkblue-4);
        }
    }
`;
