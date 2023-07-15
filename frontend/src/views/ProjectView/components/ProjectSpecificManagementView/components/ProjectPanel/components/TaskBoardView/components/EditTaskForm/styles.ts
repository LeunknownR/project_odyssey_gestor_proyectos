import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("section"))`
    flex-direction: column;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 100;
    overflow: hidden;
    transition: 0.4s;
    translate: 105%;
    border-left: 1px solid var(--darkblue-0);
    background-color: var(--darkblue-4);
    width: 35%;
    outline: none;
    height: calc(100vh - var(--main-header-height));
    &.show {
        translate: 0;
    }
    &.disabled > * {
        opacity: 0.3;
        user-select: none;
        pointer-events: none;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        height: calc(100vh - var(--main-sidebar-height-mobile));
        width: 100%;
        top: 0;
        left: 0;
        border-left: none
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px 15px 20px 30px;
    height: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 15px 15px 20px 25px;
    }
`;
