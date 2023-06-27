import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    align-self: flex-end;
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
        align-self: flex-start;
        justify-content: space-between;
    }
`;