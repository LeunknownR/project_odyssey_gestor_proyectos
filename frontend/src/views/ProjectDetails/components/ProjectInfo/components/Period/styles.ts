import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Dates = styled.span`
    color: var(--white-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 14px;
    }
`;