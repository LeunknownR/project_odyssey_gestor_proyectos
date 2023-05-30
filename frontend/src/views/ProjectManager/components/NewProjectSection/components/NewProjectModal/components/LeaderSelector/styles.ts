import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--darkblue-1);
    font-weight: 700;
    font-size: 17px;
`;
type WrapperProps = {
    ref: any;
};
export const Wrapper = styled.div<WrapperProps>``;
export const Label = styled.label`
    &.primary {
        color: var(--darkblue-1);
    }
    &.secondary {
        color: var(--white-1);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 16px;
    }
`;
