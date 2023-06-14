//#region Libraries
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";
//#endregion

type ContainerProps = {
    width?: string;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${({ width = "265px" }) => width};
    gap: 10px;
    & label {
        color: var(--dark-4);
        font-weight: 600;
        font-size: 14px;
        transition: 0.35s;
    }
    &.disabled label {
        color: var(--purple-4);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 150px;
    }
`;
export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &:not(.disabled):focus > div:first-child {
        color: var(--purple-2);
        border-color: var(--purple-2);
        & svg {
            fill: var(--purple-2);
        }
    }
`;