import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    width: 80%;
    padding-bottom: 50px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding-bottom: 40px;
    }
`;