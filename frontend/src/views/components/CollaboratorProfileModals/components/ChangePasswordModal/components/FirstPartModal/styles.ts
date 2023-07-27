import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const ActualPasswordWrapper = styled(FlexFlow)`
    gap: 25px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
    }
`;