//#region Libraries
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";
//#endregion

export const ConnectionBall = styled(FlexFlow.withComponent("span"))`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    transition: 0.2s;
    &.connected {
        background-color: var(--green-3);
    }
    &.disconnected {
        background-color: var(--red-2);
    }
`;