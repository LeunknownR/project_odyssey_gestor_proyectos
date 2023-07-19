import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - var(--main-sidebar-width));
    @media (max-width: ${MOBILE_WIDTH}px) {
        margin-bottom: var(--main-sidebar-height-mobile);
    }
`;
export const Content = styled.section`
    @media (min-width: ${MOBILE_WIDTH}px) {
        margin-left: var(--main-sidebar-width);
    }
`;