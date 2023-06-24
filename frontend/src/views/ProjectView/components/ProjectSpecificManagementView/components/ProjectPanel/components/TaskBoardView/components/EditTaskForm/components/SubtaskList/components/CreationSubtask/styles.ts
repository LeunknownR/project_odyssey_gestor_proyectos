import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("li"))`
    list-style: none;
    border: 1px solid var(--gray-3);
    border-radius: 3px;
    &.checked {
        opacity: 0.4;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 8px;
    }
`;
