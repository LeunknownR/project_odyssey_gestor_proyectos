import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("section"))`
    width: calc(100vw - var(--main-sidebar-width));
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
        height: calc(100vh - var(--main-sidebar-height-mobile));
        z-index: 1;
    }
`;
export const CollaboratorFormWrapper = styled.section`
    width: 65%;
    background-color: var(--darkblue-3);
    position: relative;
    @media (max-width: ${MOBILE_WIDTH}px) {
        position: fixed;
        bottom: var(--main-sidebar-height-mobile);
        visibility: hidden;
        opacity: 0;
        translate: 100%;
        width: 100%;
        height: calc(100vh - var(--main-sidebar-height-mobile));
        transition: 0.35s;
        &.open {
            translate: 0%;
            opacity: 1;
            visibility: visible;
        }
    }
`;
