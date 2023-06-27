import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 72px 0 100px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 72px 0 45px;
    }
`;
export const Title = styled.h1`
    font-size: 34px;
    color: var(--darkblue-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 26px;
    }
`;
