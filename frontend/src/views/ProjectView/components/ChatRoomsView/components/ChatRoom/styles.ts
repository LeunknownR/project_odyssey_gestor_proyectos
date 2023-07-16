import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 65%;
    border-top: 1px solid var(--darkblue-4);
    height: calc(100vh - var(--main-header-height));
    @media (max-width: ${MOBILE_WIDTH}px) {
        //GNOMO
        /* position: absolute;
        left: 105%;
        visibility: hidden;
        opacity: 0;
        display: none; */
        width: 100%;
        height: calc(100vh - var(--main-sidebar-height-mobile));
    }
`;
