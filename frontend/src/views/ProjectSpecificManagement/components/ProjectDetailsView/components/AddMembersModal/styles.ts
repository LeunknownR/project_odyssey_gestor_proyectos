import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 27px 0px 58px; 
    width: 70%;
    gap: 15px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 15px 0 0;
        width: 81%;
    }
`;