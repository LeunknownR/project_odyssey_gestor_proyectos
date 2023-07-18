import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: var(--darkblue-2);
    padding: 72px 0 100px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        background-color: var(--darkblue-3);
        padding: 72px 0 45px;
    }
`;
export const Title = styled.h1`
    font-size: 34px;
    color: var(--white-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 26px;
    }
`;
