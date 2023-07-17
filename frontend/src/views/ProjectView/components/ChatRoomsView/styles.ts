import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("main"))`
    width: calc(100vw - var(--main-sidebar-width));
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100vw;
    }
`;
