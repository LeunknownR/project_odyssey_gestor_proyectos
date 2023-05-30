import { Column } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled(Column)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
    }
`;