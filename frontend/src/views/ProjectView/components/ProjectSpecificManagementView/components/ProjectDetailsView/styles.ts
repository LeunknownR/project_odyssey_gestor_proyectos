import styled from "styled-components";
import { MOBILE_WIDTH } from "src/config/constants";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding-bottom: var(--main-sidebar-height-mobile);
    }
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`;
