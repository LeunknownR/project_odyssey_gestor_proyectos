import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("section"))`
`;
export const Content = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        align-items: center;
    }
`;