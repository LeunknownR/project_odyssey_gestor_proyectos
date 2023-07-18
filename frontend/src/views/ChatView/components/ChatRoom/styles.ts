import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 100%;
    border-top: 1px solid var(--darkblue-4);
    height: calc(100vh - var(--main-header-height));
    background-color: var(--darkblue-4);
    @media (max-width: ${MOBILE_WIDTH}px) {
        height: 100%;
    }
`;
