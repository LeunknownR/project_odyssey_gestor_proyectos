import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 35%;
    padding: 45px 35px;
    height: calc(100vh - var(--main-header-height));
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
        padding: 45px 15px;
        gap: 15px;
    }
`;