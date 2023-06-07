import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    justify-self: flex-end;
    gap: 20px;
    @media (max-width: ${MOBILE_WIDTH}px) {     
        justify-self: unset;
        gap: 10px;
    }
`;