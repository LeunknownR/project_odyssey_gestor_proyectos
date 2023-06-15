import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/config/constants';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const DataPart = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 70px;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        padding: 0;
    }
`;
export const Description = styled.p`
    color: var(--white-1);
    font-weight: 400;
    font-size: 17px;
    max-width: 565px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 15px;
        max-width: unset;
    }
`;