import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 65%;
    border-top: 1px solid var(--darkblue-4);
    height: calc(100vh - var(--main-header-height));
    background-color: var(--darkblue-4);
    @media (max-width: ${MOBILE_WIDTH}px) {
        position: absolute;
        left: 0;
        visibility: hidden;
        opacity: 0;
        translate: 100%;
        width: 100%;
        height: calc(100vh - var(--main-sidebar-height-mobile));
        transition: 4s;
        &.open {
            translate: 0%;
            opacity: 1;
            visibility: visible;
        }
    }
`;
